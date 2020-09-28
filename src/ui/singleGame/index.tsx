import { Box, Chip, Container, Grid, GridList, GridListTile, Typography, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.scss';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { GameService } from '../../services';
import { Game } from '../../models';
import { IGDBImageSize, IGDBUtils } from '../common';

function SingleGame() {
  const { slug } = useParams<any>();
  const [game, setGame] = useState<Game>();
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    GameService.detail(slug)
      .then((res) => setGame(res.data))
      .catch(() => setHasError(true));
  }, []);
  if (!game) {
    return <></>;
  }
  if (hasError) {
    return <></>;
  }
  return (
    <Box>
      <Container style={{ padding: 40 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">{game.name}</Typography>
            <Box>
              {game.themes.map(
                (theme: any) => <Chip label={theme.name} key={theme.id} style={{ margin: 5 }} />,
              )}
            </Box>
            <Box style={{ marginTop: 10 }}>
              <Typography variant="h4">About</Typography>
              <p>{game.summary}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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
  );
}

export default SingleGame;
