export const requestBuilding = (locCode) => {
  return { type: "REQUEST_BUILDING", payload: locCode };
};
export const clearBuilding = () => {
  return { type: "CLEAR_BUILDING"};
};