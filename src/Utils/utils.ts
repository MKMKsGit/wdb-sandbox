export const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatNumberWithDecimal = (number: number, decimal?: number) => {
  const pow = Math.pow(10, decimal || 2);
  return Math.round(number * pow) / pow;
};
