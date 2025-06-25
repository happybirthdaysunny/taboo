import { Box } from '@mui/material';
import { pxToRemConverter } from './utils/numericHelpers';

export const Marquee = () => {
  return (
    <Box
  sx={{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    backgroundColor: "#000",
    padding: pxToRemConverter(8),
    width: '100%',
    '& span': {
      display: 'inline-block',
      paddingLeft: '100%',
      animation: 'marquee 15s linear infinite',
    },
    '@keyframes marquee': {
      from: { transform: 'translateX(0%)' },
      to: { transform: 'translateX(-100%)' },
    },
  }}
>
  <span>🎉 Happy Birthday Sunny! 🎉</span>
</Box>
  );
};