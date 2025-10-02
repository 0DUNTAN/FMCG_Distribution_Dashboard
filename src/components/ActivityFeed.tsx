import { ActivityLog } from '../types/dashboard';
import { ShoppingCart, MapPin, Megaphone, ClipboardCheck } from 'lucide-react';

interface ActivityFeedProps {
  activities: ActivityLog[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const getIcon = (type: ActivityLog['type']) => {
    switch (type) {
      case 'sale':
        return <ShoppingCart className="w-5 h-5 text-blue-600" />;
      case 'visit':
        return <MapPin className="w-5 h-5 text-green-600" />;
      case 'campaign':
        return <Megaphone className="w-5 h-5 text-purple-600" />;
      case 'survey':
        return <ClipboardCheck className="w-5 h-5 text-orange-600" />;
    }
  };

  const getBgColor = (type: ActivityLog['type']) => {
    switch (type) {
      case 'sale':
        return 'bg-blue-100';
      case 'visit':
        return 'bg-green-100';
      case 'campaign':
        return 'bg-purple-100';
      case 'survey':
        return 'bg-orange-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer group"
          >
            <div className={`p-3 rounded-lg ${getBgColor(activity.type)} group-hover:scale-110 transition-transform duration-300`}>
              {getIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                {activity.description}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{activity.location}</span>
                <span>•</span>
                <span>{activity.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300">
        View All Activities
      </button>
    </div>
  );
}
