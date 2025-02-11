import React from "react";
import { View, Modal, ActivityIndicator, StyleSheet } from "react-native";
import Color from "../utils/colors";

export default function Loader({ isVisible }: any) {
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            color={Color.black}
            animating={isVisible}
          />
        </View>
      </View>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",

    backgroundColor: Color.black60,
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Color.white60,
  },
});
