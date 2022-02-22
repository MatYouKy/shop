
export const fetchProduct = async ( url: string, product: { name: string; description: string; price: number; img: string }) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      throw new Error('dismiss posst');
    }
};