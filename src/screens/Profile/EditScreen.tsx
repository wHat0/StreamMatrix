import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { TextInput } from "react-native-paper";
import CustomAlertComponent from "../../components/CustomAlert";
import CustomButton from "../../components/CustomButton";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";
import { TabStackNavigatiorParam } from "../../routes/types";

type Props = NativeStackScreenProps<TabStackNavigatiorParam, "EditScreen">;

const EditScreen = ({ navigation }: Props) => {
  const [Display, setDisplay] = useState(false);

  const onPressAlertPositiveButton = () => {
    setDisplay(false);
  };
  const fontScale = useOrientation().height;
  const width = useOrientation().width;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: "20%",
        paddingBottom: "30%",
      }}
    >
      <Text style={styles.Title}>Edit Profile</Text>
      <View
        style={{
          height: "40%",
          width: "100%",
          alignItems: "center",
          marginTop: "20%",
          marginBottom: "15%",
        }}
      >
        <TextInput
          placeholder="First Name"
          style={{
            backgroundColor: "white",
            width: "90%",
          }}
        />
        <TextInput
          placeholder="Last Name"
          style={{
            backgroundColor: "white",
            width: "90%",
            marginTop: 30,
          }}
        />
        <TextInput
          placeholder="Username"
          style={{
            backgroundColor: "white",
            width: "90%",
            marginTop: 30,
          }}
        />
      </View>

      <View
        style={{
          width: "80%",
          height: "50%",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <CustomButton
          title={"Save"}
          height={"25%"}
          width={"80%"}
          marginBottom={20}
          onPress={() => setDisplay(true)}
        />
        <CustomButton
          title={"Cancel"}
          height={"25%"}
          width={"80%"}
          onPress={() => navigation.goBack()}
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
        size={width}
      />
    </ScrollView>
  );
};

export default EditScreen;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    fontWeight: "500",
    color: colors.text,
    fontSize: "29rem",
    fontFamily: "Nunito-Regular",
  },
});
