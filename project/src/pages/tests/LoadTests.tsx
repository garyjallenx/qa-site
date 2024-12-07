import React, { useState } from 'react';
import { DataTable } from '../../components/shared/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import { TestCase } from '../../types';
import { Badge } from '../../components/shared/Badge';
import { Play, BarChart } from 'lucide-react';
import { LoadTestForm, LoadTestFormData } from '../../components/forms/LoadTestForm';

const columnHelper = createColumnHelper<TestCase>();

const columns = [
  columnHelper.accessor('title', {
    header: 'Test Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Badge status={info.getValue()} />,
  }),
  columnHelper.accessor('priority', {
    header: 'Priority',
    cell: (info) => <Badge priority={info.getValue()} />,
  }),
  columnHelper.accessor('lastRun', {
    header: 'Last Run',
    cell: (info) => info.getValue()?.toLocaleDateString() || '-',
  }),
];

const mockData: TestCase[] = [
  {
    id: '1',
    title: 'Peak Hour Load Test',
    status: 'passed',
    priority: 'high',
    type: 'load',
    projectId: '1',
    lastRun: new Date('2024-02-20'),
  },
  {
    id: '2',
    title: 'API Endpoint Stress Test',
    status: 'pending',
    priority: 'medium',
    type: 'load',
    projectId: '1',
    lastRun: new Date('2024-02-19'),
  },
  {
    id: '3',
    title: 'Database Connection Load Test',
    status: 'failed',
    priority: 'high',
    type: 'load',
    projectId: '1',
    lastRun: new Date('2024-02-18'),
  },
];

export default function LoadTests() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: LoadTestFormData) => {
    console.log('Starting load test with configuration:', data);
    setShowForm(false);
    // Here you would typically start the load test with the provided configuration
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Load Tests</h1>
        <div className="space-x-4">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Play className="h-4 w-4 mr-2" />
            Run Test
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <BarChart className="h-4 w-4 mr-2" />
            View Reports
          </button>
        </div>
      </div>
      <DataTable
        data={mockData}
        columns={columns}
        title="Load Test Results"
      />
      {showForm && (
        <LoadTestForm
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}