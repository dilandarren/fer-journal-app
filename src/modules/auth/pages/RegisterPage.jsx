import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../../hooks'
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starCreatingUserWithEmailPassword } from '../../../store/auth/thunks';


const formData ={
    email: 'fernando@google.com',
    password: '123456',
    displayName: 'Dilan'
};

// const formData ={
//     email: '',
//     password: '',
//     displayName: ''
// };

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @' ],
    password: [ (value) => value.length >= 6, 'El password debe de tenet mas de 6 letras.' ],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const {status, errorMessage} = useSelector(state => state.auth)
    
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(starCreatingUserWithEmailPassword(formState) );
    }
    

    return (
        <AuthLayout title="Crear una cuenta">


            <form onSubmit={onSubmit}>
                <Grid2 container direction="column">
                    <Grid2 xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Dilan Gonzalez"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={!!displayNameValid && formSubmitted ? displayNameValid : ''}
                        />
                    </Grid2>

                    <Grid2 xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={!!emailValid && formSubmitted ? emailValid : ''}
                        />
                    </Grid2>

                    <Grid2 xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={!!passwordValid && formSubmitted ? passwordValid : ''}

                        />
                    </Grid2>

                    <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid2 
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error' >
                                {errorMessage}
                            </Alert>
                        </Grid2>


                        <Grid2 xs={12} sm={6}>
                            <Button 
                                disabled={isCheckingAuthentication}
                                variant="contained" 
                                fullWidth
                                type='submit'
                            >
                                Crear Cuenta
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end">
                        <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Acceder
                        </Link>
                    </Grid2>

                </Grid2>




            </form>
        </AuthLayout>
    )
}