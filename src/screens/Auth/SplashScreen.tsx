import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Animatable from "react-native-animatable";
import colors from "../../config/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "../../routes/types";

type Props = NativeStackScreenProps<
  RootStackNavigatorParamList,
  "SplashScreen"
>;

const SplashScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
          <View style={styles.signIn}>
            <Text style={styles.textSign}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.3;

EStyleSheet.build({ $rem: height / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    marginLeft: "30%",
    width: height_logo * 1.5,
    height: height_logo * 0.5,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    width: "100%",
    height: "10%",
    marginTop: 30,
    marginBottom: 40,
  },
  signIn: {
    backgroundColor: colors.secondary,
    width: "80%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.61,
    elevation: 8,
  },
  textSign: {
    color: "white",
    fontSize: "8.5rem",
    fontWeight: "600",
    fontFamily: "Inter-Medium",
  },
});
