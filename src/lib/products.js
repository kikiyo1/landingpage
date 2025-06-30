const PRODUCTS_KEY = 'metarak-products';

const initialProducts = [
    {
      id: 1,
      name: "Rak Gondola Single Side",
      price: 2500000,
      originalPrice: 3000000,
      stock: 50,
      category: "Gondola",
      description: "Rak gondola satu sisi dengan 4 tingkat, cocok untuk dinding toko",
      features: ["4 Tingkat Rak", "Bahan Besi Berkualitas", "Cat Anti Karat", "Mudah Dirakit"],
      image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142?q=80&w=2072&auto=format&fit=crop',
    },
    {
      id: 2,
      name: "Rak Gondola Double Side",
      price: 4200000,
      originalPrice: 5000000,
      stock: 35,
      category: "Gondola",
      description: "Rak gondola dua sisi dengan 5 tingkat, ideal untuk tengah ruangan",
      features: ["5 Tingkat Rak", "Double Side Display", "Heavy Duty", "Roda Opsional"],
      image: 'https://images.unsplash.com/photo-1675825547463-0788eca2320e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      name: "Rak End Cap",
      price: 1800000,
      originalPrice: 2200000,
      stock: 70,
      category: "Aksesoris",
      description: "Rak ujung untuk melengkapi display gondola Anda",
      features: ["3 Tingkat Rak", "Desain Compact", "Easy Assembly", "Finishing Premium"],
      image: 'https://images.unsplash.com/photo-1611064620222-c5543fe33eab?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 4,
      name: "Rak Promosi",
      price: 1200000,
      originalPrice: 1500000,
      stock: 40,
      category: "Promosi",
      description: "Rak khusus untuk display produk promosi dan seasonal",
      features: ["Portable Design", "Eye-catching", "Quick Setup", "Durable Material"],
      image: 'https://images.unsplash.com/photo-1676018366904-c083ed678e60?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      name: "Rak Checkout Counter",
      price: 3500000,
      originalPrice: 4200000,
      stock: 20,
      category: "Kasir",
      description: "Rak kasir lengkap dengan storage dan display area",
      features: ["Built-in Storage", "Cash Drawer Ready", "Wire Management", "Professional Look"],
      image: 'https://images.unsplash.com/photo-1611064620222-c5543fe33eab?q=80&w=1974&auto=format&fit=crop',
    },
    {
      id: 6,
      name: "Rak Freezer Display",
      price: 5800000,
      originalPrice: 7000000,
      stock: 15,
      category: "Khusus",
      description: "Rak khusus untuk area freezer dan produk beku",
      features: ["Cold Resistant", "Anti-Slip Surface", "Drainage System", "Food Grade Material"],
      image: 'https://images.unsplash.com/photo-1559223669-e0065fa7f142?q=80&w=2072&auto=format&fit=crop',
    }
];

const initializeProducts = () => {
  const storedProducts = localStorage.getItem(PRODUCTS_KEY);
  if (!storedProducts) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
  }
};

initializeProducts();

export const getProducts = () => {
  const products = localStorage.getItem(PRODUCTS_KEY);
  return products ? JSON.parse(products) : [];
};

export const getProductById = (id) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

export const addProduct = (product) => {
  const products = getProducts();
  const newProduct = {
    ...product,
    id: Date.now(), 
    price: Number(product.price),
    originalPrice: Number(product.originalPrice),
    stock: Number(product.stock),
    features: product.features.split(',').map(f => f.trim()),
  };
  const updatedProducts = [...products, newProduct];
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
  return newProduct;
};

export const updateProduct = (updatedProduct) => {
  let products = getProducts();
  const productWithParsedFeatures = {
    ...updatedProduct,
    price: Number(updatedProduct.price),
    originalPrice: Number(updatedProduct.originalPrice),
    stock: Number(updatedProduct.stock),
    features: Array.isArray(updatedProduct.features) ? updatedProduct.features : updatedProduct.features.split(',').map(f => f.trim()),
  };
  products = products.map(p => p.id === productWithParsedFeatures.id ? productWithParsedFeatures : p);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  return productWithParsedFeatures;
};

export const deleteProduct = (id) => {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};