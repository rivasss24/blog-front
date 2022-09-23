import React, { useState, useContext } from 'react'
import styles from './Login.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/ui/Input';
import InputPassword from '../../components/ui/InputPassword';
import Button from '../../components/ui/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
//import axios from 'axios';
import axios from '../../../helpers/axios';
import 'animate.css';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  });

  const formik = useFormik({
    validationSchema: SignupSchema ,
    initialValues: {
      email:'',
      password: ''
    },
    onSubmit: async ( values ) => {

      console.log('ejecutandose');

      const { email, password } = values;
      
      const formData = new FormData();
      
      formData.append( 'correo', email );
      formData.append( 'password', password );

      const myPromise = new Promise( ( resolve, reject ) => {
      
        axios.post('/auth', formData )
        .then( function (response) {
          console.log( response );
          navigate( '/home', {
            //Buscar para que era el "replace" 
            replace: true
          });
          login();
          resolve();
        })
        .catch( function (error) {
          console.log( error );
          reject();
        })

      })
      
      toast.promise( myPromise , {
        loading: 'Loading',
        success: 'logged in',
        error: 'Error when fetching, try again...',
      },
      {
        success: {
          duration: 1000,
          iconTheme: {
            primary: '#000000',
          },
        }
      });

    }
  });

  return (
    <>
      <Toaster />

      <div className={`${styles.formContainer} animate__animated animate__fadeIn` }>

      <form onSubmit= { formik.handleSubmit }>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <Input type="email" name="email" value={formik.values.email} handleChange={ formik.handleChange }/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Pasword:</label>
          <InputPassword
          handleChange={ formik.handleChange } name='password' value={ formik.values.password }
          />
        </div>

        <div className={ styles.buttonGroup }>
          <Button type='submit'>
            LOGIN
          </Button>
        </div>

        <div className={ styles.buttonGroup }>
          { /* creo que esto se hace con link y no navlink */ }
          <NavLink
          to='/auth/sign-up'
          >
            sign-up
          </NavLink>
        </div>

      </form>

      </div>
    </>
  )
}

export default Login