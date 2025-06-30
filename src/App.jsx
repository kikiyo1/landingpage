
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import DashboardLayout from '@/pages/admin/DashboardLayout';
import DashboardOverview from '@/pages/admin/DashboardOverview';
import ProductManagement from '@/pages/admin/ProductManagement';
import Analytics from '@/pages/admin/Analytics';
import LoginPage from '@/pages/LoginPage';
import PageEditor from '@/pages/admin/PageEditor';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';
import { ProductProvider } from '@/context/ProductContext';
import { LandingPageProvider } from '@/context/LandingPageContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <LandingPageProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<DashboardOverview />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="page-editor" element={<PageEditor />} />
            </Route>
          </Routes>
          <Toaster />
        </LandingPageProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
