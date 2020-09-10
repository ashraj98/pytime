import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import './index.scss'
import { useParams } from 'react-router';
import games from '../../data/games.json';

function SingleGame() {
  const { slug } = useParams<any>();
  const game: any = games.find(g => g.slug === slug);
  const containerStyle = {
    height: 900,
    background: `linear-gradient(
      rgba(0, 0, 0, 0.75), 
      rgba(0, 0, 0, 1)
    ),
    url(${game.background_image})`,
    backgroundSize: 'cover',
  }
  return (
    <Box style={containerStyle}>
      <Container>
        <Typography variant="h2">{game.name}</Typography>
      </Container>
    </Box>
  )
}

export default SingleGame;
