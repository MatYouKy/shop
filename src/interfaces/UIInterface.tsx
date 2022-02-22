import { ChangeEvent } from 'react';
import { ProductContextObject } from './ProductInterfaces';

export interface InputInterface {
  id: string;
  type: string;
  name?: string;
  min?: string;
  max?: string;
  step?: string;
  defaultValue?: string | number;
  extraClassName?: string;
  value?: string;
  className?: string;
  class?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export interface ButtonInterface {
  name: string;
  type: string;
  disabled?: boolean;
  extraClassName?: string;
  onClick?: () => void | ProductContextObject;
}

export interface ScrollInterface {
  index: number;
  hasMore: boolean;
  // eslint-disable-next-line no-undef
  productsRender: JSX.Element[];
  next: () => void;
}
