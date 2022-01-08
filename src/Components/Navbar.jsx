import { useContext, useState } from "react";

import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const { isAuth, login, token } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "email",
    password: "password"
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Checking Login");
    login(data);
  };

  return (
    <div>
      Navbar
      {isAuth ? (
        <div>
          Login Status:Succesful
          <div>Token is :- {token}</div>
        </div>
      ) : (
        <form title="LOGIN">
          <input
            placeholder="Enter Email"
            onChange={handleChange}
            name="email"
          />
          <input
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
        </form>
      )}
      <button onClick={handleSubmit}>{!isAuth ? "login" : "logout"}</button>
      {/* <div>{!token ?(<h1>Not Succesful</h1>):(<div></div>)}</div> */}
    </div>
  );
};
