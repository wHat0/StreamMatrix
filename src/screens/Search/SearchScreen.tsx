import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../config/colors";
import CategoryRow from "../../components/CategoryRow";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getHomeMovies } from "../../redux/Actions/Movies";
import { featuredVideo } from "../../routes/types";
import SelectorCard from "../../components/SelectorCard";

const entireScreenHeight = Dimensions.get("window").height;
const entireScreenwidth = Dimensions.get("window").width;

export default function SearchScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.videos.loading);
  const homeVideos = useSelector((state: any) => state.videos.video);
  const [serachText, setSearch] = useState("");

  const [internationalShows, setInternationalShows] = useState<
    featuredVideo[] | []
  >([]);
  useEffect(() => {
    dispatch(getHomeMovies() as any);
  }, []);

  useEffect(() => {
    if (homeVideos) {
      // console.log("====================================");
      // console.log("HOMEVIDEO>>>>", featuredVideos);
      // console.log("====================================");

      setInternationalShows([
        ...homeVideos?.international_shows,
        ...homeVideos?.featured,
        ...homeVideos?.top_viewed,
        ...homeVideos?.pakistani_shows,
        ...homeVideos?.kids,
      ]);
    }
  }, [homeVideos]);

  if (loading) {
    <>
      <ActivityIndicator color={"white"} size={80} />
    </>;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <TouchableOpacity
        // onPress={() => {
        //   console.log("CLIKED");
        //   // navigation.navigate("PostScreen");
        // }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          alignSelf: "center",
          zIndex: 999999,
          backgroundColor: colors.secondary,
          padding: 12,
          marginVertical: 20,
          borderRadius: 40,
        }}
      >
        <TextInput
          placeholder={"Search"}
          placeholderTextColor={colors.white}
          keyboardType={"default"}
          onChangeText={setSearch}
          value={serachText}
          // editable={false}
          style={{
            width: "100%",
            backgroundColor: colors.secondary,
            fontSize: 14,
            color: "white",
            textTransform: "lowercase",
          }}
        />
        {/* <Image
          source={imagePath.icons.header.image}
          resizeMode="contain"
          style={{ width: fontSize.headerIcon, height: fontSize.headerIcon }}
        /> */}
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
        }}
      >
        {internationalShows && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={
              !!serachText.length
                ? internationalShows.filter((item) =>
                    item.attributes.title.includes(serachText)
                  )
                : internationalShows
            }
            contentContainerStyle={{ paddingEnd: 30 }}
            // horizontal={true} // Set horizontal to true
            scrollEnabled
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={120}
            // bounces
            renderItem={({ item }) => {
              return (
                <SelectorCard
                  marginBottom={14}
                  posterUrl={
                    item.attributes.thumbnail_url ??
                    "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8="
                  }
                  cardWidth={entireScreenwidth / 2.3}
                  title={item.attributes.title}
                  discription={item.attributes.category}
                  onPress={() =>
                    navigation.navigate("DetailScreen", { proDetails: item })
                  }
                />
              );
            }}
            ListEmptyComponent={() => (
              // This will be rendered if your data array is empty
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#FFFFFF",
                    fontSize: 18,
                    marginTop: 60,
                    marginBottom: 20,
                  }}
                >
                  No data available against your Search.
                </Text>
                <Icon name={"search"} color={"#FFFFFFAF"} size={106} />
                {/* // You can customize this message */}
              </View>
            )}
          />
        )}
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          marginVertical: "4%",
          alignItems: "center",
          width: "96%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <CategoryRow
          name={"Movies"}
          colors={colors.primary}
          onPress={() => console.log("Movies")}
          phase={true}
        />
        <CategoryRow
          name={"Cartoon"}
          colors={"lightgray"}
          onPress={() => console.log("Cartoon")}
          phase={false}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
