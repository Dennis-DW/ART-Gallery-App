import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 280,
            height: 100,
          }}
        />

        <View style={{ width: 55, height: 55 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.gray,
            fontFamily: FONTS.regular,
          }}
        >
          Hello, Dennys 😌
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.white,
            fontFamily: FONTS.bold,
            marginTop: SIZES.base / 2,
          }}
        >
          Discover Latest Masterpiece ARTs
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.base,
          }}
        >
          <TextInput
            placeholder="Search ARTs"
            placeholderTextColor={COLORS.gray}
            style={{
              flex: 1,
            }}
            onChangeText={onSearch}
          />
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
