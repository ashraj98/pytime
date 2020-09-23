import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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
          <InputBase
            className={styles.input}
            placeholder="Search games or tags"
            inputProps={{ 'aria-label': 'Search games or tags' }}
            color="secondary"
          />
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
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            PyTime
          </Link>
          {' '}
          {new Date().getFullYear()}
          .
        </Typography>
      </footer>
    </>
  );
}

export default DefaultLayout;
