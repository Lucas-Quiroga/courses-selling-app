 // Función para calcular el precio más caro con un incremento del 20%
 export const calculateOriginalPrice = (price: number): number => {
    const originalPrice = price * 1.2; // Aumento del 20%
    return originalPrice;
  };

  export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  export const calculatePercentage = (value: number, total: number): number => {
    return total !== 0 ? (Math.abs(value) / total) * 100 : 0;
  };

  export const calculateTotalWithWebCharge = (
    originalPrice: number,
    webCharge: number
  ): number => {
    return originalPrice + webCharge;
  };