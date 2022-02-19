const typeName = {
  setCity: "city/getCity",
  deleteCity: "city/deleteCity",
};

const setCity = (payload) => {
  return {
    type: typeName.setCity,
    payload,
  };
};

const deleteCity = (payload) => {
  return {
    type: typeName.deleteCity,
    payload,
  };
};

export { typeName, setCity, deleteCity };
