import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { red } from '@material-ui/core/colors';
import axiosInstance from "../../axiosApi";

interface FormData {
    username: string;
    password: string;
}

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
    span: {
        color: red[600],
    },
  }));

function Login() {
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm<FormData>();
    const classes = useStyles();
    const onSubmit = handleSubmit((res) => {
        axiosInstance.post('/token/obtain/', {
                username: res.username,
                password: res.password
            }).then(
                result => {
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                    localStorage.setItem('access_token', result.data.access);
                    localStorage.setItem('refresh_token', result.data.refresh);
                }
        ).catch (error => {
            throw error;
        })
    });

    return (
        <Container className={classes.container} maxWidth="xs">
            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                fullWidth 
                                label="Username" 
                                name="username" 
                                size="small" 
                                variant="outlined"
                                inputRef={register({
                                    required: "Required",
                                })}
                                /> 
                                <span className={classes.span}>{errors.username && errors.username.message}</span>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                size="small"
                                type="password"
                                variant="outlined"
                                inputRef={register({
                                    required: "Required"
                                })}
                                />
                                <span className={classes.span}>{errors.password && errors.password.message}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" fullWidth type="submit" variant="contained">
                            Log In
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={`/signup`}>
                            <Button color="primary" fullWidth variant="contained">
                                    Sign Up
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Login;