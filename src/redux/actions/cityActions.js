const typeName = {
  setCity: "city/getCity",
};

const setCity = (payload) => {
  return {
    type: typeName.setCity,
    payload,
  };
};

export { typeName, setCity };
