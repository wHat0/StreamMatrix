import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../config/colors";

interface Props {
  displayToast: boolean;
  textMessage?: string;
}

const CustomToast: React.FC<Props> = ({ displayToast, textMessage }) => {
  return (
    <Modal visible={displayToast} transparent={true} animationType={"fade"}>
      <View style={styles.mainOuterComponent}>
        <View style={styles.mainContainer}>
          {/* <Image
            source={require("./alert/Tick.png")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          /> */}
          <View style={{ marginHorizontal: 12 }}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
              {textMessage}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.61,
    elevation: 8,
    // backgroundColor: '#00000088',
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 80,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#82CE34",
    borderRadius: 5,
    padding: 5,
  },
});
