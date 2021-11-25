export const requestTambahData = (locCode) => {
  return { type: "REQUEST_TAMBAH_DATA", payload: locCode };
};
export const requestEditData = (locCode) => {
  return { type: "REQUEST_EDIT_DATA", payload: locCode };
};
export const clearPostData = () => {
  return { type: "CLEAR_POST_DATA" };
};
