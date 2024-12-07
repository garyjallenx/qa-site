export interface TestCase {
  id: string;
  title: string;
  status: 'passed' | 'failed' | 'pending';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  lastRun?: Date;
  type: 'synthetic' | 'security' | 'load' | 'frontend' | 'api';
  projectId: string;
}

export interface TestSuite {
  id: string;
  name: string;
  totalTests: number;
  passed: number;
  failed: number;
  pending: number;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
}