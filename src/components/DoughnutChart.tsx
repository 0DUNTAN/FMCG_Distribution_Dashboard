import { RegionalData } from '../types/dashboard';

interface DoughnutChartProps {
  data: RegionalData[];
  title: string;
}

export default function DoughnutChart({ data, title }: DoughnutChartProps) {
  const total = data.reduce((sum, item) => sum + item.marketShare, 0);

  let currentAngle = -90;
  const segments = data.map((item) => {
    const percentage = (item.marketShare / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const largeArc = angle > 180 ? 1 : 0;

    const x1 = 50 + 40 * Math.cos(startRad);
    const y1 = 50 + 40 * Math.sin(startRad);
    const x2 = 50 + 40 * Math.cos(endRad);
    const y2 = 50 + 40 * Math.sin(endRad);

    const pathData = [
      `M 50 50`,
      `L ${x1} ${y1}`,
      `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
      `Z`,
    ].join(' ');

    return { ...item, pathData, percentage };
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="flex items-center justify-center space-x-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="transform -rotate-0">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="20" />

            {segments.map((segment, index) => (
              <g key={segment.region}>
                <path
                  d={segment.pathData}
                  fill={segment.color}
                  opacity="0.9"
                  className="hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              </g>
            ))}

            <circle cx="50" cy="50" r="20" fill="white" />

            <text
              x="50"
              y="48"
              textAnchor="middle"
              className="text-xs font-semibold fill-gray-500"
            >
              Market
            </text>
            <text
              x="50"
              y="55"
              textAnchor="middle"
              className="text-xs font-semibold fill-gray-500"
            >
              Share
            </text>
          </svg>
        </div>

        <div className="space-y-3">
          {segments.map((segment) => (
            <div key={segment.region} className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: segment.color }}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{segment.region}</p>
                <p className="text-xs text-gray-500">
                  {segment.distributors} distributors • {segment.retailers.toLocaleString()} retailers
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold" style={{ color: segment.color }}>
                  {segment.percentage.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500">
                  ${(segment.salesVolume / 1000000).toFixed(1)}M
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
