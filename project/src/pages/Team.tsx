import React from 'react';
import { DataTable } from '../components/shared/DataTable';
import { createColumnHelper } from '@tanstack/react-table';
import { User } from '../types';
import { UserPlus, Settings } from 'lucide-react';

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => (
      <span className="capitalize px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('createdAt', {
    header: 'Member Since',
    cell: (info) => info.getValue().toLocaleDateString(),
  }),
];

const mockData: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    createdAt: new Date('2024-02-01'),
  },
];

export default function Team() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Team</h1>
        <div className="space-x-4">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Member
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Settings className="h-4 w-4 mr-2" />
            Team Settings
          </button>
        </div>
      </div>
      <DataTable
        data={mockData}
        columns={columns}
        title="Team Members"
      />
    </div>
  );
}