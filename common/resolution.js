import {
    Dimensions,
} from "react-native";

const { height, width } = Dimensions.get("window");
const UIPixelRatio = width / 375;

export function toDips(px) {
    return Math.round(px * UIPixelRatio);
}

