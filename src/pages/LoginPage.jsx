
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Package } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      toast({
        title: 'Login Berhasil!',
        description: 'Selamat datang kembali, Admin!',
      });
      navigate('/admin/overview');
    } else {
      toast({
        title: 'Login Gagal',
        description: 'Username atau password salah. Silakan coba lagi.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-emerald-950 p-4 hero-pattern">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mx-auto max-w-sm glass-effect border-green-700">
          <CardHeader className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">METARAK</h1>
                <p className="text-sm text-green-200">HADESOLUTION</p>
              </div>
            </Link>
            <CardTitle className="text-2xl text-white">Login Admin</CardTitle>
            <CardDescription className="text-green-200">Masukkan kredensial Anda untuk mengakses dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-white">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="KIWUT"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-green-900/50 border-green-700 text-white placeholder:text-green-300/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password"  className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-green-900/50 border-green-700 text-white placeholder:text-green-300/50"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Masuk
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
