import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "@/utils/colors";
import Loader from "@/components/Loader";
import useHome from "@/hooks/useHome";
import MapView, { Marker } from "react-native-maps";
import HeaderView from "@/components/HeaderView";
import BottomSlider from "@/components/BottomSlider";
import Icons from "@/utils/icons";
import responsive from "@/utils/responsive";
import { Restaurant } from "@/model/Restaurant";

export default function HomeLayout() {
  const {
    loading,
    initialRegion,
    mapViewRef,
    bottomSheetRef,
    selectedId,
    setSelectedId,
    selectedRestaurant,
    setSelectedRestaurant,
    fetchInitialLocation,
  } = useHome();

  const handlePressRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    mapViewRef.current?.animateToRegion({
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  return (
    <View style={styles.container}>
      <Loader isVisible={loading} />

      {initialRegion && (
        <MapView
          ref={mapViewRef}
          style={styles.mapView}
          initialRegion={initialRegion}
          showsUserLocation
          showsScale
          zoomControlEnabled
          zoomTapEnabled
          showsMyLocationButton
          showsCompass
          onPress={() => {}}
        >
          {selectedRestaurant && (
            <CustomMarker restaurant={selectedRestaurant} />
          )}
        </MapView>
      )}
      <HeaderView selectedId={selectedId} onPress={setSelectedId} />
      <FloatingButtons fetchLocation={() => fetchInitialLocation()} />
      <BottomSlider onPressRestaurant={handlePressRestaurant} />
    </View>
  );
}

const CustomMarker = ({ restaurant }: { restaurant: Restaurant }) => (
  <Marker
    coordinate={{
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
    }}
    title={restaurant.name}
  >
    <View style={styles.markerContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.markerImage} />
      <Text style={styles.markerText}>{restaurant.name}</Text>
    </View>
  </Marker>
);

const FloatingButtons = ({ fetchLocation }: { fetchLocation: () => void }) => (
  <View style={styles.floatingButtons}>
    <Pressable style={styles.button} onPress={() => {}}>
      <Icons.PlusIcon color={colors.white} />
    </Pressable>
    <Pressable
      style={[styles.button, styles.lightButton]}
      onPress={() => {
        fetchLocation();
      }}
    >
      <Icons.Navigation color={colors.black} />
    </Pressable>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapView: {
    flex: 1,
  },
  floatingButtons: {
    position: "absolute",
    right: 0,
    top: "40%",
    gap: responsive.hp(1),
  },
  button: {
    backgroundColor: colors.black,
    padding: responsive.hp(1),
    borderRadius: responsive.hp(3),
    width: responsive.hp(4.5),
    height: responsive.hp(4.5),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: responsive.wp(2),
    shadowColor: colors.darkGrey,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: responsive.wp(3),
  },
  lightButton: {
    backgroundColor: colors.lightGrey,
  },
  markerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: responsive.hp(0.5),
    borderRadius: responsive.hp(2),
  },
  markerImage: {
    height: responsive.hp(4),
    width: responsive.hp(4),
    borderRadius: responsive.hp(20),
    borderWidth: responsive.hp(0.2),
    borderColor: colors.black,
  },
  markerText: {
    color: colors.black,
    maxWidth: responsive.hp(15),
    marginLeft: responsive.hp(1),
  },
});
