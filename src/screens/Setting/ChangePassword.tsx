import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { TextInput } from "react-native-paper";
import CustomAlertComponent from "../../components/CustomAlert";
import CustomButton from "../../components/CustomButton";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";
import { TabStackNavigatiorParam } from "../../routes/types";

type Props = NativeStackScreenProps<TabStackNavigatiorParam, "PasswordScreen">;

const ChangePassword = ({ navigation }: Props) => {
  const [Display, setDisplay] = useState(false);

  const onPressAlertPositiveButton = () => {
    setDisplay(false), console.log("Positive Button Clicked");
  };
  const fontScale = useOrientation().width;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.Title}>Change Password</Text>
      <View style={styles.SecondContainer}>
        <TextInput
          placeholder="Enter Current Password"
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Enter New Password"
          style={[styles.TextInput, { marginTop: 30 }]}
        />
        <TextInput
          placeholder="Confirm Password"
          style={[styles.TextInput, { marginTop: 30 }]}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "80%",
          alignItems: "center",
          marginTop: "12%",
          paddingBottom: "50%",
        }}
      >
        <CustomButton
          title={"Save Password"}
          height={"20%"}
          width={"85%"}
          marginBottom={20}
          onPress={() => setDisplay(true)}
        />
      </View>
      <CustomAlertComponent
        displayAlert={Display}
        displayAlertIcon={true}
        displayImageOfAlert={true}
        alertMessageText={"Your settings have been saved successfully"}
        displayPositiveButton={true}
        positiveButtonText={"OK"}
        onPressPositiveButton={onPressAlertPositiveButton}
        size={fontScale}
      />
    </ScrollView>
  );
};
export default ChangePassword;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    // marginTop: 30,
    flex: 1,
    paddingTop: "20%", // justifyContent: 'center',
  },
  SecondContainer: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    marginTop: "20%",
    paddingTop: 20,
  },
  Title: {
    fontWeight: "500",
    color: colors.text,
    fontSize: "29rem",
    fontFamily: "Nunito-Regular",
  },
  TextInput: {
    backgroundColor: "white",
    width: "90%",
  },
});
