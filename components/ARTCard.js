import { View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

import { CircleButton, RectButton } from "./Buttons";
import { SubInfo, EthPrice, ARTTitle } from "./SubInf";
const ARTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 300 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />

      <View style={{width: "100%", padding: SIZES.font}}>
        {/* <EthPrice /> */}
        <ARTTitle
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.large}
        subTitleSize={SIZES.small}
         />

         <View style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
         }} >
         <EthPrice price={data.price} />
            <RectButton
            // label="View"
            minWidth={100}
            fontSize={SIZES.font}

            Press={() => navigation.navigate("Details", { data })}
            />  


         </View>
      </View>
    </View>
  );
};

export default ARTCard;
