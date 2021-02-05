import React, { useEffect, createContext, useContext } from "react";
import './App.css';
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import M from "materialize-css";
//import { UserContext } from "../../App";

export const Login = () => {
  //const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) {
      M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          //dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "Login successfull",
            classes: "#43a047 green darken-1",
          });
         
          history.push("/");
          window.location.reload(true)
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h5>Login</h5>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn waves-effect waves-light"
          onClick={() => postData()}
        >
          Login
        </button>
        <h6>
          <Link to="/signup">Don't have account?</Link>
        </h6>
      </div>
    </div>
  );
};
export default Login;