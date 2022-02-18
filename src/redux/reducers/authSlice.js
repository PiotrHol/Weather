import { typeName } from "../actions/authActions";

const initialState = {
  id: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.userSetting:
      return {
        ...state,
        id: payload,
      };
    default:
      return state;
  }
};

export { authReducer };
