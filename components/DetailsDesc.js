import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice, ARTTitle } from "./SubInf";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ARTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.small}
        />
        <EthPrice price={data.price} priceSize={SIZES.large} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.body,
            color: COLORS.secondary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {/* {data.description} */}
            {text}
            {!isReadMore && "..."}
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
              }}
              onPress={() => {
                if (!isReadMore) {
                  setText(data.description);
                  setIsReadMore(!isReadMore);
                } else {
                  setText(data.description.slice(0, 100));
                  setIsReadMore(!isReadMore);
                }
              }}
            >
              {isReadMore ? "Read Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
