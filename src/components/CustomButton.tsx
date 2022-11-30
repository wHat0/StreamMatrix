import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import colors from "../config/colors";
import useOrientation from "../config/useOrientation";

interface Props {
  title: string;
  width?: number | string;
  height?: number | string; //string bcz it can be in percentages "20%"
  marginBottom?: number;
  onPress: () => void;
}
const CustomButton: React.FC<Props> = ({
  onPress,
  title,
  height,
  width,
  marginBottom,
}) => {
  return (
    <View
      style={[
        styles.button,
        { width: width, height: height, marginBottom: marginBottom },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.InnerView,
            {
              backgroundColor: title === "Cancel" ? "brown" : colors.secondary,
            },
          ]}
        >
          <Text style={styles.textSign}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  button: {
    width: "100%",
    height: "10%",

    // marginTop: 40,
  },
  InnerView: {
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
    color: colors.text,
    fontSize: "8.5rem",
    fontWeight: "600",
    fontFamily: "Inter-Medium",
  },
});
