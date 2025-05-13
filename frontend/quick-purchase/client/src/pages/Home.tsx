import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductSelector } from '@/components/ProductSelector';
import { QuantitySelector } from '@/components/QuantitySelector';
import { MemberValidation } from '@/components/MemberValidation';
import { PaymentMethodSelector } from '@/components/PaymentMethod';
import { OrderConfirmationComponent } from '@/components/OrderConfirmation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { fetchProducts, validateMember, submitOrder } from '@/lib/api';
import { AppState, OrderRequest, PaymentMethod, Product } from '@/types';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function Home() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [state, setState] = useState<AppState>({
    selectedProduct: null,
    quantity: 100,
    total: 0,
    member: {
      validated: false,
      id: null,
      nickname: null,
    },
    paymentMethod: 'cuenta',
    view: 'order-form',
    confirmation: null,
    error: null,
  });

  // Fetch products
  const { 
    data: products = [], 
    isLoading: isLoadingProducts,
    error: productsError
  } = useQuery({ 
    queryKey: ['/api/v1/products'],
    queryFn: fetchProducts
  });

  // Member validation mutation
  const validateMemberMutation = useMutation({
    mutationFn: (userId: number) => validateMember(userId),
    onSuccess: (data) => {
      if ('error' in data) {
        setState(prev => ({
          ...prev,
          member: {
            validated: false,
            id: null,
            nickname: null,
          },
          error: data.error
        }));
        toast({
          variant: "destructive",
          title: "Error de validación",
          description: "Número de socio no válido",
        });
      } else {
        setState(prev => ({
          ...prev,
          member: {
            validated: true,
            id: data.user_id,
            nickname: data.nickname,
          },
          error: null
        }));
      }
    },
    onError: (error) => {
      setState(prev => ({
        ...prev,
        error: 'Error al validar el socio'
      }));
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al validar el socio. Por favor intenta de nuevo.",
      });
    }
  });

  // Order submission mutation
  const submitOrderMutation = useMutation({
    mutationFn: (orderData: OrderRequest) => submitOrder(orderData),
    onSuccess: (data) => {
      setState(prev => ({
        ...prev,
        view: 'confirmation',
        confirmation: data,
        error: null
      }));
    },
    onError: (error) => {
      setState(prev => ({
        ...prev,
        view: 'error',
        error: 'Error al procesar el pedido'
      }));
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al procesar el pedido. Por favor intenta de nuevo.",
      });
    }
  });

  // Update total when product or quantity changes
  useEffect(() => {
    if (state.selectedProduct) {
      // Calculate total by multiplying quantity by product price
      const calculatedTotal = state.quantity * state.selectedProduct.price;
      setState(prev => ({
        ...prev,
        total: calculatedTotal
      }));
    }
  }, [state.selectedProduct, state.quantity]);

  // Select product
  const handleSelectProduct = (product: Product) => {
    setState(prev => ({
      ...prev,
      selectedProduct: product
    }));
  };

  // Update quantity
  const handleQuantityChange = (quantity: number) => {
    setState(prev => ({
      ...prev,
      quantity
    }));
  };

  // Validate member
  const handleValidateMember = async (userId: number) => {
    await validateMemberMutation.mutateAsync(userId);
  };

  // Update payment method
  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setState(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  // Submit order
  const handleSubmitOrder = () => {
    if (!validateForm()) {
      return;
    }

    const paymentId = state.paymentMethod === 'cash' ? 1 : 2;
    
    const orderData: OrderRequest = {
      user_id: state.member.id!,
      product_id: state.selectedProduct!.product_id,
      quantity: state.quantity,
      total: state.total,
      payment_id: paymentId
    };

    submitOrderMutation.mutate(orderData);
  };

  // Validate form before submission
  const validateForm = () => {
    if (!state.selectedProduct) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor selecciona un producto.",
      });
      return false;
    }
    
    if (!state.quantity || state.quantity <= 0) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor ingresa una cantidad válida.",
      });
      return false;
    }
    
    if (!state.member.validated) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor valida tu número de socio.",
      });
      return false;
    }
    
    return true;
  };

  // Reset state for new order
  const handleNewOrder = () => {
    setState({
      selectedProduct: null,
      quantity: 100,
      total: 0,
      member: {
        validated: false,
        id: null,
        nickname: null,
      },
      paymentMethod: 'cuenta',
      view: 'order-form',
      confirmation: null,
      error: null,
    });
  };

  // Retry after error
  const handleRetry = () => {
    setState(prev => ({
      ...prev,
      view: 'order-form',
      error: null
    }));
  };

  // Loading indicator
  if (submitOrderMutation.isPending) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Mi Tienda</h1>
          <p className="text-gray-600">Procesando tu pedido...</p>
        </header>
        
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (state.view === 'error' || productsError) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Mi Tienda</h1>
          <p className="text-gray-600">Ha ocurrido un error</p>
        </header>
        
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {state.error || 'Error al cargar los productos. Por favor intenta de nuevo.'}
          </AlertDescription>
        </Alert>
        
        <Button 
          className="w-full bg-primary hover:bg-indigo-600 text-white font-semibold py-3"
          onClick={handleRetry}
        >
          Intentar de nuevo
        </Button>
      </div>
    );
  }

  // Confirmation state
  if (state.view === 'confirmation' && state.confirmation) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Mi Tienda</h1>
          <p className="text-gray-600">Confirmación de pedido</p>
        </header>
        
        <OrderConfirmationComponent 
          confirmation={state.confirmation}
          paymentMethod={state.paymentMethod}
          onNewOrder={handleNewOrder}
        />
      </div>
    );
  }

  // Order form state
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Mi Tienda</h1>
        <p className="text-gray-600">Completa tu compra</p>
      </header>
      
      <div className="space-y-8">
        <ProductSelector 
          products={products} 
          selectedProduct={state.selectedProduct}
          onSelectProduct={handleSelectProduct}
          isLoading={isLoadingProducts}
        />
        
        <QuantitySelector 
          quantity={state.quantity} 
          total={state.total}
          onQuantityChange={handleQuantityChange}
        />
        
        <MemberValidation 
          isValidated={state.member.validated}
          nickname={state.member.nickname}
          onValidate={handleValidateMember}
          isValidating={validateMemberMutation.isPending}
        />
        
        <PaymentMethodSelector 
          selectedMethod={state.paymentMethod}
          onMethodChange={handlePaymentMethodChange}
        />
        
        <Button 
          className="w-full bg-secondary hover:bg-green-600 text-white font-semibold py-4 text-lg"
          onClick={handleSubmitOrder}
        >
          Confirmar Pedido
        </Button>
      </div>
    </div>
  );
}
