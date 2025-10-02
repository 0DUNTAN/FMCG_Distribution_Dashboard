import { TrendingUp, DollarSign, Users, Package } from 'lucide-react';

export default function PerformanceIndicators() {
  const indicators = [
    {
      label: 'Revenue Growth',
      value: '23.7%',
      change: '+5.2% vs last quarter',
      color: 'from-emerald-400 to-emerald-600',
      icon: TrendingUp,
    },
    {
      label: 'Avg Order Value',
      value: '$5,600',
      change: '+12.8% vs last month',
      color: 'from-cyan-400 to-cyan-600',
      icon: DollarSign,
    },
    {
      label: 'Sales Force Efficiency',
      value: '94.2%',
      change: '+8.5% improvement',
      color: 'from-violet-400 to-violet-600',
      icon: Users,
    },
    {
      label: 'Stock Turnover',
      value: '8.4x',
      change: '+1.2x vs last quarter',
      color: 'from-rose-400 to-rose-600',
      icon: Package,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance Indicators</h2>

      <div className="grid grid-cols-2 gap-4">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${indicator.color} rounded-xl p-5 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <indicator.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-white/90">{indicator.label}</p>
              <p className="text-3xl font-bold">{indicator.value}</p>
              <p className="text-xs text-white/80">{indicator.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
