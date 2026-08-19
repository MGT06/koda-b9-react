import { useReducer } from "react";
import AuthContext from "./authContext";

let initState = () => {
  const data = JSON.parse(localStorage.getItem("loginUser")) || {};
  return data;
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer((prev, action) => {
    if (action.type === "login") {
      return (() => {
        const newState = {
          ...prev,
          username: action.payload.username,
        };
        localStorage.setItem("loginUser", JSON.stringify(newState));
        return newState;
      })();
    }
    if (action.type === "logout") {
      return (() => {
        localStorage.removeItem("loginUser");
      })();
    }
    if (action.type === "update") {
      return (() => {
        const newState = {
          ...prev,
          username: action.payload.username,
          photo_profil: action.payload.urlPhoto,
        };
        localStorage.setItem("loginUser", JSON.stringify(newState));
        return newState;
      })();
    }
  }, initState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
