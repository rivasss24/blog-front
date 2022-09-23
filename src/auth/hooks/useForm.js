import React, { useState } from 'react'


const useForm = ( initialStates = {} ) => {
    
    const [values, setValues] = useState(initialStates);

    const handleInputChange = ( e ) =>{

        
        const { target } = e;
        const { value } = e.target;
        setValues({
            ...values,
            [ target.name ]: {
                hasError: false,
                value
            }
        });

        console.log( values );
    }

    const handleSubmit = ( e, funcion ) =>{
        e.preventDefault();
        funcion(values);
        console.log(values);
    }

    const onResetForm = ( e ) =>{
        e.preventDefault();
        setValues(initialStates);
    }

    const setError = ( e , hasError ) =>{

        setValues({
            ...values,
            [ e.target.name ] : {
                hasError,
                value: e.target.value
            }
        });

    }

    return{
        values,
        ...values,
        handleSubmit,
        handleInputChange,
        setError,
        onResetForm
    }
}

export default useForm