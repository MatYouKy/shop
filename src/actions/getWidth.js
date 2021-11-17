export const getWidth = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      return true;
    }
    return false;
};