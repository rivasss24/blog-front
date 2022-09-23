import React from 'react'
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Home from '../pages/Home';
import Post from '../pages/Post';
import Article from '../pages/Article';

import Navbar from '../components/Navbar';

const BlogRoutes = () => {
  return (

    <>
    <Navbar /> 
    
    <Routes>
      <Route path="home" element={ <Home/> }/>
      <Route path="post" element={ <Post/> }/>
      <Route path="article/:id" element={ <Article/> }/>
      <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
    </>
    
  )
}

export default BlogRoutes