import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Settings, 
  Users, 
  FolderGit2,
  Shield,
  Gauge,
  Globe,
  Code,
  Server
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Projects', icon: FolderGit2, path: '/projects' },
  { 
    name: 'Tests', 
    icon: ClipboardList,
    children: [
      { name: 'Synthetic Tests', icon: Globe, path: '/tests/synthetic' },
      { name: 'Security Scans', icon: Shield, path: '/tests/security' },
      { name: 'Load Tests', icon: Gauge, path: '/tests/load' },
      { name: 'Frontend Tests', icon: Code, path: '/tests/frontend' },
      { name: 'API Tests', icon: Server, path: '/tests/api' },
    ]
  },
  { name: 'Team', icon: Users, path: '/team' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-gray-900 text-white">
      <nav className="mt-8">
        <div className="px-2 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div className="space-y-1">
                  <div className="px-4 py-2 text-sm font-medium text-gray-400">
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </div>
                  </div>
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                          location.pathname === child.path
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <child.icon className="mr-3 h-4 w-4" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}