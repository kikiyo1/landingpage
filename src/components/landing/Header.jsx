
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Package, Phone, UserCog } from 'lucide-react';

const Header = () => {
  const { toast } = useToast();

  const handleConsultationClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">METARAK</h1>
              <p className="text-sm text-green-200">HADESOLUTION</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-green-300 transition-colors">Beranda</a>
            <a href="#products" className="text-white hover:text-green-300 transition-colors">Produk</a>
            <a href="#about" className="text-white hover:text-green-300 transition-colors">Tentang</a>
            <a href="#contact" className="text-white hover:text-green-300 transition-colors">Kontak</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button 
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Konsultasi
            </Button>
            <Link to="/admin">
              <Button variant="outline" size="icon" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 rounded-xl">
                <UserCog className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
