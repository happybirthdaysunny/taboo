import React from 'react';
import { Button } from '@mui/material';
import { pxToRemConverter } from '@helios-media-platform/advance-ui-kit/utils';

const PrimaryButton = ({
  label,
  onClick,
  variant = 'outlined',
  color = 'primary',
  sx = {},
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        padding: `${pxToRemConverter(8)} ${pxToRemConverter(12)}`,
        borderRadius: pxToRemConverter(8),
        fontSize: pxToRemConverter(16),
        fontWeight: 700,
        border: '1px solid #7300A8',
        backgroundColor: '#ffffff',
        width: 'fit-content',
        maxHeight: pxToRemConverter(32),
        minWidth: 0,
        ...sx, // allow optional overrides
      }}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
