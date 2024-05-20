import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("createroo-auth")
    setUser()
    navigate("/login")
  }


  useEffect(() => {
    async function signIn() {
      setLoading(true)
    }
    signIn()
  }, [])

  

  
  
  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user, setUser,
        logout, loading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};