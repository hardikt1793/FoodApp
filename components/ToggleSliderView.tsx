import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import responsive from "@/utils/responsive";
import colors from "@/utils/colors";
import { Category } from "@/model/Category";
import ToggleView from "./ToggleView";

interface ToggleSliderViewProps {
  onPress: (index: number) => void;
  selectedId: number;
  categoryList: Category[];
}

const ToggleSliderView = ({
  onPress,
  selectedId,
  categoryList,
}: ToggleSliderViewProps) => {
  return (
    <ScrollView
      key={"slide"}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.mainContainer}
      style={styles.scrollContainer}
    >
      {categoryList.map((item: Category, index) => {
        return (
          <ToggleView
            key={index}
            item={item}
            onPress={onPress}
            selectedId={selectedId}
          />
        );
      })}
    </ScrollView>
  );
};

export default ToggleSliderView;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.clear,
  },
  mainContainer: {
    paddingTop: responsive.hp(1),
    paddingHorizontal: responsive.wp(4),
  },
});
