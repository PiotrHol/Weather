import { typeName } from "../actions/cityActions";

const initialState = {
  selected: [],
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.setCity:
      return {
        ...state,
        city: [...state.city, payload],
      };
    default:
      return state;
  }
};

export { cityReducer };
