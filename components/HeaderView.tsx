import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import responsive from "@/utils/responsive";
import ToggleSliderView from "./ToggleSliderView";
import categories from "../data/categories.json";

interface HeaderViewProps {
  onPress: (index: number) => void;
  selectedId: number;
}

const HeaderView = ({ onPress, selectedId }: HeaderViewProps) => {
  return (
    <BlurView
      intensity={Platform.OS == "ios" ? 50 : 100}
      style={styles.blurContainer}
    >
      <View style={{ marginTop: responsive.hp(6) }}>
        <ToggleSliderView
          onPress={(index) => {
            onPress(index);
          }}
          selectedId={selectedId}
          categoryList={categories}
        />
      </View>
    </BlurView>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  blurContainer: {
    width: "100%",
    position: "absolute",
  },
});
