const typeName = {
  userSetting: "auth/getUser",
  userRemove: "auth/removeUser",
};

const getUser = (payload) => {
  return {
    type: typeName.userSetting,
    payload,
  };
};

const removeUser = () => {
  return {
    type: typeName.userRemove,
  };
};

export { typeName, getUser, removeUser };
