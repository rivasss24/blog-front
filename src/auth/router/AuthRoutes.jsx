import React from 'react'
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";



import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


import styles from './AuthRoutes.module.css';

const AuthRoutes = () => {

    console.log('entro aqui');

  return (
    <div className={ styles.formContainer }>
    <Routes>
        <Route path="login" element={ <Login/> }/>
        <Route path="sign-up" element={ <SignUp/> }/>
        <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
    </Routes>
    </div>
  )
}

export default AuthRoutes