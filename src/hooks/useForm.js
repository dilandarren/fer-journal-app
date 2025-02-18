import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  
    const [formState, setformState] = useState(initialForm);
    const [formValidation, setformValidations] = useState({})

    useEffect(() => {
        createValidators();
    }, [formState])
    
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setformState( initialForm);
    }
    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido' ] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField] ) ? null : errorMessage;

        }

        setformValidations( formCheckedValues );

    }

    
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
    }
}
