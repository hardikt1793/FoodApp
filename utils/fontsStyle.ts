import { StyleSheet } from "react-native";
import responsive from "./responsive";

const createFontStyle = (size: number, weight: 'bold' | '600' | '500' | '400') => ({
    fontSize: responsive.hp(size),
    fontWeight: weight,
});

export const fontsStyle = StyleSheet.create({
    // Bold Fonts
    font_Bold_25: createFontStyle(2.5, 'bold'),
    font_Bold_30: createFontStyle(3.0, 'bold'),
    font_Bold_20: createFontStyle(2.0, 'bold'),
    font_Bold_18: createFontStyle(1.8, 'bold'),

    // Semi-Bold Fonts
    font_SemiBold_24: createFontStyle(2.4, '600'),

    // Medium Fonts
    font_Medium_25: createFontStyle(2.5, '500'),
    font_Medium_23: createFontStyle(2.3, '500'),
    font_Medium_30: createFontStyle(3.0, '500'),
    font_Medium_18: createFontStyle(1.8, '500'),
    font_Medium_16: createFontStyle(1.6, '500'),

    // Regular Fonts
    font_Regular_20: createFontStyle(2.0, '400'),
    font_Regular_16: createFontStyle(1.6, '400'),
    font_Regular_15: createFontStyle(1.5, '400'),
    font_Regular_14: createFontStyle(1.4, '400'),
    font_Regular_12: createFontStyle(1.2, '400'),
});
