import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Distributor } from '../types/dashboard';
import { CheckCircle2, AlertCircle, TrendingUp, Users } from 'lucide-react';

interface AfricaMapProps {
  distributors: Distributor[];
  onDistributorClick?: (distributor: Distributor) => void;
}

function MapUpdater() {
  const map = useMap();
  useMemo(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

export default function AfricaMap({ distributors, onDistributorClick }: AfricaMapProps) {
  const [selectedDist, setSelectedDist] = useState<string | null>(null);

  const effectiveDistributors = distributors.filter(d => d.effectivelyReached);
  const ineffectiveDistributors = distributors.filter(d => !d.effectivelyReached);

  const createCustomIcon = (isEffective: boolean) => {
    const color = isEffective ? '#10B981' : '#EF4444';
    const shadowColor = isEffective ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)';

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <div style="
            width: 24px;
            height: 24px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px ${shadowColor}, 0 0 0 8px ${shadowColor};
            animation: pulse 2s infinite;
          "></div>
        </div>
        <style>
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        </style>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Distribution Network Map</h2>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
            <span className="text-gray-600">Effectively Reached ({effectiveDistributors.length})</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
            <span className="text-gray-600">Not Reached ({ineffectiveDistributors.length})</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-inner">
        <MapContainer
          center={[0, 20]}
          zoom={3.5}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
          className="z-0"
        >
          <MapUpdater />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {distributors.map((dist) => (
            <Marker
              key={dist.id}
              position={[dist.location.lat, dist.location.lng]}
              icon={createCustomIcon(dist.effectivelyReached)}
              eventHandlers={{
                click: () => {
                  setSelectedDist(dist.id);
                  onDistributorClick?.(dist);
                },
              }}
            >
              <Popup className="custom-popup" maxWidth={300}>
                <div className="p-2">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${dist.effectivelyReached ? 'bg-green-100' : 'bg-red-100'}`}>
                      {dist.effectivelyReached ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-base mb-1">{dist.name}</h3>
                      <p className="text-sm text-gray-500">{dist.location.city}, {dist.location.country}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Sales Volume</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="font-bold text-blue-600">
                            ${(dist.salesVolume / 1000000).toFixed(2)}M
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Active Retailers</span>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-green-600" />
                          <span className="font-bold text-green-600">{dist.activeRetailers}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Last Activity</span>
                        <span className="font-semibold text-purple-600">{dist.lastActivity}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onDistributorClick?.(dist)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
          <p className="text-sm text-blue-600 font-medium mb-1">Total Coverage</p>
          <p className="text-2xl font-bold text-blue-700">{distributors.length} Points</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
          <p className="text-sm text-green-600 font-medium mb-1">Effective Reach</p>
          <p className="text-2xl font-bold text-green-700">
            {((effectiveDistributors.length / distributors.length) * 100).toFixed(1)}%
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
          <p className="text-sm text-orange-600 font-medium mb-1">Countries</p>
          <p className="text-2xl font-bold text-orange-700">
            {new Set(distributors.map(d => d.location.country)).size}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
          <p className="text-sm text-purple-600 font-medium mb-1">Total Retailers</p>
          <p className="text-2xl font-bold text-purple-700">
            {distributors.reduce((sum, d) => sum + d.activeRetailers, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
