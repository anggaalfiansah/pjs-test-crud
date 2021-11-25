export const requestFloor = (locCode) => {
  return { type: "REQUEST_FLOOR", payload: locCode };
};
export const clearFloor = () => {
  return { type: "CLEAR_FLOOR" };
};
