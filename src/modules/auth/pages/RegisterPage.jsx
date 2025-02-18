import { Link as RouterLink } from 'react-router'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../../hooks'


const formData ={
    email: 'fernando@google.com',
    password: '12345',
    displayName: 'Dilan González'
};

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @' ],
    password: [ (value) => value.length >= 6, 'El password debe de tenet mas de 6 letras.' ],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

    const { 
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    console.log(displayNameValid);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
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

                        />
                    </Grid2>

                    <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid2 xs={12} sm={6}>
                            <Button 
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