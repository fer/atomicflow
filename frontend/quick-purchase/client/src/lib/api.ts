import { Member, MemberValidationError, OrderConfirmation, OrderRequest, Product } from '@/types';
import { apiRequest } from '@/lib/queryClient';

// External API base URL
const API_BASE_URL = 'https://n8n.atomicflow.net/webhook/xls-webshop';

export async function fetchProducts(): Promise<Product[]> {
  // Direct call to external API
  const response = await fetch(`${API_BASE_URL}/api/v1/products`, {
    mode: 'cors',  // Enable CORS
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  
  return response.json();
}

export async function validateMember(userId: number): Promise<Member | MemberValidationError> {
  // Direct call to external API
  const response = await fetch(`${API_BASE_URL}/api/v1/validate_member`, {
    method: 'POST',
    mode: 'cors',  // Enable CORS
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ user_id: userId })
  });
  
  if (!response.ok) {
    throw new Error(`Failed to validate member: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  // Different response format based on success/error:
  // Success: Single object with user_id and nickname
  // Error: Array with a single object containing error property
  if (Array.isArray(data)) {
    return data[0]; // Return the error object from the array
  } else {
    return data; // Return the success data (single object)
  }
}

export async function submitOrder(orderData: OrderRequest): Promise<OrderConfirmation> {
  // Direct call to external API
  const response = await fetch(`${API_BASE_URL}/api/v1/registry`, {
    method: 'POST',
    mode: 'cors',  // Enable CORS
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(orderData)
  });
  
  if (!response.ok) {
    throw new Error(`Failed to submit order: ${response.statusText}`);
  }
  
  const data = await response.json();
  return data[0];
}
