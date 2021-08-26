/**
 * Instructions: If it fits within scale, add it to the color scale, if not add the value as a "alias" like below
 * Colors were named with the help of this color naming utility: https://colornamer.netlify.app/
 * The alias colors are from the old/current state of things and should be removed or converted when deemed appropriate/deprecated
 * */

export const colors = {
  /** Value: #FFFFFF */
  white: "#FFFFFF", // Core Brand - White
  /** Value: #000000 */
  black: "#000000", // Core Brand - Black
  /** Value: #2F58EB */
  retroBlue: "#2F58EB", // Core Brand - Blue
  /** Value: #6d8af1 */
  softBlue: "#6d8af1", // Core Brand - Blue Faded
  /** Value: #1A1A1A (FIND AND REPLACE - grey[800]) */
  errieBlack: "#1A1A1A", // Primary Content (FIND AND REPLACE - grey[800])
  /** Value: #414243 */
  blackPanther: "#414243", // Secondary Content - Grey
  /** Value: #929395 */
  kiwiGrey: "#929395", // Tertiary Content - Grey
  /** Value: #BDBEC1 */
  piedWagtailGrey: "#BDBEC1", // Icon/Action - Grey
  /** Value: #DDDEE0 (FIND AND REPLACE - grey[200]) */
  azureHint: "#DDDEE0", // Borders - Grey (FIND AND REPLACE - grey[200])
  /** Value: #E7E8EC (FIND AND REPLACE - grey[100]) */
  purpleCrystal: "#E7E8EC", // Dividers - Grey (FIND AND REPLACE - grey[200]) */
  /** Value: #F3F4F7 (FIND AND REPLACE - grey[50]) */
  chefsHat: "#F3F4F7", // Background - Grey  (FIND AND REPLACE - grey[50])
  /** Value: #008805 */
  finePine: "#008805", // Success - Green
  /** Value: #F2F9F2 */
  peacefulRain: "#F2F9F2", // Success - Background - Light Green
  /** Value: #FF3535 */
  tomato: "#FF3535", // Error - Red
  /** Value: #FEEEEE */
  voraciousWhite: "#FEEEEE", // Error - Background - Light Red
  /** Value: #FF9118 */
  carrotCurl: "#FF9118", // Caution - Orange
  /** Value: #FFF4E8 */
  whatsLeft: "#FFF4E8", // Caution - Background - Light Orange
  /** Value: #EDF3FC */
  placeboBlue: "#EDF3FC", // Highlight - Background - Blue
  /** Value: #95A0AA */
  frilledShark: "#95A0AA", // Rewards - Silver - Grey
  /** Value: #F5C25C (FIND AND REPLACE - gold[400]) */
  butterfield: "#F5C25C", // Rewards - Gold - Yellow (FIND AND REPLACE - gold[400])
  /** Value: #6E7E8E (FIND AND REPLACE - slate[400]) */
  chainGangGrey: "#6E7E8E", // Rewards - Platinum - Grey (FIND AND REPLACE - gold[400])*/
  /** Value: #F8892F (FIND AND REPLACE - orange[400]) */
  brightMango: "#F8892F", // Rewards - VIP - Orange (FIND AND REPLACE - orange[400]) */
  /** Value: #6243BC */
  dragonlordPurple: "#6243BC", // Loyalty - Primary - Purple
  /** Value: #EFECF8 */
  brightDusk: "#EFECF8", // Loyalty - Background - Light Purple
  /** Value: #2646BC */
  denim: "#2646BC", // Interactive - Primary - Blue
  /** Value: #1C348D */
  bavarianBlue: "#1C348D", // Interactive - Primary Active/Clicked - Blue
  /** Value: rgba(47, 88, 235, 0.7) */
  fadedRetroBlue: "rgba(47, 88, 235, 0.7)", // Interactive - Primary Disabled - Blue
  /** Value: #FAFAFA */
  drWhite: "#FAFAFA", // Interactive - Secondary Hover - White
  /** Value: #F5F5F5 */
  whiteSmoke: "#F5F5F5", // Interactive - Secondary Active/Clicked - White
  /** Value: #D54A4A */
  fadedRed: "#D54A4A", // Interactive - Delete Hover - Red
  /** Value: #BE4242 */
  rubiate: "#BE4242", // Interactive - Delete Active/Clicked - Red
  /** Value: #ED5252 */
  khmerCurry: "#ED5252", // Interactive - Delete Disabled -
  /** Value: #D9753B */
  orangeOchre: "#D9753B", // Avatar - Orange1
  /** Value: #D9873B */
  dullOrange: "#D9873B", // Avatar - Orange2
  /** Value: #F2B279 */
  excitingOrange: "#F2B279", // Avatar - Orange3
  /** Value: #D97E8E */
  loveYouPink: "#D97E8E", // Avatar - Pink
  /** Value: #5856B2 */
  moonlightPurple: "#5856B2", // Avatar - Purple
  /** Value: #333A49 */
  blueNights: "#333A49", // Avatar - Blue1
  /** Value: #305473 */
  aerostaticsBlue: "#305473", // Avatar - Blue2
  /** Value: #3E64AD */
  irisBlue: "#3E64AD", // Avatar - Blue3
  /** Value: #739BD8 */
  iceBlue: "#739BD8", // Avatar - Blue4
  /** Value: #8FA4BF */
  frillsBlue: "#8FA4BF", // Avatar - Blue5
  /** Value: #3D88A9 */
  magicBlue: "#3D88A9", // Avatar - Teal1
  /** Value: #44ADC5 */
  dragonflyBlue: "#44ADC5", // Avatar - Teal2
  /** Value: #30A690 */
  stampPadGreen: "#30A690", // Avatar - Teal3
  /** Value: #6AA95A */
  technoGreen: "#6AA95A", // Avatar - Green1
  /** Value: #92CB59 */
  cabbagePatch: "#92CB59", // Avatar - Green2
  /** Value: #E7C54D */
  indianMaize: "#E7C54D", // Avatar - Yellow
  /** Value: #A65A49 */
  bruschettaRed: "#A65A49", // Avatar - Red1
  /** Value: #CF5151 */
  chestnutRose: "#CF5151", // Avatar - Red2
  /** Value: #747A8C */
  fantasiaGrey: "#747A8C", // Avatar - Grey1
  /** Value: #8C8987 */
  assentGrey: "#8C8987", // Avatar - Grey2
  /** Value: rgba(0, 0, 0, 0.12) */
  lightShadow: "rgba(0, 0, 0, 0.12)", // Button Shadow - Top
  /** Value: rgba(0, 0, 0, 0.04) */
  darkShadow: "rgba(0, 0, 0, 0.04)", // Button Shadow - Bottom
  /** Value: #268346 (FIND AND REPLACE - green[600]) */
  richGreen: `#268346`, // Dashboard Trends Green (FIND AND REPLACE - green[600])
  /** Value: #EAEBEE */
  lavendarWisp: `#EAEBEE`, // Dashboard Billing Progress Background
  /** Value: #430CF3 */
  royalHunterBlue: `#430CF5`, // Dashboard Billing Icon
  /** Value: #f1e6ff */
  placeboPurple: `#f1e6ff`, // Dashboard Billing Icon Background
  /** Value #a3a4a6 */
  powerGrey: "#a3a4a6", // Dashboard Billing Grey
  red: {
    /** Value: #FBEBED*/
    50: "#FBEBED",
    /** Value: #F0B0B9*/
    100: "#F0B0B9",
    /** Value: */
    200: "#E88996",
    /** Value: #E16173*/
    300: "#E16173",
    /** Value: #D93A50*/
    400: "#D93A50",
    /** Value: #AE2E40*/
    500: "#AE2E40",
    /** Value: #822330*/
    600: "#822330",
    /** Value: #571720*/
    700: "#571720",
  },
  orange: {
    /** Value: #FEF3EA */
    50: "#FEF3EA",
    /** Value: #FCD0AC*/
    100: "#FCD0AC",
    /** Value: #FBB882 */
    200: "#FBB882",
    /** Value: #F9A159 */
    300: "#F9A159",
    /** Value: #F8892F*/
    400: "#F8892F",
    /** Value: #C66E26*/
    500: "#C66E26",
    /** Value: #95521C*/
    600: "#95521C",
    /** Value: #633713*/
    700: "#633713",
  },
  gold: {
    /** Value: #FEF9EF*/
    50: "#FEF9EF",
    /** Value: #FBE7BE*/
    100: "#FBE7BE",
    /** Value: #F9DA9D*/
    200: "#F9DA9D",
    /** Value: #F7CE7D*/
    300: "#F7CE7D",
    /** Value: #F5C25C*/
    400: "#F5C25C",
    /** Value: #C2B052*/
    500: "#C2B052",
    /** Value: #937437*/
    600: "#937437",
    /** Value: #624E25*/
    700: "#624E25",
  },
  yellow: {
    /** Value: #FEFBF0*/
    50: "#FEFBF0",
    /** Value: #FEFBF0*/
    100: "#FEFBF0",
    /** Value: #FAF1C2*/
    200: "#FAF1C2",
    /** Value: */
    300: "#F7EAA4",
    /** Value: #F2DC67*/
    400: "#F2DC67",
    /** Value: #C2B052*/
    500: "#C2B052",
    /** Value: #91843E*/
    600: "#91843E",
    /** Value: #615829*/
    700: "#615829",
  },
  green: {
    /** Value: #ECFBF1*/
    50: "#ECFBF1",
    /** Value: #B3F1C8*/
    100: "#B3F1C8",
    /** Value: #8CE9AC */
    200: "#8CE9AC",
    /** Value: #66E291*/
    300: "#66E291",
    /** Value: #40DB75*/
    400: "#40DB75",
    /** Value: #33AF5E*/
    500: "#33AF5E",
    /** Value: #268346*/
    600: "#268346",
    /** Value:#1A582F */
    700: "#1A582F",
  },
  aqua: {
    /** Value: #EAFCFC*/
    50: "#EAFCFC",
    /** Value: #AAF1F1*/
    100: "#AAF1F1",
    /** Value: #80EBEB*/
    200: "#80EBEB",
    /** Value: #55E4E4*/
    300: "#55E4E4",
    /** Value: #2BDDDD*/
    400: "#2BDDDD",
    /** Value: #22B1B1*/
    500: "#22B1B1",
    /** Value: #1A8585 */
    600: "#1A8585",
    /** Value: #115858*/
    700: "#115858",
  },
  blue: {
    /** Value: #E9F5FE*/
    50: "#E9F5FE",
    /** Value: #A7D8FC*/
    100: "#A7D8FC",
    /** Value: #7BC5FB*/
    200: "#7BC5FB",
    /** Value: #4FB1F9*/
    300: "#4FB1F9",
    /** Value: #239EF8*/
    400: "#239EF8",
    /** Value: #1C7EC6*/
    500: "#1C7EC6",
    /** Value: #155F95*/
    600: "#155F95",
    /** Value: #0E3F63*/
    700: "#0E3F63",
  },
  purple: {
    /** Value: #EDE5FF*/
    50: "#EDE5FF",
    /** Value: #B799FF*/
    100: "#B799FF",
    /** Value: #9366FF*/
    200: "#9366FF",
    /** Value: #6F33FF*/
    300: "#6F33FF",
    /** Value: #4B00FF*/
    400: "#4B00FF",
    /** Value: #3C00CC*/
    500: "#3C00CC",
    /** Value: #2D0099*/
    600: "#2D0099",
    /** Value: #1E0066*/
    700: "#1E0066",
  },
  slate: {
    /** Value: #ECF1F6*/
    50: "#ECF1F6",
    /** Value: #D1DBE7*/
    100: "#D1DBE7",
    /** Value: #A7BACC */
    200: "#A7BACC",
    /** Value: #8FA1B4 */
    300: "#8FA1B4",
    /** Value: #6E7E8E */
    400: "#6E7E8E",
    /** Value: #586572 */
    500: "#586572",
    /** Value: #424C55 */
    600: "#424C55",
    /** Value: #2C3239 */
    700: "#2C3239",
  },
  grey: {
    /** Value: #F3F4F7*/
    50: "#F3F4F7",
    /** Value: #E7E8EC*/
    100: "#E7E8EC",
    /** Value: #DDDEE0*/
    200: "#DDDEE0",
    /** Value: #CBCBCB*/
    300: "#CBCBCB",
    /** Value: #AFAFAF*/
    400: "#AFAFAF",
    /** Value: #757575*/
    500: "#757575",
    /** Value: #424C55*/
    600: "#424C55",
    /** Value: #2E2F31*/
    700: "#2E2F31",
    /** Value: #1A1A1A*/
    800: "#1A1A1A",
  },
};
