import { combineReducers, createStore } from "redux";

const initialState = {
  isLogin: false,
  token: null,
  userInfo: null,
  isRegistered: false,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case "IS_REGISTERED":
      return { ...state, isRegistered: action.payload };
    case "IS_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "AUTH_CODE_EXPIRE":
      return { ...state, authCodeExpire: action.payload };

    case "REGISTER_DATA":
      return { ...state, registerData: action.payload };

    default:
      return state;
  }
}

function init(state = initialState, action) {
  switch (action.type) {
    case "USER_INFO":
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
}

function params(state = initialState, action) {
  switch (action.type) {
    case "ZIP_CODE":
      return { ...state, zipCode: action.payload };
    case "NEW_ZIP_CODE":
      return { ...state, newZipCode: action.payload || false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  init,
  auth,
  params,
});
export const store = createStore(AppReducer);
export default AppReducer;
