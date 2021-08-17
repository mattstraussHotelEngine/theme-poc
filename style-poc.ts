// Example references:
// https://next.material-ui.com/customization/default-theme/
// https://chakra-ui.com/docs/theming/theme
// https://material.io/design/material-theming/overview.html#using-material-theming
// Suggested Guidelines:
// - When creating sizes that have numerical values that are not on a incremental scale (2, 4, 6, 8, 10, 12 = increments of 2) use t-shirt starting at xs and ending at xl while anything passed that should be a multiplication of the smallest size (xs). For example is the xs sizes is 2 pixels and xl is 16 pixels, once you need more sizes and say theres a sizes that is 48 pixels being represented in the design it would be the 48 pixels divided by the 2 pixels and would give you the labels as x24 or 24 times the smallest size.
// - When dealing with values represented as a scale in Figma, like increments of 100, use a numbered scale to replicate the ideas in the design.
// - Try to match the verbiage as it is found in Figma to help maintain a consistent dialogue between all parties
// - TBD

import { DefaultTheme } from "styled-components";
import { colors, sizes } from "../index";

// Focuses on generics and groups of basic or generalized implementation without being too specific about concepts that aren't created yet
const globalTheme: DefaultTheme = {
  // TBD if this is a good idea but the intent was to map out the colors in a defined way that is inline with our color scale but doesn't have direct application to date
  colors: {
    grey: {
      50: colors.colorName,
      100: colors.colorName,
      200: colors.colorName,
      300: colors.colorName,
      400: colors.colorName,
      500: colors.colorName,
      600: colors.colorName,
      700: colors.colorName,
      800: colors.colorName,
    },
    slate: {},
    purple: {},
    blue: {},
    aqua: {},
    green: {},
    yellow: {},
    gold: {},
    orange: {},
    red: {},
  },
  // Used for standardizing the appearance of how things should appear like they are "elevating" of of the page but this would also include elevation changes for interactive states as well
  elevation: {
    0: sizes.boxShadowValue, // Use for: Flat Object (to reset or override elevation/box shadow need be)
    1: sizes.boxShadowValue, // Use for: Panels, Cards Subtle
    2: sizes.boxShadowValue, // Use for: Panels, Navigation Bars, Cards Bold
    3: sizes.boxShadowValue, // Use for: Menus, Date Picker
    4: sizes.boxShadowValue, // Use for: Modals
  },
  // Groups of colors specific to general and reused implementation details. The colors here should be found and have the intent of being used for MORE than just one property like, border-color, background-color, fill, color, shadows, etc or just a specific component. Colors here should NOT be focuses on specific properties alone (borders, backgrounds, text colors, etc) or components like (header, calendar, inputs, etc) but should be inserted based on relation to the platform as a whole or similar responses are actions done by the user where variations exits like (error, success are variations in response and rewards and loyalty and brand are specific groups of colors found in various or very unique places within the platform). For example the brand.primary color can be used for a border color, background color and foreground color on various elements and components.
  palettes: {
    brand: {
      primary: colors.colorName,
      secondary: colors.colorName,
      tertiary: colors.colorName,
    },
    loyalty: {
      primary: colors.colorName,
      background: colors.colorName,
    },
    rewards: {
      member: colors.colorName,
      silver: colors.colorName,
      gold: colors.colorName,
      platinum: colors.colorName,
      vip: colors.colorName,
    },
    surface: {
      primary: colors.colorName,
      secondary: colors.colorName,
      primaryInverted: colors.colorName,
      secondaryInverted: colors.colorName,
    },
    // Dialog windows with a message or response ta an action
    status: {
      informationBold: colors.colorName, // Background and border for default and light version
      informationSubtle: colors.colorName, // Light Background
      successBold: colors.colorName, // Background and border for default and light version
      successSubtle: colors.colorName, // Light Background
      errorBold: colors.colorName, // Background and border for default and light version
      errorSubtle: colors.colorName, // Light Background
      warningBold: colors.colorName, // Background and border for default and light version
      warningSubtle: colors.colorName, // Light Background
    },
    // This is on the edge of "breaking the rule" of being too specific to implementation
    text: {
      primary: colors.colorName,
      secondary: colors.colorName,
      tertiary: colors.colorName,
      link: colors.colorName,
      primaryInverted: colors.colorName,
      secondaryInverted: colors.colorName,
      tertiaryInverted: colors.colorName,
    },
  },
  // Defines basic shapes of the bounding box of DOM nodes. Right now its just all around border radius but it could evolve to have only 2 or 3 corners for tooltips, clipping masks, tabs, artifacts, etc.
  shape: {
    xsBorderRadius: sizes.borderRadiusValue,
    smBorderRadius: sizes.borderRadiusValue,
    lgBorderRadius: sizes.borderRadiusValue, // Use for: Button
    xlBorderRadius: sizes.borderRadiusValue, // Use for: Containers, Advanced Button
    x50: sizes.borderRadiusValue, // Use for: Group Buttons, Tags
    x100: sizes.borderRadiusValue, // Use for circles
  },
  // Generic spacing used on various elements throughout the platform
  spacing: {
    0: sizes.spacing,
    2: sizes.spacing,
    4: sizes.spacing,
    6: sizes.spacing,
    10: sizes.spacing,
    15: sizes.spacing,
    20: sizes.spacing,
    25: sizes.spacing,
    30: sizes.spacing,
    35: sizes.spacing,
    40: sizes.spacing,
    45: sizes.spacing,
    50: sizes.spacing,
    55: sizes.spacing,
    60: sizes.spacing,
    65: sizes.spacing,
    70: sizes.spacing,
    75: sizes.spacing,
    80: sizes.spacing,
    85: sizes.spacing,
    90: sizes.spacing,
    95: sizes.spacing,
    100: sizes.spacing,
  },
  // Typography is the root here cause it explicity state that you're trying to apply styles to the appearance of text and text alone. It's broken out by attribute instead of by element because all of the HTML elements DON'T have different font styling attributes. This also abstracts away the semantic/markup decisions being made by the theme vs upon component implementation i.e. all weights are the same for headings and body copy. Organized for ways that aid with intellisense/autofill so if you're trying to apply a property to text element you type typography, then you get suggested a font styled property like color, font-size, font-weight, line-height, letter-spacing, etc. From there you look for the type or group of text that you're style should fit within if applicable, like display, heading, body, etc. From there you should then see what options are available from the established UX Design System found in Figma .
  typography: {
    // Sizes as stand alone cause not all HTML elements have different font styling attributes. i.e. all weights are the same for headings and body copy
    fontSize: {
      display: {
        md: sizes.fontSize,
        lg: sizes.fontSize,
      },
      // Heading and sizes instead of h1, h2, h3, h4, h5, h6 because that should be determined upon implementation and semantics shouldn't be decided at this level
      heading: {
        xs: sizes.fontSize,
        sm: sizes.fontSize,
        md: sizes.fontSize,
        lg: sizes.fontSize,
      },
      body: {
        sm: sizes.fontSize,
        md: sizes.fontSize,
        lg: sizes.fontSize,
      },
      metric: sizes.fontSize,
      link: sizes.fontSize,
    },
    fontWeight: {
      display: sizes.fontWeight,
      heading: sizes.fontWeight,
      body: sizes.fontWeight,
    },
    letterSpacing: {
      display: sizes.letterSpacing,
    },
  },
  // Potential suggested approach for generic/native elements that have specific designation but this still is on the edge of being too specific to implementation concepts. This should stop at native DOM elements and not extend into full out implementation or composition of a interactive component like a menu button or a drop down menu or a date picker or a search filter. Each one of those examples uses a bunch of smaller ideas to make up the end result. This needs feedback from the group
  interactive: {
    links: {
      primary: {
        color: colors.colorName,
        outline: "1px solid grey",
        disabled: {
          color: colors.colorName,
          cursor: "not-allowed",
        },
        active: {
          color: colors.colorName,
        },
        focus: {
          color: colors.colorName,
          outline: "1px solid blue",
        },
        hover: {
          color: colors.colorName,
          textDecoration: "none",
        },
      },
      secondary: {
        // secondary things
      },
    },
    inputs: {
      // TBD if this is good idea or not
    },
    buttons: {
      // TBD if this is good idea or not
    },
  },
  // Similar to above cause idk if this concepts is a good one but im leaning towards NO because this goes against the concept i tried to apply to the pallettes object
  borders: {
    color: {
      container: colors.colorName,
      input: colors.colorName,
      button: colors.colorName,
      active: colors.colorName,
      containerInverted: colors.colorName,
      inputInverted: colors.colorName,
      buttonInverted: colors.colorName,
      activeInverted: colors.colorName,
    },
    // Used to define variant border widths (probably remove this for now)
    size: {},
    // Used to define variant border styles like dashed, solid, dotted, inset, outset, etc (probably remove this for now)
    style: {},
  },
};

export { globalTheme };
