export const timeToHrsMinutes = time => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

export const numToCurrency = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const dateToLocaleDate = (date, locale, options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}) => {
  const dateToFormat = new Date(date);
  
  return dateToFormat.toLocaleString(locale, options);
}