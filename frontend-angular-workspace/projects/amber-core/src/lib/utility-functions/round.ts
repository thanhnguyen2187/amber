export function round(
  {
    value,
    step = 1,
    mathFunction,
  }: {
    value: number,
    step: number,
    mathFunction: (x: number) => number,
  }
): number {
  const inverse = 1 / step;
  return mathFunction(value * inverse) / inverse;
}
