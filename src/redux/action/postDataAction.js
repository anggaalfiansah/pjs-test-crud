export const requestTambahData = (data) => {
  return { type: "REQUEST_TAMBAH_DATA", payload: data };
};
export const requestEditData = (data, locID) => {
  return { type: "REQUEST_EDIT_DATA", payload: { data, locID } };
};
export const clearPostData = () => {
  return { type: "CLEAR_POST_DATA" };
};
