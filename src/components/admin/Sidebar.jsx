
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Package, Home, BarChart2, PenSquare, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "Logout Berhasil",
      description: "Anda telah keluar dari panel admin.",
    });
  };

  const navItems = [
    { to: '/admin/overview', icon: <Home className="h-5 w-5" />, label: 'Dashboard' },
    { to: '/admin/products', icon: <Package className="h-5 w-5" />, label: 'Produk' },
    { to: '/admin/analytics', icon: <BarChart2 className="h-5 w-5" />, label: 'Analitik' },
    { to: '/admin/page-editor', icon: <PenSquare className="h-5 w-5" />, label: 'Editor Halaman' },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
    }`;

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5 text-white" />
            </div>
            <span className="gradient-text">METARAK</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map(item => (
              <NavLink key={item.label} to={item.to} className={getNavLinkClass}>
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
