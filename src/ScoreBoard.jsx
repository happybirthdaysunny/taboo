// ScoreBoard.tsx
// import React from 'react';
import { Box, Typography } from '@mui/material';

const ScoreBoard = ({ score, timer }) => {
  const timerColor = timer <= 10 ? 'error.main' : 'primary.main';

  return (
    <Box sx={{  display: 'flex', justifyContent: 'space-around', marginBottom: "16px" }}>
      <Box textAlign="center">
        <Typography variant="subtitle1">Score</Typography>
        <Typography variant="h4">{score}</Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle1">Time Left</Typography>
        <Typography variant="h4" sx={{ color: timerColor }}>
          {timer}s
        </Typography>
      </Box>
    </Box>
  );
};

export default ScoreBoard;
