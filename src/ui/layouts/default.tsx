import {
  AppBar, Button, Grid, Toolbar, Typography, Popper, Grow, Paper, ClickAwayListener, 
  MenuList, MenuItem,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import grey from '@material-ui/core/colors/grey';
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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const goHome = () => {
    history.push('/recommendations');
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleLogOut = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    sessionStorage.removeItem('username');
    setOpen(false);
  };

  const renderProfileButton = () => {
    if (sessionStorage.getItem('username')) {
      return (
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
            <Link to='/favorites'>
              <MenuItem onClick={handleClose} style={{ color: grey[800] }}>Favorites</MenuItem>
            </Link>
            <Link to='/recommendations'>
              <MenuItem onClick={handleLogOut} style={{ color: grey[800] }}>Sign out</MenuItem>
            </Link>
          </MenuList>
        </ClickAwayListener>
      );
    }
    return (
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
          <Link to='/login'>
            <MenuItem onClick={handleClose} style={{ color: grey[800] }}>Sign in</MenuItem>
          </Link>
          <Link to='/signup'>
            <MenuItem onClick={handleClose} style={{ color: grey[800] }}>Sign up</MenuItem>
          </Link>
        </MenuList>
      </ClickAwayListener>
    );
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <SearchBar />
            </Grid>
            <Grid item xs>
              <Grid container spacing={2} xs justify="flex-end">
                <Grid item xs>
                  <Button onClick={goHome}>
                    <HomeIcon style={{ color: grey[50] }} />
                  </Button>
                </Grid>
                <Grid item xs>
                  <div>
                    <Button
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      <PersonIcon style={{ color: grey[50] }} />
                      <ExpandMoreIcon style={{ color: grey[50] }} />
                    </Button>
                    <Popper 
                      open={open} 
                      anchorEl={anchorRef.current} 
                      role={undefined} 
                      transition 
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 
                            'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            {renderProfileButton()}
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Grid>
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
