 import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import skyrimCover from '../GamePhotos/skyrimCover.png';
import skyrimHorse from '../GamePhotos/skyrimHorse.jpg';
import myLittlePonyCover from '../GamePhotos/MyLittlePonyCover.jpg';
import myLittlePonyHorse from '../GamePhotos/myLittlePonyHorse.jpg';
import witcherCover from '../GamePhotos/witcherCover.jpg';
import witcherHorse from '../GamePhotos/witcherHorse.jpg';
import zeldaCover from '../GamePhotos/ZeldaCover.jpg';
import zeldaHorse from '../GamePhotos/zeldaHorse.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PyTime
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4];


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Game Recommendations
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             You wanted games with horses? Here are some games with horses.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
              <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image= {skyrimCover}
                    title="Skyrim"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Skyrim: Elder Scolls V
                    </Typography>
                    <Typography>
                      Action Packed!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
               <Grid item key={2} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image= {witcherCover}
                    title="The Witcher 3"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      The Witcher 3: Wild Hunt
                    </Typography>
                    <Typography>
                      YESSSSSSSS
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
               <Grid item key={3} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image= {myLittlePonyCover}
                    title="My Little Pony"
                    />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      My Little Pony
                    </Typography>
                    <Typography>
                      NEYYYYYY
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
               <Grid item key={4} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image= {zeldaCover}
                    title="Breath of the Wild"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      The Legend of Zelda: Breath of the Wild
                    </Typography>
                    <Typography>
                      RIDEEEEEEE
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Please give us an A :)
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}