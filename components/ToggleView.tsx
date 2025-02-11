import { Animated, Pressable, StyleSheet, Text } from "react-native";
import React, { useRef } from "react";
import { Category } from "@/model/Category";
import colors from "@/utils/colors";
import responsive from "@/utils/responsive";
import { fontsStyle } from "@/utils/fontsStyle";
import Icon from "@expo/vector-icons/Ionicons";

interface ToggleViewProps {
  onPress: (index: number) => void;
  selectedId: number;
  item: Category;
}

const ToggleView = ({ onPress, selectedId, item }: ToggleViewProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
    onPress(item.id);
  };

  return (
    <Animated.View key={item.id} style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        style={[
          styles.container,
          selectedId === item.id && styles.selectedContainer,
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Icon
          name={item.icon}
          size={responsive.hp(1.8)}
          color={selectedId === item.id ? colors.white : colors.black}
        />
        <Text
          style={[styles.title, selectedId === item.id && styles.selectedText]}
        >
          {" "}
          {item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default ToggleView;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: colors.clear,
  },
  mainContainer: {
    padding: responsive.hp(1),
    paddingHorizontal: responsive.wp(4),
  },
  container: {
    padding: responsive.hp(1.2),
    paddingHorizontal: responsive.wp(4),
    backgroundColor: colors.clearBlur,
    marginRight: responsive.hp(1),
    borderRadius: responsive.hp(5),
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.black,
    ...fontsStyle.font_Regular_16,
    marginLeft: responsive.wp(1),
  },
  selectedText: {
    color: colors.white,
    ...fontsStyle.font_Medium_16,
  },
  selectedContainer: {
    backgroundColor: colors.black,
  },
});
