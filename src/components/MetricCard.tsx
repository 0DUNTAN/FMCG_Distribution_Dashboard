import { TrendingUp, TrendingDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { MetricCard as MetricCardType } from '../types/dashboard';

interface MetricCardProps {
  metric: MetricCardType;
  onClick?: () => void;
}

export default function MetricCard({ metric, onClick }: MetricCardProps) {
  const IconComponent = Icons[metric.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold ${
          metric.trend === 'up' ? 'text-white' : 'text-red-100'
        }`}>
          {metric.trend === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{metric.change}%</span>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-white/80">{metric.title}</p>
        <p className="text-3xl font-bold">{metric.value}</p>
      </div>
    </div>
  );
}
