export function convertCurrency(value) {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
