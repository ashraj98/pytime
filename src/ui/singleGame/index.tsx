import { Box, Chip, Container, Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import { SportsEsports } from '@material-ui/icons';
import React from 'react';
import './index.scss'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import games from '../../data/games.json';
import { Rating } from '@material-ui/lab';

function SingleGame() {
  const { slug } = useParams<any>();
  const game: any = games.find(g => g.slug === slug);
  const containerStyle = {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.75), 
      rgba(0, 0, 0, 1)
    ),
    url(${game.background_image})`,
    backgroundSize: 'cover',
  }
  return (
    <Box style={containerStyle}>
      <Container style={{ padding: 40 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2">{game.name}</Typography>
            <Rating
              defaultValue={game.rating}
              max={game.rating_top}
              size="large"
              icon={<SportsEsports fontSize="inherit" />}
              precision={0.1}
              readOnly
            />
            <Box>
              {game.tags.filter((tag: any) => tag.language === 'eng').map(
                (tag: any) => <Chip label={tag.name} key={tag.key} style={{ margin: 5 }} />
              )}
            </Box>
            <Box style={{ marginTop: 10 }}>
              <Typography variant="h4" component="h2">About</Typography>
              <p style={{ color: 'white' }}>{game.about}</p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            { game.clip && (
              <ReactPlayer
                url={game.clip.clips['640']}
                playing loop muted
                volume={0}
                width="100%"
              />
            )}
            <GridList cellHeight={160} cols={2}>
              {game.short_screenshots.map((s: any) => (
                <GridListTile key={s.id} cols={1}>
                  <img src={s.image} alt={s.image} />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SingleGame;
