// import { DefaultTheme } from "styled-components";
import { colors } from "./colors";

const globalTheme = {
  elevation: {
    0: `none`, // Use for: Flat Object (to reset or override elevation/box shadow need be)
    1: `0px 1px 2px 1px ${colors.lightShadow}, 0px 1px 1px ${colors.darkShadow}`, // Use for: Panels, Cards Subtle
    2: `0px 2px 6px 1px ${colors.lightShadow}, 0px 1px 1px ${colors.darkShadow}`, // Use for: Panels, Navigation Bars, Cards Bold
    3: `0px 6px 12px 1px ${colors.lightShadow}, 0px 1px 2px ${colors.darkShadow}`, // Use for: Menus, Date Picker
    4: `0px 8px 24px 1px ${colors.lightShadow}, 0px 1px 4px ${colors.darkShadow}`, // Use for: Modals
  },
  fontSize: {
    /** Value: 12px */
    xs: "12px",
    /** Value: 14px */
    sm: "14px",
    /** Value: 16px */
    md: "16px",
    /** Value: 20px */
    lg: "20px",
    /** Value: 24px */
    xl: "24px",
    /** Value: 36px */
    x3: "36px", // Smallest value (12) times 3
    /** Value: 72px */
    x6: "72px", // Smallest value (12) times 6
  },
  fontWeight: {
    /** Value: 100 */
    thin: "100", // Thin (Hairline)
    /** Value: 200 */
    extraLight: "200", // Extra Light (Ultra Light)
    /** Value: 300 */
    light: "300", // Light
    /** Value: 400 */
    normal: "400", // Normal (Regular)
    /** Value: 500 */
    medium: "500", // Medium
    /** Value: 600 */
    semiBold: "600", // Semi Bold (Demi Bold)
    /** Value: 700 */
    bold: "700", // Bold
    /** Value: 800 */
    extraBold: "800", // Extra Bold (Ultra Bold)
    /** Value: 900 */
    black: "900", // Black (Heavy)
    /** Value: 950 */
    extraBlack: "950", // Extra Black (Ultra Black)
  },
  lineHeight: {
    /** Value: 16px */
    xs: "16px",
    /** Value: 20px */
    sm: "20px",
    /** Value: 24px */
    md: "24px",
    /** Value: 28px */
    lg: "28px",
    /** Value: 46px */
    xl: "46px",
    /** Value: 80px */
    x5: "80px", // Smallest value (16) times 5
  },
  palettes: {
    background: {
      primary: {
        default: colors.white,
        inverted: colors.black,
      },
      secondary: {
        default: colors.grey[50],
        inverted: colors.grey[700],
      },
    },
    buttons: {
      accent: {
        background: {
          default: colors.green[400],
          hover: colors.green[300],
          select: colors.green[400],
          disabled: colors.grey[200],
        },
        text: {
          default: colors.grey[800],
          disabled: colors.grey[400],
        },
      },
      primary: {
        background: {
          default: colors.black,
          hover: colors.grey[600],
          select: colors.black,
          disabled: colors.grey[200],
        },
        text: {
          default: colors.white,
          disabled: colors.grey[400],
        },
      },
      secondary: {
        background: {
          default: colors.grey[400],
          hover: colors.black,
          select: colors.grey[600],
          disabled: colors.grey[200],
        },
        text: {
          default: colors.grey[800],
          hover: colors.white,
          disabled: colors.grey[400],
        },
      },
      caution: {
        background: {
          default: colors.red[400],
          hover: colors.red[300],
          select: colors.red[400],
          disabled: colors.grey[200],
        },
        text: {
          default: colors.white,
          disabled: colors.grey[400],
        },
      },
    },
    dividers: {
      subtle: {
        default: colors.grey[100],
        inverted: colors.grey[700],
      },
      bold: {
        default: colors.black,
        inverted: colors.white,
      },
    },
    inputs: {
      background: {
        default: colors.white,
        disabled: colors.grey[50],
      },
      border: {
        caution: colors.red[400],
        default: colors.grey[300],
        select: colors.black,
        active: {
          default: colors.black,
          inverted: colors.white,
        },
      },
      icon: colors.grey[800],
      text: {
        caution: colors.red[400],
        default: colors.grey[800],
        helper: colors.grey[400],
        label: colors.grey[800],
        placeholder: colors.grey[400],
      },
    },
    link: {
      default: colors.green[500],
      hover: colors.green[400],
      select: colors.green[500],
      disabled: colors.grey[400],
    },
    loyalty: {
      background: colors.purple[50],
      bold: colors.purple[400],
    },
    rewards: {
      member: colors.black,
      gold: colors.gold[400],
      silver: colors.slate[300],
      platinum: colors.slate[400],
      vip: colors.orange[400],
    },
    surface: {
      primary: {
        default: "placeholder value",
        inverted: "placeholder value",
      },
      // Opposites/complementary (default, inverted). If more then 2 values are available the prefix the inverted value with the name like memberInverted. If the value is a color name, do not prefix inverted with that value because blackInverted doesn't make sense...it is white.
      secondary: {
        default: "placeholder value",
        inverted: "placeholder value",
      },
    },
    status: {
      information: {
        subtle: colors.slate[50], // Light Background
        bold: colors.slate[400], // Background and border for default and light version
      },
      success: {
        subtle: colors.green[50], // Light background
        bold: colors.green[500], // Background and border for default and light version
      },
      error: {
        subtle: colors.red[50], // Light background
        bold: colors.red[400], // Background and border for default and light version
      },
      warning: {
        subtle: colors.yellow[50], // Light background
        bold: colors.yellow[400], // Background and border for default and light version
      },
    },
    text: {
      primary: {
        default: colors.grey[800],
        inverted: colors.white,
      },
      secondary: {
        default: colors.grey[500],
        inverted: colors.grey[300],
      },
      tertiary: {
        default: colors.grey[400],
        inverted: colors.grey[400],
      },
      accent: colors.green[500],
    },
  },
  shape: {
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px", // Use for: Button
      xl: "10px", // Use for: Containers, Advanced Button
      x100: "100%", // Use for circles
    },
  },
  space: (n) => `${n * 8}px`,
};

export { globalTheme };
