import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const PublicRoute = ({children}) => {

  const { logged } = useContext( AuthContext );

  console.log( 'logged', logged );

  //return children
  
  return ( !logged )
      ? children
      : <Navigate to="/home" />
}

export default PublicRoute