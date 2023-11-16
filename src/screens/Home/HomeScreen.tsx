import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import SelectorCard from "../../components/SelectorCard";
import colors from "../../config/colors";
import VideoPlayer from "react-native-video-player";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreenParams, featuredVideo } from "../../routes/types";
import EStyleSheet from "react-native-extended-stylesheet";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import { getHomeMovies } from "../../redux/Actions/Movies";

type Props = NativeStackScreenProps<HomeStackScreenParams, "HomeScreen">;
const entireScreenHeight = Dimensions.get("window").height;
const entireScreenwidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }: Props) => {
  const [Phase, setPhase] = useState("Movies");
  const user = useSelector((state: any) => state.user_data.user);
  console.log("user", user);
  const AuthCtx = useContext(AuthContext);
  const name = AuthCtx.email;

  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.videos.loading);
  const homeVideos = useSelector((state: any) => state.videos.video);
  const [featuredVideos, setFeaturedVideos] = useState<featuredVideo[] | []>(
    []
  );
  const [topViewed, setTopViwed] = useState<featuredVideo[] | []>([]);
  const [pakistaniContent, setPakistaniContent] = useState<
    featuredVideo[] | []
  >([]);
  const [internationalShows, setInternationalShows] = useState<
    featuredVideo[] | []
  >([]);
  const [kids, setKids] = useState<featuredVideo[] | []>([]);
  const [isPaid, setIsPaid] = useState(false);

  // const features =
  useEffect(() => {
    dispatch(getHomeMovies() as any);
  }, []);

  useEffect(() => {
    if (homeVideos) {
      // console.log("====================================");
      // console.log("HOMEVIDEO>>>>", featuredVideos);
      // console.log("====================================");
      setFeaturedVideos(homeVideos?.featured);
      setTopViwed(homeVideos?.top_viewed);
      setPakistaniContent(homeVideos?.pakistani_shows);
      setInternationalShows(homeVideos?.international_shows);
      setKids(homeVideos?.kids);
    }
  }, [homeVideos]);

  useEffect(() => {
    async () => {
      const status = await AsyncStorage.getItem("status");
      if (status === "paid") {
        setIsPaid(true);
      } else {
        setIsPaid(false);
      }
    };
  }, []);

  const videosLibraray = [
    {
      id: 1,
      title: "Top Viewed",
      data: topViewed,
    },
    {
      id: 2,
      title: "Pakistani Content",
      data: pakistaniContent,
    },
    {
      id: 3,
      title: "International Shows",
      data: internationalShows,
    },
    {
      id: 4,
      title: "Kids",
      data: kids,
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingBottom: "20%", height: "100%" }}>
        <View
          style={{
            padding: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.Heading}>Hello, {name}!</Text>
            <Text style={styles.Title}>Let’s get started.</Text>
          </View>

          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
            }}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              source={require("../../assets/user.jpg")}
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "grey",
                borderRadius: 252,
                alignItems: "center",
              }}
            />
          </TouchableOpacity>
        </View>
        <VideoPlayer
          video={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          autoplay={false}
          controls={true}
          muted={false}
          style={{
            height: 250,
            width: entireScreenHeight / 2,
          }}
          videoWidth={300}
          videoHeight={150}
          thumbnail={{
            uri: "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8=",
          }}
        />
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
            colors={Phase === "Movies" ? colors.primary : "white"}
            onPress={() => setPhase("Movies")}
            phase={Phase === "Movies" ? true : false}
          />
          <CategoryRow
            name={"Cartoon"}
            colors={Phase === "Cartoon" ? colors.primary : "white"}
            onPress={() => setPhase("Cartoon")}
            phase={Phase === "Cartoon" ? true : false}
          />
        </View> */}
        <Text style={[styles.Heading, { margin: 10 }]}>Featured Videos</Text>

        {featuredVideos && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={featuredVideos}
            contentContainerStyle={{ paddingEnd: 30 }}
            horizontal={true} // Set horizontal to true
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={20}
            // bounces
            renderItem={({ item }) => {
              return (
                <SelectorCard
                  posterUrl={
                    item.attributes.thumbnail_url ??
                    "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8="
                  }
                  cardWidth={entireScreenwidth / 2}
                  title={item.attributes.title}
                  discription={item.attributes.category}
                  onPress={() =>
                    navigation.navigate("DetailScreen", { proDetails: item })
                  }
                />
              );
            }}
          />
        )}
        {videosLibraray.map((item) => (
          <>
            <Text style={[styles.Heading, { margin: 10 }]}>{item.title}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={item?.data}
              contentContainerStyle={{ paddingEnd: 30 }}
              horizontal={true} // Set horizontal to true
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              maxToRenderPerBatch={20}
              // bounces
              renderItem={({ item }) => {
                return (
                  <SelectorCard
                    posterUrl={
                      item.attributes.thumbnail_url ??
                      "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8="
                    }
                    cardHeight={70}
                    cardWidth={entireScreenwidth / 2.5}
                    title={item.attributes.title}
                    discription={item.attributes.category}
                    onPress={() =>
                      navigation.navigate("DetailScreen", { proDetails: item })
                    }
                  />
                );
              }}
            />
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

EStyleSheet.build({ $rem: entireScreenHeight / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: "10%",
    // paddingBottom: '40%',
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Heading: {
    color: colors.text,
    paddingBottom: 5,
    fontWeight: "bold",
    fontSize: "12rem",
    fontFamily: "Nunito-Regular",
  },
  Title: {
    color: colors.text,
    fontSize: "8rem",
    fontWeight: "300",
    fontFamily: "Nunito-Regular",
  },
});
