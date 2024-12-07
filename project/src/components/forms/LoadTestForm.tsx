import React from 'react';
import { X, HelpCircle } from 'lucide-react';
import { Tooltip } from '../shared/Tooltip';

interface LoadTestFormProps {
  onClose: () => void;
  onSubmit: (data: LoadTestFormData) => void;
}

export interface LoadTestFormData {
  testName: string;
  endpoint: string;
  virtualUsers: number;
  duration: number;
  rampUpTime: number;
  thinkTime: number;
}

export function LoadTestForm({ onClose, onSubmit }: LoadTestFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      testName: formData.get('testName') as string,
      endpoint: formData.get('endpoint') as string,
      virtualUsers: Number(formData.get('virtualUsers')),
      duration: Number(formData.get('duration')),
      rampUpTime: Number(formData.get('rampUpTime')),
      thinkTime: Number(formData.get('thinkTime')),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Configure Load Test</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center space-x-2">
              <label htmlFor="testName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Test Name
              </label>
              <Tooltip content="A descriptive name for your load test that helps identify its purpose">
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <input
              type="text"
              name="testName"
              id="testName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <label htmlFor="endpoint" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Target Endpoint
              </label>
              <Tooltip content="The URL of the API endpoint or webpage you want to test">
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </Tooltip>
            </div>
            <input
              type="url"
              name="endpoint"
              id="endpoint"
              required
              placeholder="https://"
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <label htmlFor="virtualUsers" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Virtual Users
                </label>
                <Tooltip content="Number of concurrent users that will simulate traffic to your endpoint">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <input
                type="number"
                name="virtualUsers"
                id="virtualUsers"
                min="1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Duration (minutes)
                </label>
                <Tooltip content="Total duration of the load test in minutes">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <input
                type="number"
                name="duration"
                id="duration"
                min="1"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <label htmlFor="rampUpTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ramp-up Time (seconds)
                </label>
                <Tooltip content="Time taken to gradually increase the number of virtual users to the target count">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <input
                type="number"
                name="rampUpTime"
                id="rampUpTime"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <label htmlFor="thinkTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Think Time (ms)
                </label>
                <Tooltip content="Delay between requests to simulate realistic user behavior (in milliseconds)">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </Tooltip>
              </div>
              <input
                type="number"
                name="thinkTime"
                id="thinkTime"
                min="0"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}