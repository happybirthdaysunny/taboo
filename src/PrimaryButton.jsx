import { Button as ButtonMUI } from '@mui/material';
import { pxToRemConverter } from './utils/numericHelpers';

export const PrimaryButton = ({
  label,
  onClick,
  variant = 'outlined',
  color = 'primary',
  sx = {},
  buttonColor = "#0cc0df"
}) => {
  return (
    <ButtonMUI
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        padding: `${pxToRemConverter(18)} ${pxToRemConverter(32)}`,
        borderRadius: pxToRemConverter(24),
        fontSize: pxToRemConverter(18),
        fontWeight: 700,
        border: '1px solid #fff',
        borderColor: variant === "outlined" ? "#fff" : buttonColor,
        backgroundColor: variant === "outlined" ? "transparent" : buttonColor,
        width: 'fit-content',
        maxHeight: pxToRemConverter(32),
        minWidth: 0,
        color: variant === "outlined" ? "#fff" : '#5e17eb',
        fontFamily: "Archivo, sans-serif",
        ...sx, // allow optional overrides
      }}
    >
      {label}
    </ButtonMUI>
  );
};
