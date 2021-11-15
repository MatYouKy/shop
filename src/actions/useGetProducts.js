import { useState, useEffect } from 'react';

export const useGetProducts = () => {   
    const [state, setState] = useState([]);
    const getProducts = () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setState(data)
        })
    }
    
    useEffect(() => {
        getProducts();
    },[])
    
    return state
}
