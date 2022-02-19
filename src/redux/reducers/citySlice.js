import { typeName } from "../actions/cityActions";

const initialState = {
  selected: [],
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.setCity:
      return {
        ...state,
        selected: [...state.selected, payload],
      };
    case typeName.deleteCity:
      return {
        ...state,
        selected: state.selected.filter((city) => city.name !== payload),
      };
    default:
      return state;
  }
};

export { cityReducer };
