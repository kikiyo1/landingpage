
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Shield } from 'lucide-react';

const featuresData = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Kualitas Premium",
    description: "Material berkualitas tinggi dengan finishing terbaik"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Pengiriman Cepat",
    description: "Pengiriman ke seluruh Indonesia dengan packaging aman"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Garansi Resmi",
    description: "Garansi 2 tahun untuk semua produk rak"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Kami berkomitmen memberikan solusi terbaik untuk kebutuhan rak minimarket Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-green-200 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
