import {
  AppBar, Grid, Toolbar, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { SearchBar } from '../common';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import grey from '@material-ui/core/colors/grey';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function DefaultLayout(props: Props) {
  const styles = useStyles();
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <SearchBar />
            </Grid>
            <Grid item xs >
              <Grid container xs justify="flex-end">
                <Link to={`/login`}>
                  <PersonIcon style={{ color: grey[50] }}/>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
      <footer className={styles.footer}>
        <Typography variant="h6" align="center" gutterBottom />
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Please give us an A :)
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © PyTime '}
          {new Date().getFullYear()}
          .
        </Typography>
      </footer>
    </>
  );
}

export default DefaultLayout;
