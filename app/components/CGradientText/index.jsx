import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const CGradientText = ({
  text,
  style,
  styleMasView,
  gradientColors,
  gradientStart,
  gradientEnd,
}) => {
  return (
    <MaskedView
      style={[styles.maskedView, styleMasView]}
      maskElement={<Text style={[styles.text, style]}>{text}</Text>}
    >
      <LinearGradient
        colors={gradientColors}
        start={gradientStart}
        end={gradientEnd}
        style={styles.absoluteFill}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskedView: {
    height: 20,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: 600,
  },
  absoluteFill: {
    flex: 1,
    width: '100%'
  }
});

export default CGradientText;
