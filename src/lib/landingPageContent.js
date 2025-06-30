const CONTENT_KEY = 'metarak-landing-page-content';

const initialContent = {
  heroTitle1: "METARAK",
  heroTitle2: "HADESOLUTION",
  heroSubtitle: "Solusi lengkap rak minimarket berkualitas premium dengan harga terjangkau. Tingkatkan tampilan toko Anda dengan produk terbaik dari kami!",
  heroButton1: "Lihat Katalog",
  heroButton2: "Hubungi Kami",
  productsTitle: "Katalog Produk Kami",
  productsSubtitle: "Pilihan lengkap rak minimarket dengan kualitas terjamin dan harga kompetitif",
};

const initializeContent = () => {
  const storedContent = localStorage.getItem(CONTENT_KEY);
  if (!storedContent) {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(initialContent));
  }
};

initializeContent();

export const getContent = () => {
  const content = localStorage.getItem(CONTENT_KEY);
  return content ? JSON.parse(content) : initialContent;
};

export const setContent = (newContent) => {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(newContent));
};
