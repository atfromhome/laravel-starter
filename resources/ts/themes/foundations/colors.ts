const colors = {
  black: { value: "#0e1012" },
  stale: {
    50: { value: "#f1f5f9" },
    100: { value: "#e2e8f0" },
    200: { value: "#cbd5e1" },
    300: { value: "#94a3b8" },
    400: { value: "#64748b" },
    500: { value: "#1e293b" },
    600: { value: "#0d1219" },
    700: { value: "#040608" },
    800: { value: "#000000" },
    900: { value: "#000000" }
  },
  gray: {
    50: { value: "#f9fafa" },
    100: { value: "#f1f1f2" },
    200: { value: "#e7e7e8" },
    300: { value: "#d3d4d5" },
    400: { value: "#abadaf" },
    500: { value: "#7d7f83" },
    600: { value: "#52555a" },
    700: { value: "#33373d" },
    800: { value: "#1d2025" },
    900: { value: "#171a1d" }
  },
  purple: {
    50: { value: "#f9f6fd" },
    100: { value: "#e5daf8" },
    200: { value: "#d3bef4" },
    300: { value: "#b795ec" },
    400: { value: "#a379e7" },
    500: { value: "#8952e0" },
    600: { value: "#7434db" },
    700: { value: "#6023c0" },
    800: { value: "#4f1d9e" },
    900: { value: "#3b1676" }
  },
  pink: {
    50: { value: "#fdf5f9" },
    100: { value: "#f8d9e7" },
    200: { value: "#f3b9d3" },
    300: { value: "#eb8db8" },
    400: { value: "#e56ba2" },
    500: { value: "#dc3882" },
    600: { value: "#c4246c" },
    700: { value: "#a01d58" },
    800: { value: "#7d1745" },
    900: { value: "#5d1133" }
  },
  red: {
    50: { value: "#fdf6f5" },
    100: { value: "#f8d9d8" },
    200: { value: "#f1b8b4" },
    300: { value: "#e98d87" },
    400: { value: "#e4726c" },
    500: { value: "#dc4a41" },
    600: { value: "#d2140a" },
    700: { value: "#ac0900" },
    800: { value: "#930800" },
    900: { value: "#6d0600" }
  },
  orange: {
    50: { value: "#fdfaf6" },
    100: { value: "#f9ebdb" },
    200: { value: "#f1d4b1" },
    300: { value: "#e6b273" },
    400: { value: "#dc9239" },
    500: { value: "#c37b24" },
    600: { value: "#a5681e" },
    700: { value: "#835318" },
    800: { value: "#674113" },
    900: { value: "#553610" }
  },
  yellow: {
    50: { value: "#fffefb" },
    100: { value: "#fff8e9" },
    200: { value: "#feecbd" },
    300: { value: "#fddc87" },
    400: { value: "#fbc434" },
    500: { value: "#d2a01e" },
    600: { value: "#a88018" },
    700: { value: "#836413" },
    800: { value: "#624b0e" },
    900: { value: "#513e0c" }
  },
  green: {
    50: { value: "#f7fdfb" },
    100: { value: "#d2f2e7" },
    200: { value: "#9fe3cd" },
    300: { value: "#64d2ad" },
    400: { value: "#1dbd88" },
    500: { value: "#0ea371" },
    600: { value: "#0c875e" },
    700: { value: "#096949" },
    800: { value: "#07563c" },
    900: { value: "#064731" }
  },
  teal: {
    50: { value: "#f1fcfc" },
    100: { value: "#c0f1f4" },
    200: { value: "#84e4e9" },
    300: { value: "#2dd1da" },
    400: { value: "#22b2ba" },
    500: { value: "#1d979e" },
    600: { value: "#187b80" },
    700: { value: "#125f64" },
    800: { value: "#0f5053" },
    900: { value: "#0d4244" }
  },
  cyan: {
    50: { value: "#f4fbfd" },
    100: { value: "#d0eef7" },
    200: { value: "#bae7f3" },
    300: { value: "#a2deee" },
    400: { value: "#53c2e1" },
    500: { value: "#2ab4d9" },
    600: { value: "#24a2c4" },
    700: { value: "#1e86a2" },
    800: { value: "#196e85" },
    900: { value: "#135567" }
  },
  blue: {
    50: { value: "#f1f6fd" },
    100: { value: "#cde0f6" },
    200: { value: "#a8c8f0" },
    300: { value: "#7fafe8" },
    400: { value: "#5896e1" },
    500: { value: "#347fdb" },
    600: { value: "#236abf" },
    700: { value: "#1b5192" },
    800: { value: "#164278" },
    900: { value: "#123662" }
  },
  indigo: {
    50: { value: "#f8f7fc" },
    100: { value: "#e1ddf5" },
    200: { value: "#c8c0ec" },
    300: { value: "#a89de2" },
    400: { value: "#9789dc" },
    500: { value: "#7f6ed4" },
    600: { value: "#6a58c9" },
    700: { value: "#5546a1" },
    800: { value: "#483c88" },
    900: { value: "#342b62" }
  }
};

export default {
  primary: colors.stale,
  ...colors
};
