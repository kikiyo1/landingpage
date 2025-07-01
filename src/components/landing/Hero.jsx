
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLandingPageContent } from '@/context/LandingPageContext';
import { ShoppingCart, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();
  const { content } = useLandingPageContent();

  const handleBuyClick = () => {
    window.location.href = "https://sisworo-74397.myr.id/checkout/rak-minimarket-65348";
  };

  return (
    <section id="home" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">{content.heroTitle1}</span>
                <br />
                <span className="text-white">{content.heroTitle2}</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                {content.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {content.heroButton1}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleBuyClick}
                variant="outline"
                size="lg"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {content.heroButton2}
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">500+</div>
                <div className="text-sm text-green-200">Toko Terlayani</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">5★</div>
                <div className="text-sm text-green-200">Rating Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">2 Tahun</div>
                <div className="text-sm text-green-200">Garansi</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  alt="Rak minimarket kosong yang bersih dan modern" className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1586154191288-db294aacc8d2" />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
