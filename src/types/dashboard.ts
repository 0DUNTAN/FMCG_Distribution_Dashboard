export interface Distributor {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    country: string;
    city: string;
  };
  effectivelyReached: boolean;
  salesVolume: number;
  activeRetailers: number;
  lastActivity: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

export interface RegionalData {
  region: string;
  marketShare: number;
  distributors: number;
  retailers: number;
  salesVolume: number;
  color: string;
}

export interface SalesData {
  period: string;
  primary: number;
  secondary: number;
}

export interface ActivityLog {
  id: string;
  type: 'sale' | 'survey' | 'visit' | 'campaign';
  description: string;
  timestamp: string;
  location: string;
}
