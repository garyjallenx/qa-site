import React from 'react';
import { TestSuite } from '../../types';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

interface TestSuiteCardProps {
  suite: TestSuite;
}

export function TestSuiteCard({ suite }: TestSuiteCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-gray-100">{suite.name}</h3>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-sm text-gray-300">{suite.passed} Passed</span>
        </div>
        <div className="flex items-center">
          <XCircle className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-sm text-gray-300">{suite.failed} Failed</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-yellow-500 mr-2" />
          <span className="text-sm text-gray-300">{suite.pending} Pending</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${(suite.passed / suite.totalTests) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}