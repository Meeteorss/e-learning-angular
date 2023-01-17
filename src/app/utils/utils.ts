export const isEmpty = (obj: any) => {
  return JSON.stringify(obj) === '{}';
};
