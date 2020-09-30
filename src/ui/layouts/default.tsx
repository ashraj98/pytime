import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { SearchBar } from '../common';
import { Link } from 'react-router-dom';

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
            <SearchBar onChange={(val) => console.log(val)} />
          </Container>
          <IconButton type="submit" className={styles.iconButton} aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
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
