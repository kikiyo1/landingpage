import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import { useAuth } from '@/hooks/useAuth';

const DashboardLayout = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-50 flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header username={user?.username} />
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;