/* eslint-disable no-restricted-syntax */
import { useState, useEffect, useCallback } from 'react';
import Products from '../interfaces/ProductInterfaces';

export const useGetProducts = (endpoint: string) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchDataHandler = useCallback(async (endpoint: string) => {
    setError(null);
    try {
      const response = await fetch(`${process.env.REACT_APP_FIREBASE_PRODUCT_ENDPOINT}${endpoint}`);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const dataItem: any[] | ((prevState: Products[]) => Products[]) = [];

      // eslint-disable-next-line guard-for-in
      for (const key in data) {
        dataItem.push((data[key] = { ...data[key], id: key }));
      }
      setProducts(dataItem);
    } catch (error) {
      const errorText = (error as Error).message;
      setError(errorText);
    }
  }, []);

  useEffect(() => {
    fetchDataHandler(endpoint);
  }, [endpoint]);

  return {
    products,
    error
  };
};
