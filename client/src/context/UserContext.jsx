import React, { createContext } from "react";
export const userContext = createContext();

const UserContext = (props) => {
  const { children, value } = props;
  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
