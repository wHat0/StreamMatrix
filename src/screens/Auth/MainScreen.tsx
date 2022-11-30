import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomButton from "../../components/CustomButton";
import colors from "../../config/colors";
import { RootStackNavigatorParamList } from "../../routes/types";

type Props = NativeStackScreenProps<RootStackNavigatorParamList, "MainScreen">;

function MainScreen({ navigation }: Props) {
  const Sentence = [
    "Start your journey with fun",
    "See your passion, get motivated",
    "Take a break and enjoy",
  ];
  const Paragraph = [
    "Explore various videos based on your passion",
    "Explore various videos based on your interest",
    "Explore various videos based on your feel",
  ];
  const [next, setNext] = useState(0);

  const ImageId = [
    require("../../assets/S1.png"),
    require("../../assets/S2.png"),
    require("../../assets/S3.png"),
  ];

  useLayoutEffect(() => {
    if (next === 2) {
      navigation.setOptions({
        headerRight: false,
      });
    }
  }, [next === 2]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={ImageId[next]}
          style={{
            height: "55%",
            width: "80%",
          }}
          resizeMode={"contain"}
        />
        <View style={{ width: "80%", height: "20%", marginVertical: 15 }}>
          <Text style={styles.MainText} adjustsFontSizeToFit={true}>
            {Sentence[next]}
          </Text>
          <Text style={styles.SecondText} adjustsFontSizeToFit={true}>
            {Paragraph[next]}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute", //Here is the trick
          bottom: "10%", //Here is the trick
        }}
      >
        <View style={{ flexDirection: "row", padding: 20, marginBottom: 10 }}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: next === 0 ? colors.secondary : "white",
              marginHorizontal: 10,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: next === 1 ? colors.secondary : "white",
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: next === 2 ? colors.secondary : "white",
              marginHorizontal: 10,
            }}
          />
        </View>
        <CustomButton
          width={"90%"}
          height={"80%"}
          title={next === 2 ? "Let's go" : "Next"}
          onPress={() => {
            setNext((prev) => prev + 1),
              next === 2 && (setNext(0), navigation.navigate("SignUpScreen"));
          }}
        />
      </View>
    </View>
  );
}
const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default MainScreen;

const styles = EStyleSheet.create({
  MainText: {
    fontWeight: "600",
    fontSize: "18rem",
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito-Regular",
  },
  SecondText: {
    marginTop: 20,
    color: "white",
    textAlign: "center",
    fontSize: "8rem",
    fontFamily: "Inter-Light",
  },
});
