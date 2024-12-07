import React from 'react';
import { DataTable } from '../components/shared/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import { Project } from '../types';
import { FolderPlus, Settings } from 'lucide-react';

const columnHelper = createColumnHelper<Project>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Project Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
  columnHelper.accessor('updatedAt', {
    header: 'Last Updated',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

const mockData: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'Main e-commerce website and mobile app',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-20'),
  },
  {
    id: '2',
    name: 'Customer Portal',
    description: 'Customer self-service dashboard',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-02-18'),
  },
  {
    id: '3',
    name: 'Admin Dashboard',
    description: 'Internal administration system',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-15'),
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        <div className="space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Project
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Settings className="h-4 w-4 mr-2" />
            Manage Projects
          </button>
        </div>
      </div>
      <DataTable
        data={mockData}
        columns={columns}
        title="All Projects"
      />
    </div>
  );
}