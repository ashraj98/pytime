import {
  Card, CardActionArea, CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Favorite } from '../../models';
import { FavoriteService } from '../../services';
import { TMDBImageSize, TMDBUtils } from '../common';

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
  const [shows, setShows] = useState<Favorite[]>([]);
  const classes = useStyles();

  const username = sessionStorage.getItem('username') || '';

  useEffect(() => {
    FavoriteService.getFavorites(username).then((res) => setShows(res.data));
  }, [username]);

  return (
    <>
      <main className="main">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Favorites
            </Typography>
          </Container>
        </div>
        <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container direction="row" spacing={5} justify="center">
            {shows.map((show) => (
              <Grid item xs={3} key={show.name}>
                <Link to={`/game/${show.slug}`}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={TMDBUtils.getTMDBImageSource(
                          TMDBImageSize.original, show.cover,
                        )}
                      />
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}
