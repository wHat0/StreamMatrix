import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import { Checkbox, TextInput } from "react-native-paper";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";
import CustomToast from "../../components/CustomToast";
import EStyleSheet from "react-native-extended-stylesheet";
import { RootStackNavigatorParamList } from "../../routes/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../../redux/Actions/Register";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = NativeStackScreenProps<
  RootStackNavigatorParamList,
  "SignUpScreen"
>;
const SignUpScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    check_textEmailChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [Toast, setToast] = useState(false);
  const [toastMessage, settoastMessage] = useState("");
  const user = useSelector((state: any) => state.user_data.user);
  console.log("user", user);

  useEffect(() => {
    const callRes = async () => {
      const registered = await AsyncStorage.getItem("register");
      console.log("REGISTRATIONS>>>", registered);
      if (registered) {
        setToast(true);
        settoastMessage(
          registered === "true"
            ? "Account Created Successfully"
            : JSON.parse(registered) ?? "got Error"
        );
        setTimeout(() => {
          setToast(false);
        }, 1000); // }
        registered === "true" && navigation.navigate("SignInScreen");
      }
    };
    user && callRes();
  }, [user]);
  const textInputChange = (val: string) => {
    if (val.length > 2) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const textEmailChange = (val: string) => {
    if (val.length > 7 && val.includes("@" && ".")) {
      setData({
        ...data,
        email: val,
        check_textEmailChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textEmailChange: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const textFirstNameChange = (val: string) => {
    setData({
      ...data,
      firstname: val,
    });
  };

  const textLastNameChange = (val: string) => {
    setData({
      ...data,
      lastname: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const submitData = async () => {
    if (!data.email) {
      setToast(true);
      settoastMessage("kindly provide Email");
      setTimeout(() => {
        setToast(false);
      }, 1000);
      return;
    }
    const registrationData = {
      email: data.email,
      password: data.password,
      first_name: data.firstname,
      last_name: data.lastname,
    };
    const dataToSend = JSON.stringify({ user: registrationData });
    // if (data.password !== confirmPassword) {
    //   toast.error("Password do not match");
    // } else {
    await dispatch(Signup(dataToSend) as any);
  };

  const fontScale = useOrientation().height;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={[styles.text_header, { fontSize: fontScale * 0.044 }]}>
          Create Account
        </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "46%",
              // marginRight: 15,
            }}
          >
            {/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
            <TextInput
              placeholder="FirstName"
              style={styles.textInput}
              placeholderTextColor={"grey"}
              autoCapitalize="none"
              onChangeText={(val) => textFirstNameChange(val)}
            />
          </View>
          <View
            style={{
              // backgroundColor: 'white',
              width: "46%",

              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
            }}
          >
            <TextInput
              placeholder="LastName"
              style={styles.textInput}
              placeholderTextColor={"grey"}
              autoCapitalize="none"
              onChangeText={(val) => textLastNameChange(val)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 18,
          }}
        >
          <TextInput
            placeholder="Your Username"
            placeholderTextColor={"grey"}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
        </View>
        {data.check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="white" size={20} />
          </Animatable.View>
        ) : null}
        <View style={[styles.action, { marginTop: 30 }]}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={"grey"}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textEmailChange(val)}
          />
          {data.check_textEmailChange ? (
            <Animatable.View
              animation="bounceIn"
              style={{ backgroundColor: "white", paddingRight: 10 }}
            >
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <View
          style={[
            styles.action,
            {
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: colors.white,
            },
          ]}
        >
          <TextInput
            placeholder="Your Password"
            placeholderTextColor={"grey"}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, { width: "90%" }]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )} */}
        {/* <View style={styles.textPrivate}>
            <View style={{alignSelf: 'center'}}>
              <Checkbox status="checked" />
            </View>
            <Text
              style={[styles.color_textPrivate, {fontSize: fontScale * 0.022}]}>
              By signing up you agree to our
            </Text>
            <Text
              style={[
                [styles.color_textPrivate, {fontSize: fontScale * 0.022}],
                {fontWeight: 'bold'},
              ]}>
              {' '}
              Terms of service
            </Text>
            <Text
              style={[styles.color_textPrivate, {fontSize: fontScale * 0.022}]}>
              {' '}
              and
            </Text>
            <Text
              style={[
                [styles.color_textPrivate, {fontSize: fontScale * 0.022}],
                {fontWeight: 'bold'},
              ]}>
              {' '}
              Privacy policy
            </Text>
          </View> */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={submitData}>
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.black,
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginTop: 25 }}>
            <Text
              style={[
                {
                  fontSize: 14,
                  color: "white",
                  fontFamily: "Inter-Medium",
                },
              ]}
            >
              Already have an Account?{" "}
              <Text
                onPress={() => navigation.navigate("SignInScreen")}
                style={{
                  fontWeight: "400",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "Inter-Medium",
                  color: colors.secondary,
                }}
              >
                Log In
              </Text>
            </Text>
          </View>
        </View>
      </Animatable.View>
      <CustomToast displayToast={Toast} textMessage={toastMessage} />
    </ScrollView>
  );
};

export default SignUpScreen;

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
    paddingVertical: 20,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    // backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    // paddingVertical: 30,
  },
  text_header: {
    color: colors.text,
    fontWeight: "422",
    fontSize: 40,
  },

  action: {
    flexDirection: "row",
    marginBottom: 30,
  },
  textInput: {
    width: "100%",
    backgroundColor: "white",
    color: "#001219",
    // fontFamily:""
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
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 8,
  },
  textSign: {
    color: "#001219",
    fontSize: "10rem",
    fontWeight: "600",
    fontFamily: "Inter-Medium",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // marginTop: 10,
  },
  color_textPrivate: {
    color: colors.black,
  },
});
