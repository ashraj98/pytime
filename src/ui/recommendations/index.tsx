import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import myLittlePonyHorse from '../../images/myLittlePonyHorse.jpg';
import skyrimHorse from '../../images/skyrimHorse.jpg';
import witcherHorse from '../../images/WitcherHorse.jpg';
import zeldaHorse from '../../images/ZeldaHorse.jpg';
import './index.scss';
import { RecommendationService } from 'services';
import { Recommendation } from 'models';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h3: {
        fontSize: 30,
      }
    }
  }
});

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
  const [games, setGames] = useState<Recommendation[]>([]);
  const classes = useStyles();

  useEffect(() => {
    RecommendationService.getRecommendations([]).then((res) => setGames(res.data));
  });

  return (
    <>
      <main className="main">
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
        {/* End hero unit */}
        <div style={{ marginTop: 20, padding: 30}}>
          <Grid container direction="row" spacing={5} justify="center">
            {games.map(game => (
              <Grid container item xs={4} key={game.name}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={game.cover_url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="h3">
                        {game.name}
                      </Typography>
                      <Typography component="p">
                        {game.summary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={`/game/${game.slug}`}>View</Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}
