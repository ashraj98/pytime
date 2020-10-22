import {
  Box, Chip, Container, Grid, GridList, GridListTile, Typography, IconButton
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import {
  Label, Pie, PieChart, ResponsiveContainer,
} from 'recharts';
import { GameService } from '../../services';
import { Game } from '../../models';
import { IGDBImageSize, IGDBUtils, ImageUtils } from '../common';
import { grey } from '@material-ui/core/colors';
import StarIcon from '@material-ui/icons/Star';

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
  const userRating = Math.round(game.rating || 100);
  const userAngleDelta = (100 / userRating - 1) * 180;
  const heroBg = game.artworks ? ImageUtils.imageWithOverlay(
    IGDBUtils.getIGDBImageSource(IGDBImageSize.FullHD, game.artworks[0].image_id), 0.6,
  ) : 'black';
  const headerStyle = { background: heroBg };

    const onClick = (() => {
      
    })

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
                {`Released: ${new Date(game.release_dates[0].date * 1000).toLocaleDateString()}`}
              </Typography>
              <IconButton id="favorite" onClick={onClick}>
                <StarIcon style={{ color: grey[50] }}/>
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
                <p>{game.summary}</p>
                <span>
                  <b>Genres: </b>
                  {game.genres.map((g) => g.name).join(', ')}
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
                      {`${game.rating_count} `}
                    </b>
                    User Ratings
                  </span>
                </Box>
              </Box>
              <Box style={{ paddingTop: 50 }}>
                <Typography variant="h3">Keywords</Typography>
                {game.keywords?.map(
                  (k: any) => <Chip label={k.name} key={k.id} style={{ margin: 5 }} />,
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Trailer</Typography>
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
              <Typography variant="h3" style={{ paddingTop: 20 }}>Screenshots</Typography>
              <GridList cellHeight={160} cols={2}>
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
