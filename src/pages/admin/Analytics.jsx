
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full text-center"
    >
      <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
        <BarChart2 className="w-12 h-12 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">Halaman Analitik</h1>
      <p className="text-xl text-green-200 max-w-md">
        Fitur ini sedang dalam pengembangan dan akan segera hadir! Anda akan dapat melihat grafik dan data penjualan di sini.
      </p>
    </motion.div>
  );
};

export default Analytics;
