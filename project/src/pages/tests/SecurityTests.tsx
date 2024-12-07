import React from 'react';
import { DataTable } from '../../components/shared/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import { TestCase } from '../../types';
import { Badge } from '../../components/shared/Badge';
import { Play, Shield } from 'lucide-react';

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
    title: 'SQL Injection Scan',
    status: 'passed',
    priority: 'high',
    type: 'security',
    projectId: '1',
    lastRun: new Date('2024-02-20'),
  },
  {
    id: '2',
    title: 'XSS Vulnerability Test',
    status: 'pending',
    priority: 'high',
    type: 'security',
    projectId: '1',
    lastRun: new Date('2024-02-19'),
  },
  {
    id: '3',
    title: 'CSRF Protection Check',
    status: 'failed',
    priority: 'medium',
    type: 'security',
    projectId: '1',
    lastRun: new Date('2024-02-18'),
  },
];

export default function SecurityTests() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Security Tests</h1>
        <div className="space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Play className="h-4 w-4 mr-2" />
            Run Scan
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Shield className="h-4 w-4 mr-2" />
            Security Report
          </button>
        </div>
      </div>
      <DataTable
        data={mockData}
        columns={columns}
        title="Security Test Results"
      />
    </div>
  );
}