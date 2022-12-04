export const COLORS = {

  activeLink:"#3a7bfd",
  checkerBgcolor:"#c058f3",

  shadow:"#64646f33",


  lightMode:{
      // Light mode
    veryLightGray:"#fafafa",
    veryLightGrayishBlue:"#e4e5f1",
    lightGrayishBlue:"#d2d3db",
    darkGrayishBlue:"#9394a5",
    veryDarkGrayishBlue:"#484b6a",  
  },

  darkMode:{
      // Light mode
    veryDarkGray:"#161722",
    veryDarkDesaturatedBlue:"#25273c",
    lightGrayishBlue:"#cacde8",
    lightGrayishBlueHover:"#e4e5f1",
    darkGrayishBlue:"#777a92",
    veryDarkGrayishBlue:"#4d5066",
    veryDarkGrayishBlueAlt:"#393a4c",
  }
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "JosefinBold",
  regular: "JosefinRegular",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
