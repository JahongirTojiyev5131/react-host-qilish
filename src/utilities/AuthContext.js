import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("banana"));
    if (user) {
      setCurrentUser(user);
    }
  },[]);

  const logout = () => {
    setCurrentUser(null);
  };
  const value = { currentUser, setCurrentUser, logout };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
