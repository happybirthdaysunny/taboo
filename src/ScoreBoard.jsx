// ScoreBoard.tsx
// import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ScoreBoard = ({ score, timer }) => {
  const timerColor = timer <= 10 ? 'error.main' : 'primary.main';

  return (
    <Paper elevation={3} sx={{ p: 2, display: 'flex', justifyContent: 'space-around', mb: 3 }}>
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
    </Paper>
  );
};

export default ScoreBoard;
