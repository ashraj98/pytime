import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import myLittlePonyHorse from '../../images/myLittlePonyHorse.jpg';
import skyrimHorse from '../../images/skyrimHorse.jpg';
import witcherHorse from '../../images/WitcherHorse.jpg';
import zeldaHorse from '../../images/ZeldaHorse.jpg';
import { Link } from "react-router-dom";
import './index.scss';

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

export default function Album() {
  const classes = useStyles();

  return (
    <>
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
                  image={skyrimHorse}
                  title="Skyrim"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Skyrim: Elder Scolls V
                  </Typography>
                  <Typography>
                    Skyrim: Elder Scolls V
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/game/the-elder-scrolls-v-skyrim">View</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image={witcherHorse}
                  title="The Witcher 3"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Witcher 3: Wild Hunt
                  </Typography>
                  <Typography>
                    The Witcher 3: Wild Hunt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/game/the-witcher-3-wild-hunt">View</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image={myLittlePonyHorse}
                  title="My Little Pony"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    My Little Pony
                  </Typography>
                  <Typography>
                    My Little Pony
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/game/my-little-pony-magic-princess">View</Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={4} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image={zeldaHorse}
                  title="Breath of the Wild"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Legend of Zelda: Breath of the Wild
                  </Typography>
                  <Typography>
                    The Legend of Zelda: Breath of the Wild
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/game/the-legend-of-zelda-breath-of-the-wild">View</Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
