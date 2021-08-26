### Suggested Guidelines and Notes:

- When creating sizes that have numerical values that are not on a incremental scale (2, 4, 6, 8, 10, 12 = increments of 2) use t-shirt starting at xs and ending at xl while anything passed that should be a multiplication of the smallest size (xs). For example is the xs sizes is 2 pixels and xl is 16 pixels, once you need more sizes and say theres a sizes that is 48 pixels being represented in the design it would be the 48 pixels divided by the 2 pixels and would give you the labels as x24 or 24 times the smallest size.
- When dealing with values represented as a scale in Figma, like increments of 100, use a numbered scale to replicate the ideas in the design.
- Try to match the verbiage as it is found in Figma to help maintain a consistent dialogue between all parties
- TBD i hope this is a easy way to get feedback
- `globalTheme` Focuses on generics and groups of basic or generalized implementation without being too specific about concepts that aren't created yet
  const globalTheme = {

### Elevation

Used for standardizing the appearance of how things should appear like they are "elevating" of of the page but this would also include elevation changes for interactive states as well...box shadows

### Pallettes

Groups of colors specific to general and reused implementation details. The colors here should be found and have the intent of being used for MORE than just one property like, border-color, background-color, fill, color, shadows, etc or just a specific component. Colors here should NOT be focuses on specific properties alone (borders, backgrounds, text colors, etc) or components like (header, calendar, inputs, etc) but should be inserted based on relation to the platform as a whole or similar responses are actions done by the user where variations exits like (error, success are variations in response and rewards and loyalty and brand are specific groups of colors found in various or very unique places within the platform). For example the brand.primary color can be used for a border color, background color and foreground color on various elements and components.

#### Suggested "rules" of ways to establish colors:

- Order (primary, secondary, tertiary). If more than 3 options are available avoid this concept and see if any of the others below could work.
- Shades where the "base" color variant in hue or saturation (default, light, dark or number values like 100, 200, 300, 400, 500)
- Related use that align with the brand, platform or implementation details (members, loyalty, vip, brand)
- Opposites/complementary (default, inverted). If more then 2 values are available the prefix the inverted value with the name like memberInverted. If the value is a color name, do not prefix inverted with that value because blackInverted doesn't make sense...it is white.

Order (primary, secondary, tertiary). If more than 3 options are available avoid this concept and see if any of the others below could work.

Related use that align with the brand, platform or implementation details (members, loyalty, vip, brand)

Opposites/complementary (default, inverted). If more then 2 values are available the prefix the inverted value with the name like memberInverted. If the value is a color name, do not prefix inverted with that value because blackInverted doesn't make sense...it is white.

Dialog windows with a message or response ta an action

### Shape

Defines basic shapes of the bounding box of DOM nodes. Right now its just all around border radius but it could evolve to have only 2 or 3 corners for tooltips, clipping masks, tabs, artifacts, etc.

### Spacing

Spacing function based on a 8px scale spacing used on various elements throughout the platform
space: (n) => `${n * 8}px`,

### Typography

Typography is the root here cause it explicitly state that you're trying to apply styles to the appearance of text and text alone. It's broken out by attribute instead of by element because all of the HTML elements DON'T have different font styling attributes. This also abstracts away the semantic/markup decisions being made by the theme vs upon component implementation i.e. all weights are the same for headings and body copy. Organized for ways that aid with intellisense/autofill so if you're trying to apply a property to text element you want, you start typing the font styled property like color, font-size, font-weight, line-height, letter-spacing, etc. From there you look for the type or group of text that you're style should fit within if applicable, like display, heading, body, etc. From there you should then see what options are available from the established UX Design System found in Figma

### Example references:

- [https://next.material-ui.com/customization/default-theme/]
- [https://chakra-ui.com/docs/theming/theme]
- [https://material.io/design/material-theming/overview.html#using-material-theming]
- [https://theme-ui.com/]
- [https://jxnblk.com/blog/design-graph/]
- [https://tailwindcss.com/]
  .
