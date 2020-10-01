import {
  AppBar, Container, Toolbar, Typography,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { SearchBar } from '../common';

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
          <Container>
            <SearchBar />
          </Container>
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
