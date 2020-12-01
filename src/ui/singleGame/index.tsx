import {
  Box, Chip, Container, Grid, GridList, GridListTile, Typography, IconButton, Avatar
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import {
  Label, Pie, PieChart, ResponsiveContainer,
} from 'recharts';
import { grey, yellow } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';
import { ShowService, FavoriteService } from '../../services';
import { Show } from '../../models';
import { TMDBImageSize, TMDBUtils, ImageUtils } from '../common';

function SingleGame() {
  const { slug } = useParams<any>();
  const [show, setShow] = useState<Show>();
  const [hasError, setHasError] = useState(false);
  const [favorite, setFavorite] = useState(false);
  let btn = null;

  useEffect(() => {
    ShowService.detail(slug)
      .then((res) => setShow(res.data))
      .catch(() => setHasError(true));

    if (sessionStorage.getItem('username')) {
      FavoriteService.isFavorite(slug, sessionStorage.getItem('username') || '')
        .then((res) => setFavorite(res.data.is_favorite))
        .catch(() => setHasError(true));
    }
  }, [slug]);
  if (!show) {
    return <></>;
  }
  if (hasError) {
    return <></>;
  }
  const userRating = Math.round(show.vote_average || 10);
  const userAngleDelta = (10 / userRating - 1) * 180;
  const heroBg = show.backdrop_path ? ImageUtils.imageWithOverlay(
    TMDBUtils.getTMDBImageSource(TMDBImageSize.Backdrop3, show.backdrop_path), 0.6,
  ) : 'black';
  const headerStyle = { background: heroBg };

  const onClick = (() => {
    if (sessionStorage.getItem('username')) {
      btn = document.getElementById("favorite")
      if (btn !== null) {
        if (!favorite) {
          FavoriteService.addFavorite(slug, sessionStorage.getItem('username') || '');
          btn.style.color = yellow[500];
          setFavorite(true);
        } else {
          FavoriteService.removeFavorite(slug, sessionStorage.getItem('username') || '');
          btn.style.color = grey[50];
          setFavorite(false);
        }
      }
    } else {
      alert('Create an account and login to add favorites.');
    }
  });

  const renderFavoriteButton = () => {
    if (favorite) {
      return <StarIcon id="favorite" style={{ color: yellow[500] }} />;
    }
    return <StarIcon id="favorite" style={{ color: grey[50] }} />;
  };

  return (
    <>
      <Box style={headerStyle} className="featureHeader">
        <Container style={{ padding: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src={TMDBUtils.getTMDBImageSource(TMDBImageSize.poster4, show.poster_path)}
                alt={show.poster_path}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" component="h2">{show.name}</Typography>
              <Box style={{ paddingTop: 20 }}>
                {show.production_companies?.map(
                  (company: any) => 
                  <Chip 
                    avatar = {<Avatar src = {TMDBUtils.getTMDBImageSource(TMDBImageSize.logo1, company.logo_path)} />}
                    label={company.name} 
                    key={company.id} 
                    style={{ margin: 5 }} 
                  />,
                )}
              </Box>
              <Typography variant="h4" component="h2" style={{ paddingTop: 20 }}>
                {`Released: ${new Date(show.first_air_date).toLocaleDateString()}`}
              </Typography>
              <IconButton onClick={onClick}>
                {renderFavoriteButton()}
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container style={{ padding: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h3">About</Typography>
                <p>{show.overview}</p>
                <span>
                  <b>Genres: </b>
                  {show.genres?.map((g) => g.name).join(', ')}
                </span>
              </Box>
              <Box style={{ paddingTop: 15 }}>
                <Typography variant="h3">Ratings</Typography>
                <Box className="pieContainer">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        dataKey="value"
                        endAngle={360 - userAngleDelta}
                        startAngle={userAngleDelta}
                        data={[{ value: 100 }]}
                        innerRadius={90}
                        outerRadius={100}
                        fill="#8884d8"
                      >
                        <Label value={userRating} position="center" fontSize={50} />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <span>
                    <b>
                      {`${show.vote_count} `}
                    </b>
                    User Ratings
                  </span>
                </Box>
              </Box>
              <Box style={{ paddingTop: 50 }}>
                <Typography variant="h3">Languages</Typography>
                {show.spoken_languages?.map(
                  (l: any) => <Chip label={l.english_name} key={l.iso_639_1} style={{ margin: 5 }} />,
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" style={{ paddingTop: 20 }}>Seasons</Typography>
              <GridList cellHeight={380} cols={2}>
                {show.seasons.map((s) => (
                  <GridListTile key={s.id} cols={1}>
                    <img
                      src={TMDBUtils.getTMDBImageSource(TMDBImageSize.original, s.poster_path)}
                      alt={s.poster_path}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SingleGame;
