import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "./colors";
import responsive from "./responsive";

export default {
  LogoIcon: (
    <MaterialIcons
      name="fastfood"
      size={responsive.hp(10)}
      color={colors.black}
      accessibilityLabel="Food"
    />
  ),
  SearchIcon: (
    <Octicons
      name="search"
      size={responsive.hp(2.5)}
      color={colors.black}
      accessibilityLabel="Search"
    />
  ),
  PlusIcon: ({ size, color }: { size?: number; color?: string }) => (
    <AntDesign
      name="plus"
      size={size || responsive.hp(2.5)}
      color={color || colors.black}
    />
  ),
  Navigation: ({ size, color }: { size?: number; color?: string }) => (
    <Ionicons
      name="navigate"
      size={size || responsive.hp(2.5)}
      color={color || colors.black}
    />
  ),
};
