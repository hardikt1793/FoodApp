import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";

export default {
  wp: wp,
  hp: hp,
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const screen = Dimensions.get('window');
export const SLIDER_WIDTH = screen.width + 30;
export const ASPECT_RATIO = screen.width / screen.height;
export const LATITUDE_DELTA = 0.06;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
