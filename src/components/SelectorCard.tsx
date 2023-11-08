import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../config/colors";

interface Props {
  title: string;
  discription: string;
  margin?: number;
  icon?: boolean;
  onPress: () => void;
  cardWidth?: string | number;
  cardHeight?: number;
  posterUrl?: string;
}
const entireScreenWidth = Dimensions.get("window").height;

const SelectorCard: React.FC<Props> = ({
  title,
  discription,
  onPress,
  margin,
  cardWidth,
  icon,
  cardHeight,
  posterUrl,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: cardWidth ?? "43%",
        marginLeft: 14,
        // height: 100,
        // marginTop: margin ? margin : 25,
        alignSelf: "center",
        alignItems: "center",

        // borderRadius: 15,
        // backgroundColor: 'white',
      }}
    >
      <Image
        source={{ uri: posterUrl }}
        // source={require("./alert/check.png")}
        resizeMode={"stretch"}
        style={[
          styles.mainPoster,
          {
            height: cardHeight
              ? entireScreenWidth / 6 + cardHeight
              : entireScreenWidth / 6,
          },
        ]}
      />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          position: "absolute",
          borderRadius: 15,
          bottom: -5,
        }}
      >
        {/* <Text style={[styles.Title, { fontWeight: "700" }]}>{title}</Text> */}
        <Text style={styles.dis}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectorCard;

EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  Title: {
    color: colors.black,
    fontSize: "9.25rem",
    fontFamily: "Nunito-Regular",
  },
  dis: {
    color: "white",
    fontFamily: "Inter-Light",
    fontSize: "6.5rem",
  },
  mainPoster: {
    width: "100%",
    borderRadius: 22,
  },
});
