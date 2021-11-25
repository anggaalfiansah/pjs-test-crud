const initialState = {
  project: [],
  loadingProject: false,
  messageProject: "",
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_PROJECT":
      return {
        ...state,
        loadingProject: true,
      };
    case "REQUEST_PROJECT_SUCCESS":
      return {
        ...state,
        loadingProject: false,
        project: action.data,
      };
    case "REQUEST_PROJECT_FAIL":
      return {
        ...state,
        loadingProject: false,
        messageProject: action.message,
      };
    case "CLEAR_PROJECT":
      return {
        ...state,
        project: [],
        messageProject: "",
      };
    default:
      return state;
  }
};

export default ProjectReducer;
