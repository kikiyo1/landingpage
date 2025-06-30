import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';
import { useToast } from '../ui/use-toast';

const CallToAction = () => {
  const { toast } = useToast();
  const handleContactClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 glass-effect border-green-700/50">
          <div className="absolute inset-0 w-full h-full z-0">
            <img  alt="Mesin kasir modern di sebuah toko ritel" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1562064445-c4cf9ff375e5" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Siap Mengubah Wajah Toko Anda?</h2>
              <p className="text-green-200 text-lg mb-6">
                Hubungi tim ahli kami sekarang untuk mendapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan rak minimarket Anda.
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <PhoneCall className="mr-3 h-6 w-6" />
                Hubungi Kami Sekarang
              </Button>
            </div>
            <div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
