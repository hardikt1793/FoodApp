import { StyleSheet, Image, Pressable, Platform, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import RestaurantItem from "./RestaurantItem";
import ToggleView from "./ToggleView";
import responsive from "@/utils/responsive";
import { Category } from "@/model/Category";
import filterCategories from "@/data/filter-categories.json";
import images from "@/utils/images";
import icons from "@/utils/icons";
import colors from "@/utils/colors";
import { Restaurant } from "@/model/Restaurant";
import restaurants from "../data/restaurants.json";

interface BottomSliderProps {
  onPressRestaurant: (item: Restaurant) => void;
}

const BottomSlider = ({ onPressRestaurant }: BottomSliderProps) => {
  const [scrollY, setScrollY] = useState(0);
  const flatListRef = useRef<BottomSheetFlatListMethods | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [arryList, setArryList] = useState<Restaurant[]>();

  useEffect(() => {
    const data = restaurants as Restaurant[];
    setArryList(data);
  }, [restaurants]);

  const handlePressRestaurant = useCallback(
    (restaurant: Restaurant) => {
      bottomSheetRef.current?.snapToIndex(1);
      onPressRestaurant(restaurant);
    },
    [onPressRestaurant]
  );

  const RestaurantList = useCallback(
    () => (
      <BottomSheetFlatList
        ref={flatListRef}
        data={arryList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => String(item.id || Math.random())}
        renderItem={({ item, index }) => (
          <RestaurantItem
            index={index}
            onPress={() => handlePressRestaurant(item)}
            restaurant={item}
          />
        )}
      />
    ),
    [arryList]
  );

  const handleScroll = useCallback((event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    setScrollY(contentOffsetY);

    if (contentOffsetY > responsive.hp(6) && bottomSheetRef.current) {
      bottomSheetRef.current.snapToIndex(0);
    }
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.sheetContainer}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enableContentPanningGesture={false}
        snapPoints={[Platform.OS === "ios" ? "15%" : "25%", "50%", "100%"]}
        style={styles.bottomSheet}
      >
        <BottomSheetScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContainer}
          onScroll={handleScroll}
        >
          <Pressable onPress={() => {}}>
            <Image source={images.avatar} style={styles.profileImage} />
          </Pressable>
          <Pressable style={styles.searchContainer} onPress={() => {}}>
            {icons.SearchIcon}
          </Pressable>
          {filterCategories.map((item: Category) => (
            <ToggleView
              key={item.id}
              item={item}
              onPress={() => setSelectedId(item.id)}
              selectedId={selectedId}
            />
          ))}
        </BottomSheetScrollView>
        <RestaurantList />
      </BottomSheet>
    </View>
  );
};

export default BottomSlider;

const styles = StyleSheet.create({
  sheetContainer: {
    position: "absolute",
    top: responsive.hp(11),
    bottom: 0,
    left: 0,
    right: 0,
  },
  listContainer: {
    gap: responsive.hp(2),
    padding: responsive.hp(1.5),
  },
  bottomSheet: {
    flex: 1,
    marginTop: responsive.hp(1.5),
  },
  searchContainer: {
    backgroundColor: colors.clearBlur,
    padding: responsive.hp(1),
    borderRadius: responsive.hp(3),
    width: responsive.hp(4.5),
    height: responsive.hp(4.5),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: responsive.wp(2),
  },
  profileImage: {
    width: responsive.hp(4.5),
    height: responsive.hp(4.5),
  },
  filterScroll: {
    paddingHorizontal: responsive.wp(4),
    marginVertical: responsive.hp(1),
    height: responsive.hp(5),
  },
  filterContainer: {
    gap: responsive.wp(1),
    alignItems: "center",
  },
});
