import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../config/colors";

interface Props {
  title: string;
  ImageSrc: any;
  height: number | string | undefined;
  onPress: () => void;
}

const OptionCard: React.FC<Props> = ({
  title,
  onPress,
  ImageSrc,
  height,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          source={ImageSrc}
          style={{
            borderRadius: 35,
            width: height ? height : 70,
            height: height ? height : 70,
          }}
          resizeMode="contain"
        />
      </View>
      {/* <FontAwesome
        name={Icon}
        color={colors.primary}
        size={20}
        style={{
          padding: 20,
          backgroundColor: 'lightgrey',
          borderRadius: 50,
          marginHorizontal: 15,
        }}
      /> */}
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OptionCard;
const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    height: "15%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 18,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 6,
  },
  ImageContainer: {
    backgroundColor: "lightgrey",
    borderRadius: entireScreenWidth / 2,
    width: "18%",
    height: "80%",
    justifyContent: "center",
    marginHorizontal: 15,
    alignItems: "center",
  },
  Title: {
    color: colors.primary,
    fontWeight: "600",
    fontFamily: "Inter-Medium",
    fontSize: "15.5rem",
  },
});
