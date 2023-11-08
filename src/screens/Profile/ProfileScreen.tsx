import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { AuthContext } from "../../Context/AuthContext";

import ProgressCard from "../../components/Profile/ProgressCard";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../config/colors";
import { ScrollView } from "react-native-virtualized-view";
import useOrientation from "../../config/useOrientation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import EStyleSheet from "react-native-extended-stylesheet";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackScreenParams } from "../../routes/types";

type Props = NativeStackScreenProps<ProfileStackScreenParams, "ProfileS">;

const ProfileScreen = ({ navigation }: Props) => {
  const [TimeSpent, setTimeSpent] = useState(0);
  const data = "Time Spent";
  const AuthCtx = useContext(AuthContext);
  const name = AuthCtx.email;

  const fontScale = useOrientation().height;
  const focus = useIsFocused();

  useEffect(() => {
    async function Check001() {
      const data = await AsyncStorage.getItem(`${name}`);
      setTimeSpent(Number(data));
    }
    Check001();
  }, [focus]);

  return (
    // <ScrollView
    //   contentContainerStyle={{ alignItems: "center" }}
    //   showsVerticalScrollIndicator={false}
    // >
    <View style={styles.container}>
      <Text style={styles.Title}>Profile</Text>
      <View style={[styles.ImageView, { width: "85%" }]}>
        {/* <View style={{width: '80%'}}> */}
        <Image
          source={require("../../assets/user.jpg")}
          style={{
            height: "100%",
            width: "15%",
            backgroundColor: "grey",
            borderRadius: fontScale,
            alignItems: "center",
          }}
        />

        <Text
          style={{
            color: colors.primary,
            fontSize: fontScale * 0.0212,
            fontWeight: "700",
            marginHorizontal: 10,
            alignSelf: "center",
          }}
        >
          {name}
          {"\n"}
          <Text
            style={{
              color: colors.primary,
              fontSize: fontScale * 0.0135,
              fontWeight: "normal",
              marginHorizontal: 10,
              alignSelf: "center",
            }}
          >
            @Terms145
          </Text>
        </Text>
        {/* </View> */}
        <View
          style={{
            // flexDirection: 'row-reverse',
            // alignSelf: 'flex-start',
            height: "100%",
            alignItems: "center",
            alignSelf: "center",
            position: "absolute",
            right: "5%",
            bottom: 5,
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EditScreen")}
            style={{
              height: "50%",
              borderWidth: 0.5,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              borderColor: colors.primary,
              overflow: "hidden",
            }}
          >
            <FontAwesome name="pencil" color={"black"} size={17} />

            <Text
              style={{
                color: colors.primary,
                fontSize: fontScale * 0.0159,
                fontWeight: "normal",
                paddingHorizontal: 5,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontWeight: "300",
          color: colors.text,
          fontSize: fontScale * 0.0245,
          alignSelf: "flex-start",
          marginHorizontal: "3.5%",
          marginBottom: "5%",
        }}
      >
        Statistics{"\n"}
        <Text style={{ color: "lightgrey", fontSize: 12 }}>
          The below percentage is accourding to 12 hours.
        </Text>
      </Text>
      <View
        style={{
          width: "50%",
        }}
      >
        <ProgressCard doneTask={3} title={data} Time={TimeSpent.toFixed(2)} />
      </View>
    </View>
    // </ScrollView>
  );
};

export default ProfileScreen;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    alignItems: "center",
    paddingTop: "20%",
    paddingBottom: "10%",
  },
  Title: {
    fontWeight: "500",
    color: colors.text,
    fontSize: "29rem",
    fontFamily: "Nunito-Regular",
    marginBottom: "10%",
  },
  ImageView: {
    padding: 15,
    // paddingTop: 50,
    flexDirection: "row",
    backgroundColor: "white",
    width: "95%",
    height: "12%",
    borderRadius: 10,
    marginBottom: "5%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.61,
    elevation: 8,
  },
});
