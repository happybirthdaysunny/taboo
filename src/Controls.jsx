import { Box } from '@mui/material';
import { PrimaryButton } from "./PrimaryButton";

const Controls = ({ onNext, onShuffle }) => {
  return (
    <Box display="flex" justifyContent="space-between" >
      <PrimaryButton
        variant="outlined"
        color="secondary"
        onClick={onShuffle}
        label="Reset"
      />
      <PrimaryButton
        variant="contained"
        color="primary"
        onClick={onNext}
        label="Next"
      />
    </Box>
  );
};

export default Controls;
