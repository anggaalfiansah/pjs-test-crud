export const requestDetailLocation = (locId) => {
  return { type: "REQUEST_DETAIL_LOCATION", payload: locId };
};
export const clearDetailLocation = () => {
  return { type: "CLEAR_DETAIL_LOCATION" };
};
