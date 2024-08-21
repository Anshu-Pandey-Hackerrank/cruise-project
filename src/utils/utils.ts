import numeral from 'numeral';

export function formatAsMoney(value: number) {
  return numeral(value).format('0,0.00');
}
