import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');

// Reference device (iPhone X) taken
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * Horizontal scaling
 * Used for: padding, margin, width, borderRadius
 */
export const scale = (size: number) => (width / BASE_WIDTH) * size;


// Use verticalScale() for
// ✔ fixed heights (buttons, cards)
// ✔ minHeight
// ✔ vertical spacing (rarely)
export const verticalScale = (size: number) => (height / BASE_HEIGHT) * size;


/**
 * Controlled scaling (BEST FOR TEXT)
 */
export const moderateScale =  (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

