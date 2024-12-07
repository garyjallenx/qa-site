import React from 'react';
import { Activity, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';

const stats = [
  { name: 'Total Tests', value: '2,345', icon: Activity, change: '+12.3%', changeType: 'increase' },
  { name: 'Pass Rate', value: '94.2%', icon: TrendingUp, change: '+4.1%', changeType: 'increase' },
  { name: 'Failed Tests', value: '23', icon: AlertTriangle, change: '-2.3%', changeType: 'decrease' },
  { name: 'Test Coverage', value: '89%', icon: CheckCircle2, change: '+2.4%', changeType: 'increase' },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-700">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate">{stat.name}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-100">{stat.value}</div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}