import React from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";

interface Props {
  displayToast: boolean;
  onPressNegativeButton: () => void;
  onPressPositiveButton: () => void;
}

const AuthToast: React.FC<Props> = ({
  displayToast,
  onPressNegativeButton,
  onPressPositiveButton,
}: Props) => {
  return (
    <Modal visible={displayToast} transparent={true} animationType={"fade"}>
      <View style={styles.mainOuterComponent}>
        <View
          style={[
            styles.mainContainer,
            {
              width: "80%",
              borderWidth: 1,
              borderColor: "#82CE34",
            },
          ]}
        >
          <View style={styles.mainContainer}>
            {/* <View style={{}}> */}

            <Text
              style={{
                color: colors.primary,
                fontSize: 15,
                marginVertical: "10%",
                textAlign: "center",
              }}
            >
              Are You sure You want to log out ?
            </Text>
            <View style={{ flexDirection: "row", marginBottom: "10%" }}>
              <TouchableOpacity
                onPress={onPressPositiveButton}
                style={[
                  styles.alertMessageButtonStyle,
                  { backgroundColor: "#82ce34" },
                ]}
              >
                <Text style={{ fontSize: 16, padding: 20, color: "white" }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.alertMessageButtonStyle}
                onPress={onPressNegativeButton}
              >
                <Text style={{ fontSize: 16, padding: 20, color: "white" }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AuthToast;

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.61,
    elevation: 8,
    backgroundColor: "#00000088",
  },
  mainContainer: {
    alignItems: "center",
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#fff",

    borderRadius: 20,
    padding: 5,
  },
  alertMessageButtonStyle: {
    width: "35%",
    marginHorizontal: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9B2226",
  },
});
