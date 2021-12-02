import { useState, useEffect } from 'react';

export const useGetProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
            // eslint-disable-next-line no-console
            .catch(err => console.log('Error in get users', err))
    }, []);
    return { products }
}