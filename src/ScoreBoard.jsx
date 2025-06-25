// ScoreBoard.tsx
// import React from 'react';
import { Box, Typography } from '@mui/material';

const ScoreBoard = ({ score, timer, index }) => {
  // const timerColor = timer <= 10 ? 'error.main' : 'primary.main';
  const timerColor = timer <= 10 ? '#ff5757' : '#0cc0df';
    // #ff5757 #0cc0df

  return (
    <Box sx={{  display: 'flex', justifyContent: 'space-around' }}>
            <Box textAlign="center">
         <Typography variant="subtitle1" sx={{ fontFamily: "Poppins, sans-serif"}}>Card</Typography>
        <Typography variant="h4" sx={{ fontFamily: "Archivo, sans-serif"}}>{index}/32</Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle1" sx={{ fontFamily: "Poppins, sans-serif"}}>Score</Typography>
        <Typography variant="h4" sx={{ fontFamily: "Archivo, sans-serif"}}>{score}</Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="subtitle1" sx={{ fontFamily: "Poppins, sans-serif"}}>Time Left</Typography>
        <Typography variant="h4" sx={{ fontFamily: "Archivo, sans-serif",color: timerColor }}>
          {timer}s
        </Typography>
      </Box>
    </Box>
  );
};

export default ScoreBoard;
