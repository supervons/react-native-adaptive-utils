/**
 * Resolution tool
 */
import { Dimensions, Platform, StatusBar } from "react-native";

const { width } = Dimensions.get("window");
const UIPixelRatio = width / 375;

/**
 * Dynamically scale the font size based on the current screen width
 * @param px
 * @returns {number}
 */
export function dynamicFontSize(px) {
  return Math.round(px * UIPixelRatio);
}
/**
 * Check whether it is iphonex
 * @param px
 * @returns {number}
 */
export function isIphoneX() {
  let dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

/**
 * Gets the title bar height based on the current screen
 * @param px
 * @returns {number}
 */
export function getTitleBarHeight() {
  let dimen = Dimensions.get("window");
  let isIphoneX =
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812);
  let statusBarHeight = 0;
  if (Platform.OS == "android") {
    statusBarHeight = StatusBar.currentHeight;
  } else if (isIphoneX) {
    statusBarHeight = 44;
  } else {
    statusBarHeight = 20;
  }
  const unitWidth = dimen.width / 750;
  const titleHeight = unitWidth * 100 + statusBarHeight;
  return titleHeight;
}

/**
 * Converts pixel (px) dimensions from design draft to actual display size (dp/pt) on device
 * @param {number} number - Original size value from design draft (px)
 * @param {number} [defaultDeviceWidth=750] - Standard width of design draft, defaults to 750px
 * @param {number} [defaultPixelRatio=2] - Pixel density of design draft, defaults to @2x
 * @returns {number} Returns the actual display size adapted to current device
 * @example
 * // Button width is 100px in design draft
 * const buttonWidth = px2dp(100);
 * // Will automatically calculate appropriate size for different screens
 */
export function getDensity(
    number,
    defaultDeviceWidth = 750,
    defaultPixelRatio = 2
) {
  let wr = defaultDeviceWidth / defaultPixelRatio;
  let scale = width / wr;
  return number * scale;
}
