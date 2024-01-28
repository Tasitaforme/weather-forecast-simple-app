export const tempAccordingToUnit = (unit, celsiusTemperature) => {
  if (unit === 'celsius') {
    return `${Math.round(celsiusTemperature)}°`;
  } else {
    return `${Math.round((celsiusTemperature * 9) / 5 + 32)}°`;
  }
};
