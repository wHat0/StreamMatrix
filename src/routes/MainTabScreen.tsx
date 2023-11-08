import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import colors from "../config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditScreen from "../screens/Profile/EditScreen";
import SettingsScreen from "../screens/Setting/SettingsScreen";
import ChangePassword from "../screens/Setting/ChangePassword";
import SupportScreen from "../screens/Setting/SupportScreen";
import AboutScreen from "../screens/Setting/AboutScreen";
import TermsScreen from "../screens/Setting/TermsScreen";
import EStyleSheet from "react-native-extended-stylesheet";

import {
  HomeStackScreenParams,
  ProfileStackScreenParams,
  SettingStackScreenParams,
  TabStackNavigatiorParam,
} from "./types";
import DetailsScreen from "../screens/Home/DetailScreen";
import SearchScreen from "../screens/Search/SearchScreen";

// const DetailsStack = createStackNavigator();

const Tab = createBottomTabNavigator<TabStackNavigatiorParam>();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    // activeColor="white"
    screenOptions={{
      tabBarActiveBackgroundColor: "#170121",
      tabBarInactiveBackgroundColor: "#170121",
      headerShown: false,
      tabBarLabelPosition: "below-icon",
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        height: "8%",
      },
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: "grey",
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View style={{ alignItems: "center" }}>
            <Icon
              // containerStyle={{ma6}}
              name={focused ? "home" : "home-outline"}
              color={color}
              size={26}
            />
            <Text style={[styles.TabLabel, { color: color }]}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View style={{ alignItems: "center" }}>
            <Icon
              name={focused ? "search-circle" : "search"}
              color={color}
              size={26}
            />
            <Text style={[styles.TabLabel, { color: color }]}>Search</Text>
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={SettingStackScreen}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View style={{ alignItems: "center" }}>
            <Icon
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={26}
            />
            <Text style={[styles.TabLabel, { color: color }]}>Settings</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStack = createStackNavigator<HomeStackScreenParams>();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      cardStyle: {
        paddingTop: "5%",
        backgroundColor: colors.primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.BackSelector}
        >
          <MaterialIcons name="navigate-before" color={colors.text} size={28} />
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>
      ),
    })}
  >
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen name="DetailScreen" component={DetailsScreen} />
    <HomeStack.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator<ProfileStackScreenParams>();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      cardStyle: {
        paddingTop: "5%",
        backgroundColor: colors.primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.BackSelector}
        >
          <MaterialIcons name="navigate-before" color={colors.text} size={28} />
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>
      ),
    })}
  >
    <ProfileStack.Screen
      name="ProfileS"
      // component={ProfileScreen}
      component={ProfileScreen}
    />
    <ProfileStack.Screen name="EditScreen" component={EditScreen} />
  </ProfileStack.Navigator>
);

const SettingsStack = createStackNavigator<SettingStackScreenParams>();

const SettingStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={({ navigation }) => ({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      cardStyle: {
        paddingTop: "5%",
        backgroundColor: colors.primary,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.BackSelector}
        >
          <MaterialIcons name="navigate-before" color={colors.text} size={28} />
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>
      ),
    })}
  >
    <SettingsStack.Screen name="Setting" component={SettingsScreen} />
    <SettingsStack.Screen name="PasswordScreen" component={ChangePassword} />
    <SettingsStack.Screen name="Support" component={SupportScreen} />
    <SettingsStack.Screen name="Terms" component={TermsScreen} />
    <SettingsStack.Screen name="AboutUs" component={AboutScreen} />
  </SettingsStack.Navigator>
);

const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  BackSelector: {
    marginHorizontal: "4%",
    paddingHorizontal: "3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  BackText: {
    color: colors.text,
    fontSize: "8rem",
    position: "absolute",
    left: "38%",
  },
  TabLabel: {
    fontSize: "6.25rem",
  },
});
