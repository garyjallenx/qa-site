import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface BadgeProps {
  status?: 'passed' | 'failed' | 'pending';
  priority?: 'low' | 'medium' | 'high';
}

export function Badge({ status, priority }: BadgeProps) {
  if (status) {
    const statusConfig = {
      passed: { icon: CheckCircle, className: 'bg-green-100 text-green-800' },
      failed: { icon: XCircle, className: 'bg-red-100 text-red-800' },
      pending: { icon: Clock, className: 'bg-yellow-100 text-yellow-800' },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
        <Icon className="mr-1 h-4 w-4" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  }

  if (priority) {
    const priorityConfig = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityConfig[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  }

  return null;
}