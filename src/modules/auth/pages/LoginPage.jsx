import {Link as RouterLink} from 'react-router'
import { Google } from "@mui/icons-material"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../../hooks'


export const LoginPage = () => {



    const { email, password, onInputChange} = useForm({
        email: 'fernando@google.com',
        password: '12345'
    });

    const onSubmit = (event) => {
        event.preventDefault();

        console.log({email, password});
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
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

                    <Grid2 container spacing={2} sx={{mb: 2, mt: 1}}>

                        <Grid2 xs={12} sm={6}>
                            <Button type='submit' variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid2>

                        <Grid2 xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
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
