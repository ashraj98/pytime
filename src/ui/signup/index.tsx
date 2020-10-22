import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { red } from '@material-ui/core/colors';
import axiosInstance from "../../axiosApi";

interface FormData {
    email: string;
    username: string;
    password: string;
    confirmpassword: string;
}

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
    },
    span: {
        color: red[600],
    },
  }));

function Signup() {
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm<FormData>();
    const classes = useStyles();

    const onSubmit = handleSubmit((data) => {
        if (data.confirmpassword !== data.password) {
            alert("Passwords don't match");
        } else {
            axiosInstance.post('/user/create/', {
                username: data.username,
                password: data.password,
                email: data.email
            }).then(
                result => {
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                    sessionStorage.setItem('access_token', result.data.access);
                    sessionStorage.setItem('refresh_token', result.data.refresh);
                    sessionStorage.setItem('username', data.username);
                    if (result.status == 201) {
                        history.push('/recommendations');
                    }
            }).catch (error => {
                throw error;
            })
        }
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
                                label="Email" 
                                name="email" 
                                size="small" 
                                variant="outlined"
                                inputRef={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })}
                                />
                                <span className={classes.span}>{errors.email && errors.email.message}</span>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                size="small"
                                type="username"
                                variant="outlined"
                                inputRef={register({
                                    required: "Required"
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
                            <Grid item xs={12}>
                                <TextField
                                fullWidth
                                label="ConfirmPassword"
                                name="confirmpassword"
                                size="small"
                                type="password"
                                variant="outlined"
                                inputRef={register({
                                    required: "Required"
                                })}
                                />
                                <span className={classes.span}>{errors.confirmpassword && errors.confirmpassword.message}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" fullWidth type="submit" variant="contained">
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Signup;