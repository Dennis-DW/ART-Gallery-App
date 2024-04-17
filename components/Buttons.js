import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, Press, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={Press}
    >
      <Text
      style={{
        fontSize: fontSize,
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: "center",
      }}
      >Place Bid</Text>
    </TouchableOpacity>
  );
};
