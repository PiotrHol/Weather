const typeName = {
  userSetting: "auth/getUser",
};

const getUser = (payload) => {
  return {
    type: typeName.userSetting,
    payload,
  };
};

export { typeName, getUser };
