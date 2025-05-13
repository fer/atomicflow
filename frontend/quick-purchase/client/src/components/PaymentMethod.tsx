import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { PaymentMethod } from '@/types';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({ 
  selectedMethod, 
  onMethodChange 
}: PaymentMethodSelectorProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Método de Pago <span className="text-red-500">*</span></h2>
        <RadioGroup 
          value={selectedMethod} 
          onValueChange={(value) => onMethodChange(value as PaymentMethod)}
          className="space-y-3"
        >
          <div className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-neutral cursor-pointer ${selectedMethod === 'cash' ? 'border-primary bg-blue-50' : ''}`}>
            <RadioGroupItem value="cash" id="cash" className="h-5 w-5" />
            <Label htmlFor="cash" className="text-lg cursor-pointer">Cash</Label>
          </div>
          <div className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-neutral cursor-pointer ${selectedMethod === 'cuenta' ? 'border-primary bg-blue-50' : ''}`}>
            <RadioGroupItem value="cuenta" id="cuenta" className="h-5 w-5" />
            <Label htmlFor="cuenta" className="text-lg cursor-pointer">Cuenta</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
