/**
 * Resolution tool
 */
import { Dimensions } from "react-native";

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
