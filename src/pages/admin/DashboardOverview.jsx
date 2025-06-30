
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProducts } from '@/lib/products';

const DashboardOverview = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const stats = [
    { title: "Total Nilai Stok", value: formatRupiah(totalValue), icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, description: "Estimasi nilai total stok" },
    { title: "Total Produk", value: totalProducts, icon: <Package className="h-4 w-4 text-muted-foreground" />, description: "Jumlah jenis produk unik" },
    { title: "Total Unit Stok", value: totalStock.toLocaleString('id-ID'), icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />, description: "Jumlah semua unit di gudang" },
    { title: "Pelanggan Baru", value: "+12", icon: <Users className="h-4 w-4 text-muted-foreground" />, description: "+5.2% dari bulan lalu" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
        <p className="text-muted-foreground">Ringkasan bisnis METARAK Anda.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-muted/40 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-muted/40 border-slate-800">
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              {products.slice(0, 5).map(product => (
                <div key={product.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Produk ditambahkan: {product.name}</p>
                    <p className="text-sm text-muted-foreground">Stok: {product.stock} unit</p>
                  </div>
                  <div className="ml-auto font-medium text-green-400">{formatRupiah(product.price)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-muted/40 border-slate-800">
          <CardHeader>
            <CardTitle>Stok Segera Habis</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="space-y-4">
              {products.filter(p => p.stock < 25).slice(0, 5).map(product => (
                <div key={product.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <p className="text-sm text-red-500">Sisa stok: {product.stock} unit</p>
                  </div>
                  <div className="ml-auto font-medium">{product.category}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
