import React, { createContext, useState, useContext } from 'react';
import { getProducts as getProductsFromStorage, addProduct as addProductToStorage, updateProduct as updateProductInStorage, deleteProduct as deleteProductFromStorage } from '@/lib/products';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(getProductsFromStorage());

  const refreshProducts = () => {
      setProducts(getProductsFromStorage());
  }

  const addProduct = (product) => {
    addProductToStorage(product);
    refreshProducts();
  };

  const updateProduct = (product) => {
    updateProductInStorage(product);
    refreshProducts();
  };

  const deleteProduct = (id) => {
    deleteProductFromStorage(id);
    refreshProducts();
  };

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
