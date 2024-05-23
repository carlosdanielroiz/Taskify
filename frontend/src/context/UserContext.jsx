import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState()
  const [loadingLogin, setLoadingLogin] = useState(false)


  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("taskify-auth")
    setUser()
    navigate("/login")
  }


  useEffect(() => {
    async function signIn() {
      if(localStorage.getItem("taskify-auth")) {
        const auth = JSON.parse(localStorage.getItem("taskify-auth"))

        if(auth && auth?.access_token && auth?.email) {
          setLoadingLogin(true)
          const [code, response] = await login({ email: auth?.email, token: auth?.access_token})


          if(code === 200) {
            setUser(response)
            const auth = {
              first_name: response.first_name,
              last_name: response.last_name,
              picture: response.picture,
              tel: response.tel,
              email: response.email,
              token : response.token,
              access_token : response.tokenAccess,
            }
    
            localStorage.setItem("taskify-auth", JSON.stringify(auth))
            setLoadingLogin(false)
            navigate("/")
            return
          }
          localStorage.removeItem("taskify-auth")
          setLoadingLogin(false)
          navigate("/login")
          return
        }

      } else {
        localStorage.removeItem("taskify-auth")
        setLoadingLogin(false)
        navigate("/login")
      }
    }
    signIn()
  }, [])

  

  
  
  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user, setUser,
        logout, loadingLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};