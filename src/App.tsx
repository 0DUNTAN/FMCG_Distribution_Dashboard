import { useState } from 'react';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import AfricaMap from './components/AfricaMap';
import DoughnutChart from './components/DoughnutChart';
import SalesChart from './components/SalesChart';
import ActivityFeed from './components/ActivityFeed';
import PerformanceIndicators from './components/PerformanceIndicators';
import TopDistributors from './components/TopDistributors';
import { distributors, metricCards, regionalData, salesData, activityLogs } from './data/mockData';
import { Distributor } from './types/dashboard';

function App() {
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Header />

      <main className="px-8 py-8 max-w-[1800px] mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard Overview
          </h2>
          <p className="text-gray-600">
            Real-time insights into your FMCG distribution network across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricCards.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        <div className="mb-8">
          <AfricaMap
            distributors={distributors}
            onDistributorClick={setSelectedDistributor}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DoughnutChart data={regionalData} title="Market Share by Region" />
          <SalesChart data={salesData} title="Distribution Trends (6 Months)" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <TopDistributors distributors={distributors} />
          </div>
          <div>
            <PerformanceIndicators />
          </div>
        </div>

        <div className="mb-8">
          <ActivityFeed activities={activityLogs} />
        </div>

        {selectedDistributor && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDistributor(null)}
          >
            <div
              className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedDistributor.name}
                  </h3>
                  <p className="text-gray-500">
                    {selectedDistributor.location.city}, {selectedDistributor.location.country}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDistributor(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-600 font-medium mb-1">Sales Volume</p>
                  <p className="text-2xl font-bold text-blue-700">
                    ${(selectedDistributor.salesVolume / 1000000).toFixed(2)}M
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <p className="text-sm text-green-600 font-medium mb-1">Active Retailers</p>
                  <p className="text-2xl font-bold text-green-700">
                    {selectedDistributor.activeRetailers}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                  <p className="text-sm text-purple-600 font-medium mb-1">Status</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {selectedDistributor.effectivelyReached ? 'Reached' : 'Not Reached'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                  <p className="text-sm text-orange-600 font-medium mb-1">Last Activity</p>
                  <p className="text-2xl font-bold text-orange-700">
                    {selectedDistributor.lastActivity}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Contact Distributor
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="px-8 text-center text-gray-500 text-sm">
          <p>© 2025 OmniOne Manufacture OS... Re-Wiring Traditional Trade In Africa.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
