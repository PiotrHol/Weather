const typeName = {
  addCity: "city/addCity",
  deleteCity: "city/deleteCity",
  setCity: "city/setCity",
};

const addCity = (payload) => {
  return {
    type: typeName.addCity,
    payload,
  };
};

const deleteCity = (payload) => {
  return {
    type: typeName.deleteCity,
    payload,
  };
};

const setCity = (payload) => {
  return {
    type: typeName.setCity,
    payload,
  };
};

export { typeName, addCity, deleteCity, setCity };
