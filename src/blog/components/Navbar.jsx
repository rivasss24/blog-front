import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from '../../../helpers/axios';
import { AuthProvider } from '../../auth/context/AuthProvider';
import { AuthContext } from '../../auth/context/AuthContext';

const Navbar = () => {

  const { logout } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogOut = async() => {
      //Aqui tenemos que indicarle al contexto que estamos deslogeados
      await axios.get('/auth');
      logout();
      navigate( '/auth/login', {
        //Buscar para que era el "replace" 
        replace: true
      });
  }

  return (
    <header className={styles.header} >
        <ul className={ styles.ul } >

            <li className={ styles.liNavbar }>
            <NavLink
            className={ ({ isActive }) => isActive? styles.aActive : styles.aInactive }
            to="/home"
            >
            Home
            </NavLink>
            </li>

            <li className={ styles.liNavbar }>
            <NavLink 
            className={ ({ isActive }) => isActive? styles.aActive : styles.aInactive }
            to="/post"
            >
            Post
            </NavLink>
            </li>

        {/*</*<li class="{{profile}}"><a href="profile">Profile</a></li>*/}
        </ul>

        <button id={ styles.logOut }
        onClick={ onLogOut }
        >
            Log out
        </button>
    </header>
  )
}

export default Navbar