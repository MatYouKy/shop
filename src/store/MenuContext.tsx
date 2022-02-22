import { createContext, useState, useEffect, FC } from 'react';

const MenuContext = createContext({
  isOpen: false,
  closeHandler: () => {},
  toggleHandler: () => {}
});

export const MenuProvider: FC<{ children: any }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeHandler = () => setIsOpen(false);
  
  const toggleHandler = () => setIsOpen(prev => !prev);

  useEffect(() => {
    window.addEventListener('resize', () => setIsOpen(false));

    return () => window.removeEventListener('rezise', () => setIsOpen(false));
  }, [isOpen]);

  const contextValue = {
    isOpen,
    closeHandler,
    toggleHandler
  };

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};

export default MenuContext;
