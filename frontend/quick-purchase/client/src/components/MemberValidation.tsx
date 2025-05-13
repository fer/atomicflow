import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

interface MemberValidationProps {
  isValidated: boolean;
  nickname: string | null;
  onValidate: (memberId: number) => Promise<void>;
  isValidating: boolean;
}

export function MemberValidation({ 
  isValidated, 
  nickname, 
  onValidate,
  isValidating
}: MemberValidationProps) {
  const [memberId, setMemberId] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleValidateClick = async () => {
    if (!memberId.trim()) {
      setError(true);
      return;
    }
    try {
      await onValidate(parseInt(memberId, 10));
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-4">Número de Socio <span className="text-red-500">*</span></h2>
        <div className="flex space-x-2">
          <Input 
            type="number"
            placeholder="Introduce tu número de socio"
            value={memberId}
            onChange={(e) => {
              setMemberId(e.target.value);
              setError(false);
            }}
            className="flex-grow"
          />
          <Button 
            className="bg-primary hover:bg-indigo-600 text-white font-semibold"
            onClick={handleValidateClick}
            disabled={isValidating}
          >
            {isValidating ? 'Validando...' : 'Validar'}
          </Button>
        </div>
        
        {/* Success message */}
        {isValidated && (
          <div className="mt-3 text-secondary">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-1" />
              Socio verificado: <span className="ml-1 font-medium">{nickname}</span>
            </span>
          </div>
        )}
        
        {/* Error message */}
        {error && (
          <div className="mt-3 text-destructive">
            <span className="flex items-center">
              <XCircle className="h-5 w-5 mr-1" />
              Número de socio no válido
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
