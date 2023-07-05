export const STEPS = 10;
export const currentPag = (arr, currPage, steps = STEPS) => {
  const limit = currPage * steps;
  const offset = limit - steps;
  const page = arr.slice(offset, limit);
  return page;
};