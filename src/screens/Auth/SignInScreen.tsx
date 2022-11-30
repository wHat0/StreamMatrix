import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Users from "../../model/users";
import { AuthContext } from "../../Context/AuthContext";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorParamList } from "../../routes/types";

type Props = NativeStackScreenProps<
  RootStackNavigatorParamList,
  "SignInScreen"
>;

const SignInScreen = ({ navigation }: Props) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { authenticate } = React.useContext(AuthContext);

  const textInputChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  async function loginHandle(userName: string, password: string) {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    // signIn(foundUser);
    console.log(foundUser);
    await AsyncStorage.setItem("token", foundUser[0].userToken);
    await AsyncStorage.setItem("email", userName);
    authenticate(foundUser);
  }
  const fontScale = useOrientation().height;
  // console.log('fontScale');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text
          style={{
            color: colors.text,
            fontWeight: "500",
            fontSize: fontScale * 0.044,
            textAlign: "center",
            fontFamily: "Nunito-Regular",
          }}
        >
          Welcome Back!
        </Text>
        <Text
          style={{
            fontWeight: "300",
            color: "#fff",
            fontSize: fontScale * 0.03801,
            fontFamily: "Inter-Medium",
          }}
        >
          Sign In
        </Text>
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: "transparent",
          },
        ]}
      >
        <View style={styles.action}>
          {/* <FontAwesome name="user-o" color={'black'} size={20} /> */}
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View
              animation="bounceIn"
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                paddingBottom: 10,
                paddingRight: 10,
              }}
            >
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <View style={styles.action}>
          {/* <Feather name="lock" color={'black'} size={20} /> */}
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              paddingBottom: 10,
              paddingRight: 10,
            }}
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        {/* <TouchableOpacity>
          <Text
            style={{
              color: colors.secondary,
              fontSize: fontScale * 0.025,
              textAlign: 'right',
              marginTop: 15,
            }}>
            Forgot password?
          </Text>
        </TouchableOpacity> */}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginHandle(data.username, data.password)}
          >
            <View style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: colors.black,
                  },
                ]}
              >
                Sign In
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Inter-Medium",
                color: colors.text,
              }}
            >
              I am a new User.{" "}
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "400",
                  color: colors.secondary,
                }}
              >
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
    // paddingBottom: 50,
  },
  footer: {
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.white,
    marginTop: 30,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "black",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 60,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
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
    color: "#001219",
    fontSize: "10rem",
    fontWeight: "600",
    fontFamily: "Inter-Medium",
  },
});
