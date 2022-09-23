import { useState } from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import AppRouter from './router/AppRouter'

function MyBlogApp() {
  

  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
  
}

export default MyBlogApp
