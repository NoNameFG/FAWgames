export const currencyConverter = data => {
  switch (data) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case "UAH":
      return 'грн.';
    default:
      return 'руб.';
  }
}
