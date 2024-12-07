import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SyntheticTests from './pages/tests/SyntheticTests';
import SecurityTests from './pages/tests/SecurityTests';
import LoadTests from './pages/tests/LoadTests';
import FrontendTests from './pages/tests/FrontendTests';
import ApiTests from './pages/tests/ApiTests';
import Team from './pages/Team';
import Settings from './pages/Settings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/tests/synthetic" element={<SyntheticTests />} />
                    <Route path="/tests/security" element={<SecurityTests />} />
                    <Route path="/tests/load" element={<LoadTests />} />
                    <Route path="/tests/frontend" element={<FrontendTests />} />
                    <Route path="/tests/api" element={<ApiTests />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;