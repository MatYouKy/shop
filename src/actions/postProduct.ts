import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { fetchProduct } from './fetchProduct';

const url = `${process.env.REACT_APP_FIREBASE_PRODUCT_ENDPOINT}products.json`;
    
export const usePostProduct = () => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState('');
    
    const postFileHandler = ( fileName: string, file: any, product: { name: string; description: string; price: number }): void => {
      const metadata = {
        contentType: 'image/jpeg'
      };
      const storageRef = ref(storage, fileName);
      const uploadFile = uploadBytesResumable(storageRef, file, metadata);

      uploadFile.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // eslint-disable-next-line no-console
          console.log(`Upload is ${progress}% done`);

            setProgress(progress);
          
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case 'paused':
              // eslint-disable-next-line no-console
              console.log('Upload is paused');
              break;
            case 'running':
              // eslint-disable-next-line no-console
              console.log('Upload is running');
              break;
          }
        },
        error => {
          setError(error.code);
        },
        () =>
          getDownloadURL(uploadFile.snapshot.ref).then(downloadURL => {
            fetchProduct(url, {
              name: product.name,
              description: product.description,
              price: product.price,
              img: downloadURL
            });
          })
      );
    };
    
    return { error, progress, postFileHandler };
};


