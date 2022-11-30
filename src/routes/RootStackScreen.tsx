import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/Auth/SplashScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import SignInScreen from "../screens/Auth/SignInScreen";
import MainScreen from "../screens/Auth/MainScreen";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";
import EStyleSheet from "react-native-extended-stylesheet";
import { RootStackNavigatorParamList } from "./types";

const RootStack = createStackNavigator<RootStackNavigatorParamList>();

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShown: true,
        headerLeft: false,
        cardStyle: {
          paddingTop: "3%",
          backgroundColor: colors.primary,
        },
      }}
    >
      <RootStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ navigation }) => ({
          headerTitle: "",

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              style={styles.Selector}
            >
              <Text style={styles.Skip}>Skip</Text>
              <MaterialIcons
                name="navigate-next"
                color={colors.secondary}
                size={25}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  Selector: {
    marginHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Skip: {
    color: colors.text,
    fontSize: "7rem",
    position: "absolute",
    right: "6%",
  },
});
