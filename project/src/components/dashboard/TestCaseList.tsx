import React from 'react';
import { TestCase } from '../../types';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface TestCaseListProps {
  testCases: TestCase[];
}

export function TestCaseList({ testCases }: TestCaseListProps) {
  const getStatusIcon = (status: TestCase['status']) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Test Cases</h3>
        <div className="mt-4">
          {testCases.map((testCase) => (
            <div
              key={testCase.id}
              className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div className="flex items-center">
                {getStatusIcon(testCase.status)}
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">
                  {testCase.title}
                </span>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    testCase.priority === 'high'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
                      : testCase.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                  }`}
                >
                  {testCase.priority}
                </span>
                {testCase.assignee && (
                  <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">{testCase.assignee}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}