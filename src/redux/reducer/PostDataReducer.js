const initialState = {
  loadingPost: false,
  messagePost: "",
  dataPost: null,
  initialPost: true,
};

const PostDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_TAMBAH_DATA":
      return {
        ...state,
        loadingPost: true,
        initialPost: false,
      };
    case "REQUEST_TAMBAH_DATA_SUCCESS":
      return {
        ...state,
        loadingPost: false,
        dataPost: action.data,
        messagePost: action.message,
        statusPost: true,
      };
    case "REQUEST_TAMBAH_DATA_FAIL":
      return {
        ...state,
        loadingPost: false,
        dataPost: null,
        messagePost: action.message,
        statusPost: false,
      };
    case "REQUEST_EDIT_DATA":
      return {
        ...state,
        loadingPost: true,
        initialPost: false,
      };
    case "REQUEST_EDIT_DATA_SUCCESS":
      return {
        ...state,
        loadingPost: false,
        dataPost: action.data,
        messagePost: action.message,
        statusPost: true,
      };
    case "REQUEST_EDIT_DATA_FAIL":
      return {
        ...state,
        loadingPost: false,
        dataPost: null,
        messagePost: action.message,
        statusPost: false,
      };
    case "CLEAR_POST_DATA":
      return {
        ...state,
        loadingPost: false,
        messagePost: "",
        dataPost: null,
        initialPost: true,
      };
    default:
      return state;
  }
};

export default PostDataReducer;
