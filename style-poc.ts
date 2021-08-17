// Example references:
// https://next.material-ui.com/customization/default-theme/
// https://chakra-ui.com/docs/theming/theme
// https://material.io/design/material-theming/overview.html#using-material-theming
// Suggested Guidelines:
// - When creating sizes that have numerical values that are not on a incremental scale (2, 4, 6, 8, 10, 12 = increments of 2) use t-shirt starting at xs and ending at xl while anything passed that should be a multiplication of the smallest size (xs). For example is the xs sizes is 2 pixels and xl is 16 pixels, once you need more sizes and say theres a sizes that is 48 pixels being represented in the design it would be the 48 pixels divided by the 2 pixels and would give you the labels as x24 or 24 times the smallest size.
// - When dealing with values represented as a scale in Figma, like increments of 100, use a numbered scale to replicate the ideas in the design.
// - Try to match the verbiage as it is found in Figma to help maintain a consistent dialogue between all parties
// - TBD i hope this is a easy way to get feedback

import { DefaultTheme } from "styled-components";
import { colors, sizes } from "../index";

// Focuses on generics and groups of basic or generalized implementation without being too specific about concepts that aren't created yet
const globalTheme: DefaultTheme = {
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
      primary: {
        default: colors.colorName,
        inverted: colors.colorName,
      },
      secondary: {
        default: colors.colorName,
        inverted: colors.colorName,
      },
    },
    // Dialog windows with a message or response ta an action
    status: {
      information: {
        light: colors.colorName, // Light Background
        dark: colors.colorName, // Background and border for default and light version
      },
      success: {
        light: colors.colorName, // Light background
        dark: colors.colorName, // Background and border for default and light version
      },
      error: {
        light: colors.colorName, // Light background
        dark: colors.colorName, // Background and border for default and light version
      },
      warning: {
        light: colors.colorName, // Light background
        dark: colors.colorName, // Background and border for default and light version
      },
    },
    // This is on the edge of "breaking the rule" of being too specific to implementation
    text: {
      primary: {
        default: colors.colorName,
        inverted: colors.colorName,
      },
      secondary: {
        default: colors.colorName,
        inverted: colors.colorName,
      },
      tertiary: {
        default: colors.colorName,
        inverted: colors.colorName,
      },
    },
  },
  // Defines basic shapes of the bounding box of DOM nodes. Right now its just all around border radius but it could evolve to have only 2 or 3 corners for tooltips, clipping masks, tabs, artifacts, etc.
  shape: {
    borderRadius: {
      sm: sizes.borderRadiusValue,
      lg: sizes.borderRadiusValue, // Use for: Button
      xl: sizes.borderRadiusValue, // Use for: Containers, Advanced Button
      x50: sizes.borderRadiusValue, // Use for: Group Buttons, Tags
      x100: sizes.borderRadiusValue, // Use for circles
    },
  },
  // Typography is the root here cause it explicity state that you're trying to apply styles to the appearance of text and text alone. It's broken out by attribute instead of by element because all of the HTML elements DON'T have different font styling attributes. This also abstracts away the semantic/markup decisions being made by the theme vs upon component implementation i.e. all weights are the same for headings and body copy. Organized for ways that aid with intellisense/autofill so if you're trying to apply a property to text element you type typography, then you get suggested a font styled property like color, font-size, font-weight, line-height, letter-spacing, etc. From there you look for the type or group of text that you're style should fit within if applicable, like display, heading, body, etc. From there you should then see what options are available from the established UX Design System found in Figma .
  typography: {
    // Sizes as stand alone cause not all HTML elements have different font styling attributes. i.e. all weights are the same for headings and body copy
    fontSize: {
      h1: {
        fontSize: sizes.number,
        lineHeight: sizes.number
      },
      h2: {
        fontSize: sizes.number,
        lineHeight: sizes.number
      },
      h3: {
        fontSize: sizes.number,
        lineHeight: sizes.number
      },
      h4: {
        fontSize: sizes.number,
        lineHeight: sizes.number
      },
      h5: {
        fontSize: sizes.number,
        lineHeight: sizes.number
      }
      },
      // IDK if this is necessary but this would be the font weight for both the "display" type and h1, h2, h3, etc
      heading: {
        fontWeight: sizes.number,
      },
      // This is from Figma and extends past a h1 so idk what to do here
      display: {
        md: {
          fontSize: sizes.number,
          lineHeight: sizes.number,
          letterSpacing: sizes.number
        },
        lg: {
          fontSize: sizes.number,
          lineHeight: sizes.number,
          letterSpacing: sizes.number
        }
      },
      // This is from Figma but idk if we'll get the same arguments here for the headings as in theory this should be a p tag but its usage and semantics sound be out of sync cause body copy could be used in various places like a span tag, small tag, label tag, caption tag, dt, dd tag, table elements, etc. 
      body: {
        sm: {
          fontSize: sizes.number,
          lineHeight: sizes.number
        },
        md: {
          fontSize: sizes.number,
          lineHeight: sizes.number
        },
        lg: {
          fontSize: sizes.number,
          lineHeight: sizes.number
        },
      }
    }
  }
};

export { globalTheme };
