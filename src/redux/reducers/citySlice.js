import { typeName, setCity } from "../actions/cityActions";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const initialState = {
  selected: [],
};

const fetchData = async (dispatch, getState) => {
  const response = await getDoc(
    doc(getFirestore(), "users", getState().auth.id)
  );
  dispatch(setCity(response.data().cities));
};

const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.addCity:
      return {
        ...state,
        selected: [...state.selected, payload],
      };
    case typeName.deleteCity:
      return {
        ...state,
        selected: state.selected.filter((city) => city.name !== payload),
      };
    case typeName.setCity:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
};

export { cityReducer, fetchData };
