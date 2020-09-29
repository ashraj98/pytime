import { Box, Chip, Container, Grid, GridList, GridListTile, Typography, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { GameService } from '../../services';
import { Game } from '../../models';
import { IGDBImageSize, IGDBUtils, ImageUtils } from '../common';

function SingleGame() {
  const { slug } = useParams<any>();
  const [game, setGame] = useState<Game>();
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    GameService.detail(slug)
      .then((res) => setGame(res.data))
      .catch(() => setHasError(true));
  }, [slug]);
  if (!game) {
    return <></>;
  }
  if (hasError) {
    return <></>;
  }
  console.log(game);
  const userRating = Math.round(game.rating);
  const userAngleDelta = (100 / userRating - 1) * 180;
  const criticRatingCount = game.total_rating_count - game.rating_count;
  const criticRating = Math.round(
    (game.total_rating * game.total_rating_count - game.rating * game.rating_count)
    / criticRatingCount,
  );
  const criticAngleDelta = (100 / criticRating - 1) * 180;
  const headerStyle = {
    background: ImageUtils.imageWithOverlay(
      IGDBUtils.getIGDBImageSource(IGDBImageSize.FullHD, game.artworks[0].image_id), 0.6,
    ),
  };
  return (
    <>
      <Box style={headerStyle} className="featureHeader">
        <Container style={{ padding: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img
                src={IGDBUtils.getIGDBImageSource(IGDBImageSize.CoverBig, game.cover.image_id)}
                alt={game.cover.image_id}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" component="h2">{game.name}</Typography>
              <Box style={{ paddingTop: 20 }}>
                {game.themes?.map(
                  (theme: any) => <Chip label={theme.name} key={theme.id} style={{ margin: 5 }} />,
                )}
              </Box>
              <Typography variant="h4" component="h2" style={{ paddingTop: 20 }}>
                {`Released: ${new Date(game.release_dates[0].date).toLocaleDateString()}`}
              </Typography>
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
                <p>{game.summary}</p>
                <span>
                  <b>Genres: </b>
                  {game.genres.map(g => g.name).join(', ')}
                </span>
              </Box>
              <Box style={{ paddingTop: 15 }}>
                <Typography variant="h3">Ratings</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="pieContainer">
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
                        {`${game.rating_count} `}
                      </b>
                      User Ratings
                    </span>
                  </Grid>
                  <Grid item xs={6} className="pieContainer">
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          dataKey="value"
                          endAngle={360 - criticAngleDelta}
                          startAngle={criticAngleDelta}
                          data={[{ value: 100 }]}
                          innerRadius={90}
                          outerRadius={100}
                          fill="#8884d8"
                        >
                          <Label value={criticRating} position="center" fontSize={50} />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <span>
                      <b>
                        {`${criticRatingCount} `}
                      </b>
                      Critic Ratings
                    </span>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Trailer & Screenshots</Typography>
              { game.videos.length > 0 && (
                <ReactPlayer
                  url={IGDBUtils.getIGDBVideoURL(game.videos[0].video_id)}
                  playing
                  loop
                  muted
                  volume={0}
                  width="100%"
                />
              )}
              <GridList cellHeight={160} cols={2} style={{ paddingTop: 20 }}>
                {game.screenshots.map((s) => (
                  <GridListTile key={s.id} cols={1}>
                    <img
                      src={IGDBUtils.getIGDBImageSource(IGDBImageSize.FullHD, s.image_id)}
                      alt={s.image_id}
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
