import { SalesData } from '../types/dashboard';

interface SalesChartProps {
  data: SalesData[];
  title: string;
}

export default function SalesChart({ data, title }: SalesChartProps) {
  const maxValue = Math.max(
    ...data.flatMap(d => [d.primary, d.secondary])
  );

  const getHeight = (value: number) => {
    return (value / maxValue) * 100;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="mb-4 flex items-center justify-end space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded bg-gradient-to-br from-blue-500 to-blue-600"></div>
          <span className="text-sm text-gray-600">Primary Distribution</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded bg-gradient-to-br from-green-500 to-green-600"></div>
          <span className="text-sm text-gray-600">Secondary Distribution</span>
        </div>
      </div>

      <div className="relative h-80">
        <div className="absolute inset-0 flex items-end justify-between px-4">
          {data.map((item, index) => (
            <div key={item.period} className="flex flex-col items-center space-y-2 flex-1">
              <div className="flex items-end space-x-1 w-full justify-center">
                <div
                  className="w-8 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg hover:opacity-80 transition-opacity duration-300 cursor-pointer relative group"
                  style={{ height: `${getHeight(item.primary)}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${(item.primary / 1000000).toFixed(2)}M
                  </div>
                </div>
                <div
                  className="w-8 bg-gradient-to-t from-green-500 to-green-600 rounded-t-lg hover:opacity-80 transition-opacity duration-300 cursor-pointer relative group"
                  style={{ height: `${getHeight(item.secondary)}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ${(item.secondary / 1000000).toFixed(2)}M
                  </div>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-600">{item.period}</span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
          <span>${(maxValue / 1000000).toFixed(1)}M</span>
          <span>${(maxValue / 2000000).toFixed(1)}M</span>
          <span>$0M</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
          <p className="text-sm text-blue-600 font-medium mb-1">Total Primary</p>
          <p className="text-2xl font-bold text-blue-700">
            ${(data.reduce((sum, d) => sum + d.primary, 0) / 1000000).toFixed(1)}M
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
          <p className="text-sm text-green-600 font-medium mb-1">Total Secondary</p>
          <p className="text-2xl font-bold text-green-700">
            ${(data.reduce((sum, d) => sum + d.secondary, 0) / 1000000).toFixed(1)}M
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
          <p className="text-sm text-purple-600 font-medium mb-1">Growth Rate</p>
          <p className="text-2xl font-bold text-purple-700">+23.7%</p>
        </div>
      </div>
    </div>
  );
}
