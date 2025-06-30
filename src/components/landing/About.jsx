
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              alt="Tim METARAK HADESOLUTION sedang bekerja di workshop"
              className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1676018366904-c083ed678e60" />
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">Tentang METARAK HADESOLUTION</h2>
            <p className="text-lg text-green-200 leading-relaxed">
              Kami adalah perusahaan terpercaya yang telah berpengalaman lebih dari 10 tahun dalam 
              menyediakan solusi rak minimarket berkualitas tinggi. Dengan komitmen pada kualitas 
              dan kepuasan pelanggan, kami telah melayani ratusan toko di seluruh Indonesia.
            </p>
            <p className="text-lg text-green-200 leading-relaxed">
              Tim ahli kami terdiri dari desainer dan teknisi berpengalaman yang memahami kebutuhan 
              spesifik setiap jenis toko. Kami menggunakan material berkualitas tinggi dan teknologi 
              modern untuk menghasilkan produk yang tahan lama dan estetis.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-green-200">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-green-200">Proyek Selesai</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
