import React, { useState } from 'react'
import styles from './SignUp.module.css'
import ErrorMessage from '../components/ErrorMessage';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import InputPassword from '../../components/ui/InputPassword';
import DragAndDrop from '../../components/DragAndDrop';
//import useForm from '../hooks/useForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Button from '../../components/ui/Button';


const SignUp = () => {
  /*
  const nameRegexp = new RegExp(/^[a-zA-Z ]{8,16}$/);
  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  const passwordRegexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/);
  */

  //const notify = () => toast.loading('Waiting...');

  const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    password: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  });

  const formik = useFormik({
    validationSchema: SignupSchema ,
    initialValues: {
      file: null ,
      nombre: '',
      email: '',
      password: ''
    },
    onSubmit: values => {

      console.log( 'ejecutandose' )

      const { nombre, email, password, file } = values;
      
      const formData = new FormData();
  
      formData.append( 'nombre', nombre );
      formData.append( 'correo', email );
      formData.append( 'password', password );
      formData.append( 'role', 'ADMIN_ROLE' );
      formData.append( 'file', file );

      const myPromise = new Promise( ( resolve, reject ) => {
        axios.post('http://localhost:8081/usuarios', formData )
        .then( function (response) {
          console.log( response );
          formik.resetForm();
          setAvatar('/public/default-avatar.jpg');
          resolve();
        })
        .catch( function (error) {
          console.log( error );
          reject();
        })
      })
      
      toast.promise( myPromise , {
        loading: 'Loading',
        success: 'Succes!',
        error: 'Error when fetching, try again...',
      });

    },
  });


  //console.log( formik );

  const [avatar, setAvatar] = useState( '/public/default-avatar.jpg' );

  const handleImage =  ( e ) => {
    formik.setValues( {
      ...formik.values,
      file: e.currentTarget.files[0]
    });
    setAvatar( URL.createObjectURL( e.currentTarget.files[0] ) );
  }

  return (
    <div className={`${styles.formContainer} animate__animated animate__fadeIn`}>

      <Toaster />

      <form onSubmit= { formik.handleSubmit }>

        <div className={`${styles.formGroup} ${styles.avatar}`}>
            <div className={styles.imgContainer}>
                <img src={ avatar } className={'animate__animated animate__fadeIn'}/>
            </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="nombre">Name:</label>
          <Input type="text" name="nombre" value={formik.values.nombre} handleChange={ formik.handleChange }/>
        </div>

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

        <div className={`${styles.formGroup} ${/*styles.dragAndDrop*/''}`}>
          {/*<DragAndDrop/>*/}
          <input type="file" 
          name='file'
          onChange={ handleImage }
          />
        </div>

        <div className={ styles.buttonGroup }>
          <Button type='submit'>
            SIGN-UP
          </Button>
        </div>

        <div className={ styles.buttonGroup }>
          <NavLink
          to='/auth/login'
          >
            login
          </NavLink>
        </div>

      </form>
    </div>
  )
}

export default SignUp