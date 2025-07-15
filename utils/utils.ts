export const mod = (n: number, m: number = 7) => {
  return ((n % m) + m) % m;
};
