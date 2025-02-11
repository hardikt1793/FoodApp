import colors from "@/utils/colors";
import { fontsStyle } from "@/utils/fontsStyle";
import icons from "@/utils/icons";
import responsive from "@/utils/responsive";
import routes from "@/utils/routes";
import { useNavigation } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, Text, View } from "react-native";
import strings from "@/utils/strings";

export default function SplashLayout() {
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation<any>();

  const startAnimations = () => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.2,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -250,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    const navigationTimeout = setTimeout(() => {
      navigation.navigate(routes.home);
    }, 4000);

    startAnimations();

    return () => {
      clearTimeout(navigationTimeout);
    };
  }, [navigation]);

  return (
    <View style={styles.content}>
      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ translateY }, { scale }],
          },
        ]}
      >
        {icons.LogoIcon}
        <Text style={[styles.title, fontsStyle.font_Bold_25]}>
          {strings.app_name}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  title: {
    marginTop: responsive.hp(2),
    color: colors.black,
  },
});
