export interface Product {
  row_number: number;
  active: boolean;
  product_id: string;
  name: string;
  price: number;
  image_url: string;
}

export interface Member {
  user_id: number;
  nickname: string;
}

export interface MemberValidationError {
  error: string;
}

export interface OrderRequest {
  user_id: number;
  product_id: string;
  quantity: number;
  total: number;
  payment_id: number;
}

export interface OrderConfirmation {
  user_id: number;
  payment_code: string;
  payment_id: number;
  total: number;
  timestamp: string;
}

export type PaymentMethod = 'cash' | 'cuenta';

export interface AppState {
  selectedProduct: Product | null;
  quantity: number;
  total: number;
  member: {
    validated: boolean;
    id: number | null;
    nickname: string | null;
  };
  paymentMethod: PaymentMethod;
  view: 'order-form' | 'loading' | 'error' | 'confirmation';
  confirmation: OrderConfirmation | null;
  error: string | null;
}
