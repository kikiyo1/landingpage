
import React from 'react';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">METARAK</span>
                <p className="text-sm text-green-200">HADESOLUTION</p>
              </div>
            </Link>
            <p className="text-green-200 text-sm">
              Solusi terpercaya untuk kebutuhan rak minimarket Anda dengan kualitas terbaik.
            </p>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Produk</span>
            <div className="space-y-2 text-sm">
              <p className="text-green-200">Rak Gondola</p>
              <p className="text-green-200">Rak End Cap</p>
              <p className="text-green-200">Rak Promosi</p>
              <p className="text-green-200">Checkout Counter</p>
            </div>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Layanan</span>
            <div className="space-y-2 text-sm">
              <p className="text-green-200">Konsultasi Gratis</p>
              <p className="text-green-200">Custom Design</p>
              <p className="text-green-200">Instalasi</p>
              <p className="text-green-200">After Sales Service</p>
            </div>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Kontak</span>
            <div className="space-y-2 text-sm">
              <p className="text-green-200">+62 812-3456-7890</p>
              <p className="text-green-200">info@metarakhadesolution.com</p>
              <p className="text-green-200">Jakarta Timur, Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © {new Date().getFullYear()} METARAK HADESOLUTION. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
