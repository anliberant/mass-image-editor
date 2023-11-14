export function getSizeStr(size: number): string {
  if (size === 0) {
    return '0Kb';
  }
  return size > 1024 * 1024
    ? `${Math.ceil(size / 1024 / 1000).toFixed(3)}Mb`
    : `${Math.ceil(size / 1024).toFixed(1)}Kb`;
}

export function calcPercentage(size: number, size2: number): number {
  if (!size || !size2) {
    return;
  }

  return (((size - size2) / size) * 100).toFixed(2);
}
