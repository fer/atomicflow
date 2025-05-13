import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { OrderConfirmation } from '@/types';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationProps {
  confirmation: OrderConfirmation;
  paymentMethod: string;
  onNewOrder: () => void;
}

export function OrderConfirmationComponent({ 
  confirmation, 
  paymentMethod,
  onNewOrder 
}: OrderConfirmationProps) {
  const formattedTotal = `€${confirmation.total.toFixed(2).replace('.', ',')}`;
  const paymentMethodText = paymentMethod === 'cuenta' ? 'Cuenta (2)' : 'Cash (1)';

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-2 border-secondary rounded-lg p-6 text-center">
        <div className="text-secondary mb-2">
          <CheckCircle className="h-16 w-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-2">¡Pedido Confirmado!</h2>
        <p className="text-gray-600 mb-4">Tu código de pago es:</p>
        <div className="bg-white border-2 border-gray-200 rounded-md py-3 px-4 text-2xl font-bold tracking-wider mb-4">
          {confirmation.payment_code}
        </div>
        <p className="text-sm text-gray-500">Guarda este código para referencia futura</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Detalles del pedido</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span>ID de Usuario:</span>
              <span className="font-medium">{confirmation.user_id}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Método de pago:</span>
              <span className="font-medium">{paymentMethodText}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Total:</span>
              <span className="font-medium">{formattedTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Fecha:</span>
              <span className="font-medium">{confirmation.timestamp}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Button 
        className="w-full bg-primary hover:bg-indigo-600 text-white font-semibold py-3"
        onClick={onNewOrder}
      >
        Realizar nuevo pedido
      </Button>
    </div>
  );
}
