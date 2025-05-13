import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface QuantitySelectorProps {
  quantity: number;
  total: number;
  onQuantityChange: (quantity: number) => void;
}

export function QuantitySelector({ quantity, total, onQuantityChange }: QuantitySelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    onQuantityChange(value);
  };

  const formattedTotal = `€${total.toFixed(2).replace('.', ',')}`;

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Cantidad (g) <span className="text-red-500">*</span></h2>
        <div className="mb-4">
          <Input
            type="number"
            id="quantity"
            placeholder="Ej: 100"
            className="w-full p-3"
            value={quantity || ''}
            min="1"
            onChange={handleChange}
          />
        </div>
        <div className="text-xl font-semibold">
          Total: <span id="total-price">{formattedTotal}</span>
        </div>
      </CardContent>
    </Card>
  );
}
