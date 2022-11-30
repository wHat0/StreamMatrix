import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomAlertComponent from "../../components/CustomAlert";
import AuthToast from "../../components/Setting/AuthToast";
import OptionCard from "../../components/Setting/OptionCard";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";
import { AuthContext } from "../../Context/AuthContext";
import {
  SettingStackScreenParams,
  TabStackNavigatiorParam,
} from "../../routes/types";

type Props = NativeStackScreenProps<SettingStackScreenParams, "Setting">;

const SettingsScreen = ({ navigation }: Props) => {
  const AuthCntx = useContext(AuthContext);

  const [Display, setDisplay] = useState(false);

  const onPressAlertPositiveButton = () => {
    setDisplay(false), AuthCntx.logout();
  };

  const onPressNegativeButton = () => {
    setDisplay(false), console.log("Neg Button Clicked");
  };
  const fontScale = useOrientation().width;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.Title}>Settings</Text>
      <View
        style={{
          marginTop: "8%",
          width: "100%",
          alignItems: "center",
          paddingBottom: "8%",
        }}
      >
        <OptionCard
          // Icon={'user-o'}
          height={undefined}
          ImageSrc={require("../../assets/change-pass.png")}
          title={"Change Password"}
          onPress={() => navigation.navigate("PasswordScreen")}
        />
        <OptionCard
          // Icon={'bell'}
          height={undefined}
          ImageSrc={require("../../assets/help.png")}
          title={"Help & Support"}
          onPress={() => navigation.navigate("Support")}
        />
        <OptionCard
          // Icon={'bell'}
          ImageSrc={require("../../assets/T&C.png")}
          title={"Terms of Services"}
          height={45}
          onPress={() => navigation.navigate("Terms")}
        />
        <OptionCard
          // Icon={'heart'}
          ImageSrc={require("../../assets/Group.png")}
          title={"About App"}
          height={45}
          onPress={() => navigation.navigate("AboutUs")}
        />
        <OptionCard
          // Icon={'sign-out'}
          height={undefined}
          ImageSrc={require("../../assets/log-out.png")}
          title={"Log Out"}
          onPress={() => setDisplay(true)}
        />
      </View>
      <AuthToast
        displayToast={Display}
        onPressNegativeButton={onPressNegativeButton}
        onPressPositiveButton={onPressAlertPositiveButton}
      />
      {/* <CustomAlertComponent
        displayAlert={Display}
        displayAlertIcon={true}
        alertMessageText={'Are you sure you want to log out'}
        displayPositiveButton={true}
        displayNegativeButton={true}
        negativeButtonText={'No'}
        positiveButtonText={'Yes'}
      
        size={fontScale}
      /> */}
    </ScrollView>
  );
};

export default SettingsScreen;

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20%",
  },
  Title: {
    fontWeight: "500",
    color: colors.text,
    fontSize: "29rem",
    fontFamily: "Nunito-Regular",
  },
});
