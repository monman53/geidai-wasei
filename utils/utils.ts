export const mod = (n: number, m: number = 7) => {
  return ((n % m) + m) % m;
};

export const count = <T>(arr: T[], x: T): number => {
  return arr.reduce((total, e) => (e === x ? total + 1 : total), 0);
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
