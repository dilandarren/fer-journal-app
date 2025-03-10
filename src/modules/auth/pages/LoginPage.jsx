import {Link as RouterLink} from 'react-router'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { chekingAuthentication, startGoogleSignIn, startLoginUserWithEmailPassword } from '../../../store/auth'
import { useMemo } from 'react'


const formData = {
    email: 'nando@google.com',
    password: '123456'
}


export const LoginPage = () => {

    const {status, errorMessage} = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const { email, password, onInputChange} = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();

        // console.log({email, password});
        
        // dispatch(chekingAuthentication(email, password))

        dispatch(startLoginUserWithEmailPassword({email, password}))
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn())
    }


    return (
        <AuthLayout title="Login">

            <form 
                onSubmit={onSubmit} 
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid2 container direction="column">

                    <Grid2 xs={12} sx={{ mt:2 }}>
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

                    <Grid2 xs={12} sx={{ mt:2 }}>
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







                    <Grid2 
                        container
                        display={!!errorMessage ? '' : 'none'}
                        
                    >
                        <Grid2 
                            xs={12}
                            sx={{mt:1}}
                        >
                            <Alert severity='error' >
                                {errorMessage}
                            </Alert>
                        </Grid2>
                    </Grid2>









                    <Grid2 
                        container 
                        
                        spacing={2} 
                        sx={{mb: 2, mt: 1}}
                    >

                        

                        <Grid2 xs={12} sm={6}>
                            <Button 
                                type='submit' 
                                variant="contained" 
                                fullWidth
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid2>

                        <Grid2 xs={12} sm={6}>
                            <Button 
                                disabled={isAuthenticating}
                                variant="contained" 
                                fullWidth
                                onClick={onGoogleSignIn}
                            >
                                <Google />
                                <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid2>


                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end">
                        
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear cuenta
                        </Link>
                    </Grid2>

                </Grid2>

                
                    
                
            </form>
        </AuthLayout>
    )
}
