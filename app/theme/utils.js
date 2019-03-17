import Colors from 'theme/Colors';

export const backgroundGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0, 0.5],
  colors: [Colors.white, Colors.primary1Color],
});

export const headerGradientProps = () => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0, 1],
  colors: [Colors.headerBackground, Colors.headerBackgroundDark],
});
