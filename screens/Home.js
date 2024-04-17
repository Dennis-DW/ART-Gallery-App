import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { COLORS, ARTData } from "../constants";
import { FocusedStatusBar, HomeHeader, ARTCard } from "../components";

const Home = () => {
  const [artData, setARTData] = useState(ARTData);

  const handleSearch = (value) => {
    if (!value.length) return setARTData(ARTData);

    const filteredData = ARTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setARTData(filteredData);
    } else {
      setARTData(ARTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={artData}
            renderItem={({ item }) => <ARTCard data={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 400, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1.5, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
