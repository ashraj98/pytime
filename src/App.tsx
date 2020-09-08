import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Router>

    <div className="intro">
        <h1 className="logo">
            <img className="pie" src="https://www.pngarts.com/files/5/Apple-Pie-PNG-Image-Transparent-Background.png"/> Pytime
        </h1>

        <h2>Discover new video games in seconds</h2>


         <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search games or tags"
                inputProps={{ 'aria-label': 'Search games or tags' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
        </Paper>
    </div>

    </Router>
  );
}
