export function range(
  {
    start = 0,
    stop,
    step = 1,
  }: {
  start?: number,
  stop: number,
  step?: number,
}): number[] {
  const numbers: number[] = [];
  while (start < stop) {
    numbers.push(start);
    start += step;
  }
  return numbers;
}
