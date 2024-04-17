import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants";
import {
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
  CircleButton,
  RectButton,
  SubInfo,
} from "../components";
import React from "react";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 400,
      }}
    >
      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={10}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={10}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{
          width: "100%",
          bottom: 0,
          position: "absolute",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "COLORS.white, 0.5",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={150} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.body,
                    color: COLORS.secondary,
                    marginVertical: SIZES.base,
                  }}
                >
                Present Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
