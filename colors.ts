/**
 * Instructions: If it fits within scale, add it to the color scale, if not add the value as a "alias" like below
 * Colors were named with the help of this color naming utility: https://colornamer.netlify.app/
 * The alias colors are from the old/current state of things and should be removed or converted when deemed appropriate/deprecated
 * */

export const colors = {
  white: "#FFFFFF", // Core Brand - White
  black: "#000000", // Core Brand - Black
  retroBlue: "#2F58EB", // Core Brand - Blue
  softBlue: "#6d8af1", // Core Brand - Blue Faded
  errieBlack: "#1A1A1A", // Primary Content (FIND AND REPLACE - grey[800])
  blackPanther: "#414243", // Secondary Content - Grey
  kiwiGrey: "#929395", // Tertiary Content - Grey
  piedWagtailGrey: "#BDBEC1", // Icon/Action - Grey
  azureHint: "#DDDEE0", // Borders - Grey (FIND AND REPLACE - grey[200])
  purpleCrystal: "#E7E8EC", // Dividers - Grey (FIND AND REPLACE - grey[200]) */
  chefsHat: "#F3F4F7", // Background - Grey  (FIND AND REPLACE - grey[50])
  finePine: "#008805", // Success - Green
  peacefulRain: "#F2F9F2", // Success - Background - Light Green
  tomato: "#FF3535", // Error - Red
  voraciousWhite: "#FEEEEE", // Error - Background - Light Red
  carrotCurl: "#FF9118", // Caution - Orange
  whatsLeft: "#FFF4E8", // Caution - Background - Light Orange
  placeboBlue: "#EDF3FC", // Highlight - Background - Blue
  frilledShark: "#95A0AA", // Rewards - Silver - Grey
  butterfield: "#F5C25C", // Rewards - Gold - Yellow (FIND AND REPLACE - gold[400])
  chainGangGrey: "#6E7E8E", // Rewards - Platinum - Grey (FIND AND REPLACE - gold[400])*/
  brightMango: "#F8892F", // Rewards - VIP - Orange (FIND AND REPLACE - orange[400]) */
  dragonlordPurple: "#6243BC", // Loyalty - Primary - Purple
  brightDusk: "#EFECF8", // Loyalty - Background - Light Purple
  denim: "#2646BC", // Interactive - Primary - Blue
  bavarianBlue: "#1C348D", // Interactive - Primary Active/Clicked - Blue
  fadedRetroBlue: "rgba(47, 88, 235, 0.7)", // Interactive - Primary Disabled - Blue
  drWhite: "#FAFAFA", // Interactive - Secondary Hover - White
  whiteSmoke: "#F5F5F5", // Interactive - Secondary Active/Clicked - White
  fadedRed: "#D54A4A", // Interactive - Delete Hover - Red
  rubiate: "#BE4242", // Interactive - Delete Active/Clicked - Red
  khmerCurry: "#ED5252", // Interactive - Delete Disabled -
  orangeOchre: "#D9753B", // Avatar - Orange1
  dullOrange: "#D9873B", // Avatar - Orange2
  excitingOrange: "#F2B279", // Avatar - Orange3
  loveYouPink: "#D97E8E", // Avatar - Pink
  moonlightPurple: "#5856B2", // Avatar - Purple
  blueNights: "#333A49", // Avatar - Blue1
  aerostaticsBlue: "#305473", // Avatar - Blue2
  irisBlue: "#3E64AD", // Avatar - Blue3
  iceBlue: "#739BD8", // Avatar - Blue4
  frillsBlue: "#8FA4BF", // Avatar - Blue5
  magicBlue: "#3D88A9", // Avatar - Teal1
  dragonflyBlue: "#44ADC5", // Avatar - Teal2
  stampPadGreen: "#30A690", // Avatar - Teal3
  technoGreen: "#6AA95A", // Avatar - Green1
  cabbagePatch: "#92CB59", // Avatar - Green2
  indianMaize: "#E7C54D", // Avatar - Yellow
  bruschettaRed: "#A65A49", // Avatar - Red1
  chestnutRose: "#CF5151", // Avatar - Red2
  fantasiaGrey: "#747A8C", // Avatar - Grey1
  assentGrey: "#8C8987", // Avatar - Grey2
  lightShadow: "rgba(0, 0, 0, 0.12)", // Button Shadow - Top
  darkShadow: "rgba(0, 0, 0, 0.04)", // Button Shadow - Bottom
  richGreen: `#268346`, // Dashboard Trends Green (FIND AND REPLACE - green[600])
  lavendarWisp: `#EAEBEE`, // Dashboard Billing Progress Background
  royalHunterBlue: `#430CF5`, // Dashboard Billing Icon
  placeboPurple: `#f1e6ff`, // Dashboard Billing Icon Background
  powerGrey: "#a3a4a6", // Dashboard Billing Grey
  red: {
    50: "#FBEBED",
    100: "#F0B0B9",
    200: "#E88996",
    300: "#E16173",
    400: "#D93A50",
    500: "#AE2E40",
    600: "#822330",
    700: "#571720",
  },
  orange: {
    50: "#FEF3EA",
    100: "#FCD0AC",
    200: "#FBB882",
    300: "#F9A159",
    400: "#F8892F",
    500: "#C66E26",
    600: "#95521C",
    700: "#633713",
  },
  gold: {
    50: "#FEF9EF",
    100: "#FBE7BE",
    200: "#F9DA9D",
    300: "#F7CE7D",
    400: "#F5C25C",
    500: "#C2B052",
    600: "#937437",
    700: "#624E25",
  },
  yellow: {
    50: "#FEFBF0",
    100: "#FEFBF0",
    200: "#FAF1C2",
    300: "#F7EAA4",
    400: "#F2DC67",
    500: "#C2B052",
    600: "#91843E",
    700: "#615829",
  },
  green: {
    50: "#ECFBF1",
    100: "#B3F1C8",
    200: "#8CE9AC",
    300: "#66E291",
    400: "#40DB75",
    500: "#33AF5E",
    600: "#268346",
    700: "#1A582F",
  },
  aqua: {
    50: "#EAFCFC",
    100: "#AAF1F1",
    200: "#80EBEB",
    300: "#55E4E4",
    400: "#2BDDDD",
    500: "#22B1B1",
    600: "#1A8585",
    700: "#115858",
  },
  blue: {
    50: "#E9F5FE",
    100: "#A7D8FC",
    200: "#7BC5FB",
    300: "#4FB1F9",
    400: "#239EF8",
    500: "#1C7EC6",
    600: "#155F95",
    700: "#0E3F63",
  },
  purple: {
    50: "#EDE5FF",
    100: "#B799FF",
    200: "#9366FF",
    300: "#6F33FF",
    400: "#4B00FF",
    500: "#3C00CC",
    600: "#2D0099",
    700: "#1E0066",
  },
  slate: {
    50: "#ECF1F6",
    100: "#D1DBE7",
    200: "#A7BACC",
    300: "#8FA1B4",
    400: "#6E7E8E",
    500: "#586572",
    600: "#424C55",
    700: "#2C3239",
  },
  grey: {
    50: "#F3F4F7",
    100: "#E7E8EC",
    200: "#DDDEE0",
    300: "#CBCBCB",
    400: "#AFAFAF",
    500: "#757575",
    600: "#424C55",
    700: "#2E2F31",
    800: "#1A1A1A",
  },
} as const;
