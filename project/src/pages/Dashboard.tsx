import React from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { TestSuiteCard } from '../components/dashboard/TestSuiteCard';
import { TestCaseList } from '../components/dashboard/TestCaseList';

const mockTestSuites = [
  {
    id: '1',
    name: 'Authentication Tests',
    totalTests: 24,
    passed: 22,
    failed: 1,
    pending: 1,
    projectId: '1',
  },
  {
    id: '2',
    name: 'API Integration Tests',
    totalTests: 45,
    passed: 40,
    failed: 3,
    pending: 2,
    projectId: '1',
  },
];

const mockTestCases = [
  {
    id: '1',
    title: 'User login with valid credentials',
    status: 'passed',
    priority: 'high',
    assignee: 'Sarah Chen',
    type: 'frontend',
    projectId: '1',
  },
  {
    id: '2',
    title: 'Password reset flow',
    status: 'failed',
    priority: 'high',
    assignee: 'Mike Johnson',
    type: 'api',
    projectId: '1',
  },
  {
    id: '3',
    title: 'User profile update',
    status: 'pending',
    priority: 'medium',
    assignee: 'Alex Kim',
    type: 'api',
    projectId: '1',
  },
] as const;

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h1>
      <DashboardStats />
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {mockTestSuites.map((suite) => (
          <TestSuiteCard key={suite.id} suite={suite} />
        ))}
      </div>
      <div className="mt-8">
        <TestCaseList testCases={mockTestCases} />
      </div>
    </>
  );
}