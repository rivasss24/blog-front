import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const { logged } = useContext( AuthContext );

  console.log( 'logged', logged );

  return ( logged )
      ? children
      : <Navigate to="/auth/login" />
}
  

export default PrivateRoute