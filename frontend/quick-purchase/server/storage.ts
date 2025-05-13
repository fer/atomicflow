import { Product, OrderRequest, OrderConfirmation } from '@/types';

// Mock products data
const products: Product[] = [
  {
    row_number: 1,
    active: true,
    product_id: "tag_1",
    name: "Producto 1",
    price: 20,
    image_url: "https://picsum.photos/id/3/200"
  },
  {
    row_number: 2,
    active: true,
    product_id: "tag_2",
    name: "Producto 2",
    price: 35,
    image_url: "https://picsum.photos/id/306/200"
  },
  {
    row_number: 3,
    active: true,
    product_id: "tag_3",
    name: "Producto 3",
    price: 50,
    image_url: "https://picsum.photos/id/0/200"
  }
];

// Valid members for validation
const validMembers = [
  {
    user_id: 1,
    nickname: "mabel"
  }
];

export const storage = {
  // Get all products
  getProducts: (): Promise<Product[]> => {
    return Promise.resolve(products);
  },

  // Validate member by ID
  validateMember: (userId: number): Promise<any> => {
    const member = validMembers.find(m => m.user_id === userId);
    
    if (member) {
      return Promise.resolve([member]);
    } else {
      return Promise.resolve([{ error: "NOT_VALID_MEMBER" }]);
    }
  },

  // Submit order and generate confirmation
  submitOrder: (orderData: OrderRequest): Promise<OrderConfirmation[]> => {
    const confirmation: OrderConfirmation = {
      user_id: orderData.user_id,
      payment_code: generatePaymentCode(),
      payment_id: orderData.payment_id,
      total: orderData.total,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    };
    
    return Promise.resolve([confirmation]);
  }
};

// Helper to generate random payment code
function generatePaymentCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return code;
}
