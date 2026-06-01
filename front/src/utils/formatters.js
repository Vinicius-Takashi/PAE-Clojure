export function formatMillimeters(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '-';
  }

  return `${value.toFixed(2)} mm`;
}
