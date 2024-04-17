import React from "react";
import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInf";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image source={bid.image} style={{ width: 45, height: 45 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
          flex: 1,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.body,
              color: COLORS.secondary,
            }}
          >
            Bid placed by {bid.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
            }}
          >
            {bid.date}
          </Text>
        </View>
        <EthPrice price={bid.price} priceSize={SIZES.large} />
      </View>
    </View>
  );
};

export default DetailsBid;
