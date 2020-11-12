import {
  Card, CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss';
import { CoverService, GameService } from '../../services';
import { Recommendation } from '../../models';
import { RootState } from '../../store/types';
import { IGDBImageSize, IGDBUtils } from '../common';
import ArtworkMatch from '../../models/artworkMatch';

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

type ArtworkMap = { [index:string] : string };

export default function Recommendations() {
  const [games, setGames] = useState<Recommendation[]>([]);
  const [artworks, setArtworks] = useState<ArtworkMatch[]>([]);
  const [gameImages, setGameImages] = useState<ArtworkMap>({});
  const [processing, setProcessing] = useState<boolean>(true);
  const classes = useStyles();

  const searchTerms = useSelector((state: RootState) => state.searchTerms);

  useEffect(() => {
    setProcessing(true);
    GameService.getRecommendations(searchTerms).then((res) => setGames(res.data));
  }, [searchTerms]);

  useEffect(() => {
    if (games.length > 0 && searchTerms.length > 0) {
      const gameSlugs = games.map((g) => g.slug);
      CoverService.match(gameSlugs, searchTerms).then((res) => setArtworks(res.data));
    }
  }, [games, searchTerms]);

  useEffect(() => {
    const artworkMap:ArtworkMap = {};
    games.forEach((game) => {
      const art = artworks.find((am) => am.game === game.slug);
      if (art) {
        artworkMap[game.slug] = `https://cdn.pytime.tk/covers/${art.image}.jpg`;
      } else {
        // artworkMap[game.slug] = {
        //   image: game.cover.image_id, size: IGDBImageSize.CoverBig, useTitle: false,
        // };
        artworkMap[game.slug] = IGDBUtils.getIGDBImageSource(
          IGDBImageSize.CoverBig, game.cover.image_id,
        );
      }
    });
    setGameImages(artworkMap);
    setProcessing(false);
  }, [games, artworks]);

  if (processing) return <></>;

  return (
    <>
      <main className="main">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Game Recommendations
            </Typography>
          </Container>
        </div>
        <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container direction="row" spacing={5} justify="center">
            {games.map((game) => (
              <Grid item xs={3} key={game.name}>
                <Link to={`/game/${game.slug}`}>
                  <Card>
                    <CardMedia component="img" image={gameImages[game.slug]} />
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
