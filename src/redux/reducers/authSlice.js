import { typeName } from "../actions/authActions";

const initialState = {
  auth: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.userSetting:
      return {
        ...state,
        auth: payload,
      };
    default:
      return state;
  }
};

export { authReducer };
