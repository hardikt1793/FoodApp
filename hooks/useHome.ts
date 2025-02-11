import { getCurrentLocation } from "@/utils/helper";
import { useEffect, useRef, useState } from "react";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";
import { LATITUDE_DELTA, LONGITUDE_DELTA } from "@/utils/responsive";
import BottomSheet from "@gorhom/bottom-sheet";
import { Restaurant } from "@/model/Restaurant";

export default function useHome() {
  const [loading, setLoading] = useState<boolean>(false);
  const mapViewRef = useRef<MapView>(null);
  const [initialRegion, setInitialRegion] = useState<Region>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  /**
   * Fetch Location
   */
  useEffect(() => {
    fetchInitialLocation();

    // const interval = setInterval(() => {
    //     fetchInitialLocation()
    // }, 3000);
    // return () => clearInterval(interval)
  }, []);

  /**
   * fetch Initial Location
   */
  const fetchInitialLocation = async () => {
    getCurrentLocation()
      .then((resposne) => {
        const location = resposne as Location.LocationObject;
        // console.log("location1: ", location);

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        mapViewRef.current?.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return {
    loading,
    setLoading,
    mapViewRef,
    initialRegion,
    fetchInitialLocation,
    setSelectedId,
    selectedId,
    bottomSheetRef,
    selectedRestaurant,
    setSelectedRestaurant,
  };
}
