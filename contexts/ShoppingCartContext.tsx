import { createContext, ReactNode, useContext } from "react";
import { IProduct, shoppingCart } from "../types/types";

// Diferença entre Type e Interface e diferença entre "<>" e "as" e ":"

export const ShoppingCartContext = createContext({} as shoppingCart);

export const ShoppingCartProvder = ({ children }: { children: ReactNode }) => {

  const isBrowser = typeof window !== "undefined";
  const SESSION_STORAGE = "products";
  const ShippingValue = 100;

  const addProduct = (product: IProduct) => {
    const products = getProducts();
    const findProduct = products.find(prod => prod._id === product._id);
    if (findProduct) return;
    products.push(product);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  }

  const getProducts = (): IProduct[] => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }
    return [];
  }

  const deleteProduct = (id: string): void => {
    const products = getProducts();
    const newProducts = products.filter(product => product._id !== id);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(newProducts));
    }
  }

  const getShippingValue = (): string => {
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(ShippingValue);
  }

  const clearAll = (): void => {
    if (isBrowser) {
      sessionStorage.clear();
    }
  }

  const getTotalValue = (): string => {
    const products = getProducts();
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total + ShippingValue);
  }

  const getTotalProducts = (): string => {
    const products = getProducts();
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })).format(total);
  }

  return (
    <ShoppingCartContext.Provider value={{
      addProduct,
      getProducts,
      deleteProduct,
      getTotalValue,
      getTotalProducts,
      getShippingValue,
      clearAll
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

export default ShoppingCartProvder;
