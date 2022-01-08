import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [token, setToken] = useState(10);
  const [isAuth, setIsauth] = useState(false);
  const [token, setToken] = useState("");

  const login = (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setToken(res.token);
      });
    setIsauth(!isAuth);
  };

  const toggleAuth = () => {
    setIsauth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ token, isAuth, toggleAuth, login }}>
      {children}
    </AuthContext.Provider>
  );
};
