import React from 'react';
import { Product } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface ProductSelectorProps {
  products: Product[];
  selectedProduct: Product | null;
  onSelectProduct: (product: Product) => void;
  isLoading: boolean;
}

export function ProductSelector({ 
  products, 
  selectedProduct, 
  onSelectProduct,
  isLoading
}: ProductSelectorProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Productos disponibles <span className="text-red-500">*</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-4 animate-pulse">
                <div className="bg-gray-200 w-full h-32 mb-3 rounded"></div>
                <div className="bg-gray-200 h-6 w-3/4 mb-2 rounded"></div>
                <div className="bg-gray-200 h-5 w-1/2 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Productos disponibles <span className="text-red-500">*</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div 
              key={product.product_id}
              className={`product-card ${selectedProduct?.product_id === product.product_id ? 'product-card-selected' : ''}`}
              onClick={() => onSelectProduct(product)}
            >
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-32 object-contain mb-3"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-700">Precio: € {product.price}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
