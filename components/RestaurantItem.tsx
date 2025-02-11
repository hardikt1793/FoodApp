import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import responsive from "@/utils/responsive";
import { Restaurant } from "@/model/Restaurant";
import { RestaurantStatus } from "@/utils/enum";
import colors from "@/utils/colors";

const RestaurantItem = ({
  restaurant,
  index,
  onPress,
}: {
  restaurant: Restaurant;
  index: number;
  onPress: (index: number) => void;
}) => {
  return (
    <Pressable onPress={() => onPress(index)} style={styles.itemContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={styles.row}>
          <AntDesign name="star" color={colors.lightYellow} size={responsive.hp(1.5)} />
          <Text style={styles.rating}>
            {`${restaurant.rating} (${restaurant.reviews}) · ${restaurant.cuisine}`}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: responsive.hp(1.5),
              color: restaurant.status === RestaurantStatus.CLOSED ? colors.red : colors.green,
            }}
          >
            {restaurant.status}
          </Text>
          <Text style={styles.distance}>{restaurant.distance}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: responsive.hp(8),
    height: responsive.hp(8),
    borderRadius: responsive.hp(2),
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: responsive.hp(1.5),
    gap: responsive.hp(0.75),
  },
  name: {
    fontSize: responsive.hp(2),
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsive.hp(0.75),
  },
  rating: {
    fontSize: responsive.hp(1.5),
    color: colors.grey,
  },
  distance: {
    fontSize: responsive.hp(1.5),
    color: colors.grey,
  },
});

export default RestaurantItem;
