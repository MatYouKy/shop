class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
  amount: number;

  constructor(id: string, name: string, description: string, price: number, img: string, amount: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
    this.amount = amount;
  }
}

export interface ProductInterface {
  name: string;
  description: string;
  price: number;
  id: string;
  img: string;
  amount?: number;
};

export type requestConfigType = {
  url: string;
  method?: 'GET' | 'POST';
  headers?: {
    'Content-Type': 'application/json',
  };
  body?: object;
};

export type applyDataType = {
    data: () => {};
}

type ProductState = {
  items: Product[];
  totalAmount: number;
}

type ActionState = {
  type: string;
  item?: Product;
  id?: string;
};

export type ProductReducer = (state: ProductState, action: ActionState) => ProductState;

export type ProductContextObject = {
  items: Product[],
  totalAmount: number,
  addProduct: (item: Product) => void,
  removeProduct: (id: string) => void,
  resetProduct?: () => void,
  badge?: number
};

export default Product;
