import { Distributor } from '../types/dashboard';
import { Trophy, TrendingUp, Users } from 'lucide-react';

interface TopDistributorsProps {
  distributors: Distributor[];
}

export default function TopDistributors({ distributors }: TopDistributorsProps) {
  const topDistributors = [...distributors]
    .sort((a, b) => b.salesVolume - a.salesVolume)
    .slice(0, 5);

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0:
        return 'from-amber-400 to-amber-600';
      case 1:
        return 'from-gray-300 to-gray-500';
      case 2:
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="w-6 h-6 text-amber-500" />
        <h2 className="text-2xl font-bold text-gray-800">Top Performing Distributors</h2>
      </div>

      <div className="space-y-3">
        {topDistributors.map((distributor, index) => (
          <div
            key={distributor.id}
            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 cursor-pointer group border border-gray-100"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${getMedalColor(index)} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {index + 1}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-sm">{distributor.name}</h3>
              <p className="text-xs text-gray-500">
                {distributor.location.city}, {distributor.location.country}
              </p>
            </div>

            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-lg font-bold text-gray-800">
                  ${(distributor.salesVolume / 1000000).toFixed(2)}M
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Users className="w-3 h-3" />
                <span>{distributor.activeRetailers} retailers</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
