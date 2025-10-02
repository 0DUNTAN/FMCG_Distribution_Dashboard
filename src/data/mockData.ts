import { Distributor, MetricCard, RegionalData, SalesData, ActivityLog } from '../types/dashboard';

export const distributors: Distributor[] = [
  // Nigeria
  { id: '1', name: 'Lagos Premium Dist.', location: { lat: 6.5244, lng: 3.3792, country: 'Nigeria', city: 'Lagos' }, effectivelyReached: true, salesVolume: 2500000, activeRetailers: 450, lastActivity: '2 hours ago' },
  { id: '2', name: 'Abuja Central', location: { lat: 9.0765, lng: 7.3986, country: 'Nigeria', city: 'Abuja' }, effectivelyReached: true, salesVolume: 1800000, activeRetailers: 320, lastActivity: '5 hours ago' },
  { id: '3', name: 'Kano North Dist.', location: { lat: 12.0022, lng: 8.5920, country: 'Nigeria', city: 'Kano' }, effectivelyReached: false, salesVolume: 950000, activeRetailers: 180, lastActivity: '1 day ago' },

  // Kenya
  { id: '4', name: 'Nairobi Elite', location: { lat: -1.2921, lng: 36.8219, country: 'Kenya', city: 'Nairobi' }, effectivelyReached: true, salesVolume: 2200000, activeRetailers: 410, lastActivity: '1 hour ago' },
  { id: '5', name: 'Mombasa Coastal', location: { lat: -4.0435, lng: 39.6682, country: 'Kenya', city: 'Mombasa' }, effectivelyReached: true, salesVolume: 1600000, activeRetailers: 290, lastActivity: '3 hours ago' },
  { id: '6', name: 'Kisumu West', location: { lat: -0.0917, lng: 34.7680, country: 'Kenya', city: 'Kisumu' }, effectivelyReached: false, salesVolume: 720000, activeRetailers: 140, lastActivity: '2 days ago' },

  // South Africa
  { id: '7', name: 'Johannesburg Hub', location: { lat: -26.2041, lng: 28.0473, country: 'South Africa', city: 'Johannesburg' }, effectivelyReached: true, salesVolume: 3100000, activeRetailers: 580, lastActivity: '30 mins ago' },
  { id: '8', name: 'Cape Town South', location: { lat: -33.9249, lng: 18.4241, country: 'South Africa', city: 'Cape Town' }, effectivelyReached: true, salesVolume: 2400000, activeRetailers: 470, lastActivity: '2 hours ago' },
  { id: '9', name: 'Durban East', location: { lat: -29.8587, lng: 31.0218, country: 'South Africa', city: 'Durban' }, effectivelyReached: true, salesVolume: 1900000, activeRetailers: 350, lastActivity: '4 hours ago' },

  // Ghana
  { id: '10', name: 'Accra Metro', location: { lat: 5.6037, lng: -0.1870, country: 'Ghana', city: 'Accra' }, effectivelyReached: true, salesVolume: 1400000, activeRetailers: 280, lastActivity: '1 hour ago' },
  { id: '11', name: 'Kumasi Central', location: { lat: 6.6885, lng: -1.6244, country: 'Ghana', city: 'Kumasi' }, effectivelyReached: false, salesVolume: 680000, activeRetailers: 130, lastActivity: '1 day ago' },

  // Egypt
  { id: '12', name: 'Cairo Grand Dist.', location: { lat: 30.0444, lng: 31.2357, country: 'Egypt', city: 'Cairo' }, effectivelyReached: true, salesVolume: 2800000, activeRetailers: 520, lastActivity: '1 hour ago' },
  { id: '13', name: 'Alexandria Med.', location: { lat: 31.2001, lng: 29.9187, country: 'Egypt', city: 'Alexandria' }, effectivelyReached: true, salesVolume: 1700000, activeRetailers: 310, lastActivity: '3 hours ago' },

  // Tanzania
  { id: '14', name: 'Dar es Salaam Port', location: { lat: -6.7924, lng: 39.2083, country: 'Tanzania', city: 'Dar es Salaam' }, effectivelyReached: true, salesVolume: 1300000, activeRetailers: 240, lastActivity: '2 hours ago' },
  { id: '15', name: 'Arusha North', location: { lat: -3.3869, lng: 36.6830, country: 'Tanzania', city: 'Arusha' }, effectivelyReached: false, salesVolume: 520000, activeRetailers: 95, lastActivity: '3 days ago' },

  // Ethiopia
  { id: '16', name: 'Addis Ababa Central', location: { lat: 9.0320, lng: 38.7469, country: 'Ethiopia', city: 'Addis Ababa' }, effectivelyReached: true, salesVolume: 1550000, activeRetailers: 295, lastActivity: '4 hours ago' },

  // Uganda
  { id: '17', name: 'Kampala Prime', location: { lat: 0.3476, lng: 32.5825, country: 'Uganda', city: 'Kampala' }, effectivelyReached: true, salesVolume: 980000, activeRetailers: 190, lastActivity: '5 hours ago' },

  // Morocco
  { id: '18', name: 'Casablanca Trade', location: { lat: 33.5731, lng: -7.5898, country: 'Morocco', city: 'Casablanca' }, effectivelyReached: true, salesVolume: 1650000, activeRetailers: 305, lastActivity: '2 hours ago' },

  // Angola
  { id: '19', name: 'Luanda Coastal', location: { lat: -8.8383, lng: 13.2344, country: 'Angola', city: 'Luanda' }, effectivelyReached: false, salesVolume: 780000, activeRetailers: 145, lastActivity: '2 days ago' },

  // Senegal
  { id: '20', name: 'Dakar West', location: { lat: 14.7167, lng: -17.4677, country: 'Senegal', city: 'Dakar' }, effectivelyReached: true, salesVolume: 890000, activeRetailers: 165, lastActivity: '6 hours ago' },

  // Ivory Coast
  { id: '21', name: 'Abidjan Economic', location: { lat: 5.3600, lng: -4.0083, country: 'Ivory Coast', city: 'Abidjan' }, effectivelyReached: true, salesVolume: 1150000, activeRetailers: 215, lastActivity: '3 hours ago' },

  // Zambia
  { id: '22', name: 'Lusaka Central', location: { lat: -15.3875, lng: 28.3228, country: 'Zambia', city: 'Lusaka' }, effectivelyReached: false, salesVolume: 620000, activeRetailers: 115, lastActivity: '1 day ago' },
];

export const metricCards: MetricCard[] = [
  { title: 'Total Distributors', value: '22', change: 15.3, trend: 'up', icon: 'Users', color: 'from-blue-500 to-blue-600' },
  { title: 'Effective Reach', value: '81.8%', change: 8.2, trend: 'up', icon: 'Target', color: 'from-green-500 to-green-600' },
  { title: 'Active Retailers', value: '5,860', change: 12.5, trend: 'up', icon: 'Store', color: 'from-purple-500 to-purple-600' },
  { title: 'Total Sales Volume', value: '$32.8M', change: 23.7, trend: 'up', icon: 'TrendingUp', color: 'from-orange-500 to-orange-600' },
  { title: 'Active Campaigns', value: '18', change: 5.2, trend: 'up', icon: 'Megaphone', color: 'from-pink-500 to-pink-600' },
  { title: 'Completed Surveys', value: '1,247', change: 18.9, trend: 'up', icon: 'ClipboardCheck', color: 'from-teal-500 to-teal-600' },
  { title: 'Sales Visits', value: '3,420', change: 9.4, trend: 'up', icon: 'MapPin', color: 'from-cyan-500 to-cyan-600' },
  { title: 'Stock Points', value: '156', change: 11.2, trend: 'up', icon: 'Package', color: 'from-amber-500 to-amber-600' },
];

export const regionalData: RegionalData[] = [
  { region: 'West Africa', marketShare: 28.5, distributors: 7, retailers: 1620, salesVolume: 8420000, color: '#3B82F6' },
  { region: 'East Africa', marketShare: 25.3, distributors: 6, retailers: 1525, salesVolume: 7690000, color: '#10B981' },
  { region: 'Southern Africa', marketShare: 32.1, distributors: 5, retailers: 1970, salesVolume: 9880000, color: '#F59E0B' },
  { region: 'North Africa', marketShare: 14.1, distributors: 4, retailers: 1745, salesVolume: 6810000, color: '#EF4444' },
];

export const salesData: SalesData[] = [
  { period: 'Jan', primary: 2200000, secondary: 1850000 },
  { period: 'Feb', primary: 2450000, secondary: 2100000 },
  { period: 'Mar', primary: 2800000, secondary: 2350000 },
  { period: 'Apr', primary: 2650000, secondary: 2420000 },
  { period: 'May', primary: 3100000, secondary: 2780000 },
  { period: 'Jun', primary: 3350000, secondary: 3050000 },
];

export const activityLogs: ActivityLog[] = [
  { id: '1', type: 'sale', description: 'Lagos Premium Dist. completed primary distribution of 15,000 units', timestamp: '2 hours ago', location: 'Lagos, Nigeria' },
  { id: '2', type: 'visit', description: 'Sales rep completed beat plan visit to 45 retailers', timestamp: '3 hours ago', location: 'Nairobi, Kenya' },
  { id: '3', type: 'campaign', description: 'New promotional campaign launched in Southern Africa region', timestamp: '5 hours ago', location: 'Johannesburg, South Africa' },
  { id: '4', type: 'survey', description: '127 customer satisfaction surveys completed', timestamp: '6 hours ago', location: 'Accra, Ghana' },
  { id: '5', type: 'sale', description: 'Cairo Grand Dist. achieved 125% of monthly target', timestamp: '8 hours ago', location: 'Cairo, Egypt' },
];
