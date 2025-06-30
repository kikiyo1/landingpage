
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useProducts } from '@/context/ProductContext';
import { useLandingPageContent } from '@/context/LandingPageContext';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';

const Products = () => {
  const { toast } = useToast();
  const { products } = useProducts();
  const { content } = useLandingPageContent();

  const handleBuyClick = (productName) => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: `Tombol beli untuk "${productName}" belum berfungsi. Anda bisa memintanya di prompt berikutnya! 🚀`,
      duration: 4000,
    });
  };
  
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  if (!products || products.length === 0) {
    return (
        <section id="products" className="py-20">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold text-white mb-4">Produk Tidak Ditemukan</h2>
                 <p className="text-xl text-green-200">Silakan tambahkan produk melalui panel admin.</p>
            </div>
        </section>
    );
  }

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{content.productsTitle}</h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            {content.productsSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group flex flex-col"
            >
              <div className="relative">
                <img 
                  alt={`${product.name} - rak minimarket berkualitas tinggi`}
                  className="w-full h-48 object-cover" 
                  src={product.image || 'https://placehold.co/400x300'} 
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-green-200 text-sm mb-4 leading-relaxed flex-grow">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {(product.features || []).slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-300">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4 mt-auto">
                  <div>
                    <div className="text-2xl font-bold text-green-400">{formatRupiah(product.price)}</div>
                    <div className="text-sm text-gray-400 line-through">{formatRupiah(product.originalPrice)}</div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleBuyClick(product.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Beli Sekarang
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
