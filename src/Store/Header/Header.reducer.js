import { SET_HEADER_TITLE } from "../typeConstants";
const initialState = {
  title: "App",
  appName: "App Name",
  rightMenu: [],
  user: {
    isLoggedIn: false
  },
  footer: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TITLE: {
      return {
        ...state,
        title: action.title
      };
    }
    default:
      return {
        ...state
      };
  }
};
