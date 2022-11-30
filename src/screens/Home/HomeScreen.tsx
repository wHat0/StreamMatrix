import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { AuthContext } from "../../Context/AuthContext";
import CategoryRow from "../../components/CategoryRow";
import SelectorCard from "../../components/SelectorCard";
import colors from "../../config/colors";
import EStyleSheet from "react-native-extended-stylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackScreenParams } from "../../routes/types";
// import {totalQuestions} from '../../model/users';

type Props = NativeStackScreenProps<HomeStackScreenParams, "HomeScreen">;

const HomeScreen = ({ navigation }: Props) => {
  const [Phase, setPhase] = useState("Movies");

  const AuthCtx = useContext(AuthContext);
  const name = AuthCtx.email;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingBottom: "20%" }}>
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
              height: "60%",
              width: "20%",
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
        <View
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
            icon={Phase === "Movies" ? "lock" : null}
            onPress={() => setPhase("Cartoon")}
            phase={Phase === "Cartoon" ? true : false}
          />
        </View>
        {/* <View style={{ backgroundColor: "white", height: "30%", width: "50%" }}>
          <Text>hkhuiigi</Text>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

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
