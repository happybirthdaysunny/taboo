import { Button as ButtonMUI } from '@mui/material';
import { pxToRemConverter } from './utils/numericHelpers';

export const PrimaryButton = ({
  label,
  onClick,
  variant = 'outlined',
  color = 'primary',
  sx = {},
}) => {
  return (
    <ButtonMUI
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        padding: `${pxToRemConverter(18)} ${pxToRemConverter(32)}`,
        borderRadius: pxToRemConverter(16),
        fontSize: pxToRemConverter(18),
        fontWeight: 700,
        border: '1px solid #7300A8',
        backgroundColor: '#ffffff',
        width: 'fit-content',
        maxHeight: pxToRemConverter(32),
        minWidth: 0,
        color: "#000",
        ...sx, // allow optional overrides
      }}
    >
      {label}
    </ButtonMUI>
  );
};
