import { View, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import responsive from "@/utils/responsive";

interface Button {
  children: ReactNode;
}

const Button = ({ children }: Button) => {
  return (
    <Pressable
      style={{
        padding: responsive.hp(1),
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {children}
    </Pressable>
  );
};

export default Button;
