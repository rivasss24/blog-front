import axios from '../../../helpers/axios';
import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const types = {
  login:  '[Auth] Login',
  logout: '[Auth] Logout',
}

const init = async ( ) => {

    //const { data } = await axios.get('/auth/verificar');
    //const { logged } = data;

    const isLogged = JSON.parse( localStorage.getItem('logged') );

    return {
      logged: !!isLogged
    }
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, { logged: false }, init );

  const login = ( ) => {
    const action = { type: types.login  }
    localStorage.setItem('logged', JSON.stringify( true ) );
    dispatch(action);
  }

  const logout = () => {
    const action = { type: types.logout };
    localStorage.setItem('logged', JSON.stringify( false ) );
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
        { children }
    </AuthContext.Provider>
  );
}
