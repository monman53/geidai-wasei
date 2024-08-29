export const swap = (a: unknown, b: unknown) => {
  const tmp = a;
  a = b;
  b = tmp;
  return [a, b];
};
