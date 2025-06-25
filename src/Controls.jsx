// Controls.tsx
// import React from 'react';
import { Box, Button } from '@mui/material';

const Controls = ({ onNext, onShuffle }) => {
  return (
    <Box display="flex" justifyContent="space-between" >
      <Button
        variant="outlined"
        color="secondary"
        onClick={onShuffle}
      >
        Shuffle
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
      >
        Next
      </Button>
    </Box>
  );
};

export default Controls;
