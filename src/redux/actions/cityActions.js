const typeName = {
  addCity: "city/getCity",
  deleteCity: "city/deleteCity",
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

export { typeName, addCity, deleteCity };
