import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Modal,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import colors from "../../config/colors";
import { AuthContext } from "../../Context/AuthContext";
import { useIsFocused } from "@react-navigation/native";
import { set } from "react-native-reanimated";
import VideoPlayer from "react-native-video-player";
const entireScreenHeight = Dimensions.get("window").height;
const entireScreenWidth = Dimensions.get("window").width;

const DetailsScreen = ({ navigation, route }: any) => {
  // {"attributes": {"category": "cartoon", "file_url": "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f4df3aad88a30da9afc96ce7bc309c251542997/2.mp4", "release_date": null, "thumbnail_url": "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e37cd57aa128ae28b35299b8e7371ce7dccf1df3/2-2.png", "title": "cartoon romance 8", "video_type": "free", "views": 0, "yonra": "romance"}, "id": "319", "type": "videos"}
  const product = route.params.proDetails.attributes;
  // const isfocused = useIsFocused();

  const [modalVisible, setModalVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  console.log("Details", product);

  const ContxAuth = useContext(AuthContext);
  // console.log("====================================");
  // console.log("product.thumbnail_url", product.thumbnail_url);
  // console.log("====================================");
  // useEffect(() => {

  // }, [isfocused]);

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#8848A4" }}>
      <View style={{ height: 400, backgroundColor: "#8848A4C0" }}>
        <VideoPlayer
          video={{
            uri:
              product.file_url ??
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            //  "http://10.0.2.2:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjhDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a09b9310525ac0bc5ca5bc042d4ff06ddcbae77/2.mp4",
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
            uri:
              product.thumbnail_url ??
              "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8=",
          }}
          fullscreenAutorotate={true}
          resizeMode={"contain"}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            top: -90,
          }}
        >
          <Image
            resizeMode="cover"
            source={{
              uri:
                product.thumbnail_url ??
                "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8=",
              // "http://10.0.2.2:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e37cd57aa128ae28b35299b8e7371ce7dccf1df3/2-2.png",
            }}
            style={{
              width: 140,
              // borderRadius: 12,
              height: entireScreenHeight / 4,
              // top: -70,
            }}
          />
          <View style={style.detailsContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
              >
                {product.title}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                // justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <Icon1 name="money" color={colors.primary} size={20} />
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: 5,
                  fontWeight: "bold",
                }}
              >
                {product.video_type}
              </Text>
            </View>

            {/* Render location and icon */}
            <View style={{ marginTop: 5, flexDirection: "row" }}>
              <Icon name="format-color-fill" color={colors.primary} size={20} />
              <Text style={{ fontSize: 14, color: "gray", marginLeft: 5 }}>
                4K
              </Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: "row" }}>
              <Icon name="diamond-stone" color={colors.primary} size={20} />
              <Text style={{ fontSize: 14, color: "gray", marginLeft: 5 }}>
                {product.yonra}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={style.comment}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>

      {/* Render footer */}

      <View style={style.footer}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: "bold",
            }}
          >
            Play Now
          </Text>
          <Icon name="play" color={colors.white} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.btn, { marginVertical: 10 }]}
          // onPress={() => {
          //   CartActions();
          // }}
        >
          <Text
            style={{
              color: colors.white,
              fontWeight: "bold",
            }}
          >
            Download
          </Text>
          <Icon name="download" color={colors.white} size={30} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", zIndex: 9999, top: 10, left: 10 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon name="close" color={colors.white} size={30} />
          </TouchableOpacity>

          <VideoPlayer
            video={{
              uri: product.file_url,
              //  "http://10.0.2.2:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjhDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a09b9310525ac0bc5ca5bc042d4ff06ddcbae77/2.mp4",
            }}
            autoplay={false}
            controls={true}
            muted={false}
            style={{
              height: entireScreenHeight,
              width: entireScreenWidth,
            }}
            videoWidth={entireScreenWidth}
            videoHeight={entireScreenHeight}
            thumbnail={{
              uri: product.thumbnail_url, // "https://media.istockphoto.com/id/174694400/photo/opium-field.jpg?s=1024x1024&w=is&k=20&c=KswwmqtFCh2kC8Mws1RV-5JpneIsjEKTOx5hOC6ExP8=",
            }}
            fullscreenAutorotate={true}
            resizeMode={"stretch"}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 170,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    // bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
  comment: {
    marginTop: 10,
    fontSize: 14.5,
    color: "white",
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 130,
    // backgroundColor: ,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    // flexDirection: "row",
    // alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  btn: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "row",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    // height: ,
    width: "80%",
    marginTop: 18,
    borderWidth: 0.5,
    borderRadius: 8,
    color: "black",
  },
  Button: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default DetailsScreen;
