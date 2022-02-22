import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';

export const getFileHandler = (fileName: string) => {
  const [storageFile, setStorageFile] = useState<any>();

  useEffect(() => {
    const storageHandler = async() => {
        const starsRef = ref(storage, `products/${fileName}`);
        const response = await getDownloadURL(starsRef);
        setStorageFile(response);
      };
      storageHandler();
  }, [fileName])

  return { storageFile };
};
