import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import { Auth } from 'aws-amplify';

//api here is an axios instance which has the baseURL set according to the env.
// import api from '../services/Api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
      async function loadUserFromCookies() {
        const user = await Auth.currentAuthenticatedUser()
          .then((data) => {
            console.log(data)
            setUser(data);
            return data
          }).catch(err => console.log(err));
      }
      loadUserFromCookies()
      setLoading(false)
    }, [])

    const login = async (username, password) => {
      await Auth.signIn( username, password )
                .then( user => setUser(user))
                .catch( err => {
                  console.log(err)
                  router.push('/')
                })
      router.push('/auctions-list')
      return user
    }

    const logout = async () => {
        try {
          await Auth.signOut();
          setUser(null)
          console.log("LOGGED OUT")
          router.push('/')
        } catch (error) {
          console.log('error signing out: ', error)
      }
    }

    return (
      <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, router }}>
        {children}
      </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading, router, user } = useAuth();
  // const authy = useAuth();
  // console.log(isAuthenticated)
  // console.log(router)
  // if (isLoading || (!isAuthenticated && router.pathname !== '/login')){
    if (user){
      console.log('super authed')
  } else { 
    console.log('nietauthed')
    return router.push('/')
  }
  return children;
};