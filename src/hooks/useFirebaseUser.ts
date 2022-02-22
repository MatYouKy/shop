import { useState, useCallback, useContext } from 'react';
import AuthContext from '../store/AuthContext';

export const useFirebaseUser = () => {
  const { login } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(false);

  const sendRequest = useCallback(async ({ url, emailValue, passwordValue }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Request filed!');
      }
      const data = await response.json();
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));

      if (data) login(data!.idToken, expirationTime.toISOString());
    } catch (error: any) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  };
};
