
export const pxToRemConverter = (pixels, fontSize = 16) => {
  return `${pixels / fontSize}rem`;
};

// alternative locale would be fr-CA
export const formatDecimal = (number, locale = "en-CA") =>
  Intl.NumberFormat(locale, { style: "decimal" }).format(number);

export const formatBase = (number, locale = "en-CA") => {
  const roundedNumber = Math.floor(number);
  return Intl.NumberFormat(locale, {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(roundedNumber);
};

export const formatPercentage = (number, locale = "en-CA") =>
  Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

