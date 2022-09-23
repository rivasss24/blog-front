import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../auth/router/AuthRoutes'
import BlogRoutes from '../blog/router/BlogRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <>

    <Routes>
      
    <Route path="/*" element={
      <PrivateRoute>
        { /* tengo que mejorar las rutas privadas porque aveses no guardan secion */ }
        <BlogRoutes/>
      </PrivateRoute>
    }/>

    {/*          /*todas la rutas luego de este path*/}
    <Route path="auth/*" element={
      <PublicRoute>
       <AuthRoutes/>
      </PublicRoute>
    }/>
    
    </Routes>

    </>
  )
}

export default AppRouter