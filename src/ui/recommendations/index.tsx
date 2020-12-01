import {
  Card, CardHeader, CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss';
import { ShowService } from '../../services';
import { Recommendation } from '../../models';
import { RootState } from '../../store/types';
import { TMDBImageSize, TMDBUtils } from '../common';
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

interface ArtworkData {
  image: string
  size: TMDBImageSize
  useTitle: boolean
}

type ArtworkMap = { [index:string] : ArtworkData };

export default function Recommendations() {
  const [shows, setShows] = useState<Recommendation[]>([]);
  const [artworks, setArtworks] = useState<ArtworkMatch[]>([]);
  const [showImages, setShowImages] = useState<ArtworkMap>({});
  const [processing, setProcessing] = useState<boolean>(true);
  const classes = useStyles();

  const searchTerms = useSelector((state: RootState) => state.searchTerms);

  useEffect(() => {
    setProcessing(true);
    ShowService.getRecommendations(searchTerms).then((res) => setShows(res.data));
  }, [searchTerms]);

  useEffect(() => {
    if (shows.length > 0 && searchTerms.length > 0) {
      const gameSlugs = shows.map((g) => g.slug);
      ShowService.coverArt(gameSlugs, searchTerms).then((res) => setArtworks(res.data));
    }
  }, [shows, searchTerms]);

  useEffect(() => {
    const artworkMap:ArtworkMap = {};
    shows.forEach((show) => {
      const art = artworks.find((am) => am.game === show.slug);
      if (art) {
        artworkMap[show.slug] = { image: art.image, size: TMDBImageSize.original, useTitle: true };
      } else {
        artworkMap[show.slug] = {
          image: show.cover, size: TMDBImageSize.original, useTitle: false,
        };
      }
    });
    setShowImages(artworkMap);
    setProcessing(false);
  }, [shows, artworks]);

  if (processing) return <></>;

  return (
    <>
      <main className="main">
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Show Recommendations
            </Typography>
          </Container>
        </div>
        <div style={{ marginTop: 20, padding: 30 }}>
          <Grid container direction="row" spacing={5} justify="center">
            {shows.map((show) => (
              <Grid item xs={3} key={show.slug}>
                <Link to={`/game/${show.slug}`}>
                  <Card>
                    { showImages[show.slug]?.useTitle && <CardHeader title={show.slug} /> }
                    <CardMedia
                      component="img"
                      image={TMDBUtils.getTMDBImageSource(
                        showImages[show.slug]?.size, showImages[show.slug]?.image,
                      )}
                    />
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
