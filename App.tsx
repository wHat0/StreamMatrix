import React, { useState, useRef, useContext, useEffect } from "react";
import { AppState, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider, { AuthContext } from "./src/Context/AuthContext";
import RootStackScreen from "./src/routes/RootStackScreen";
import MainTabScreen from "./src/routes/MainTabScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from "./src/redux/store";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>MAIN SCREEN</Text>
    // </View>
    <AuthContextProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthContextProvider>
  );
}

function Navigation() {
  const ContxAuth = useContext(AuthContext);
  const d = new Date();
  const data = useRef(0);
  const firstTime = useRef(0);
  const BackgroundTime = useRef(0);
  const appState = useRef(AppState.currentState);
  const user = ContxAuth.email ? ContxAuth.email : "null";
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        ContxAuth.authenticate(token);
      }
      return;
    }

    getToken();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      const d = new Date();
      // console.log('From Start' + d.getTime());
      if (nextAppState === "background") {
        console.log("timer");
        BackgroundTime.current = d.getTime();
      }
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        if (BackgroundTime.current != 0) {
          console.log("BackgroundTime"), (BackgroundTime.current = 0);
        }
        (firstTime.current = d.getTime()),
          console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);

      if (user && user !== "null") {
        if (firstTime.current === 0) {
          firstTime.current = d.getTime();
        }
        //if states changes all the things got saved into storage
        console.log("act");
        (data.current = data.current + (d.getTime() - firstTime.current)),
          AsyncStorage.setItem(`${user}`, JSON.stringify(data.current / 60000)),
          console.log("Time" + data.current / 60000);
      }

      console.log("Main " + data.current);
      console.log("AppState", appState.current);
    });

    async function TimeSpent() {
      const logout = await AsyncStorage.getItem("email");
      // console.log(!logout);
      // save Time on logOut
      console.log(appStateVisible);
      if (appState.current != "background" && !logout) {
        console.log("INSIDE LOGOUT");
        const user = await AsyncStorage.getItem("user");
        console.log("LOGOUT" + user),
          (data.current = data.current + (d.getTime() - firstTime.current)),
          console.log("LOGOUT" + user + data.current / 60000),
          await AsyncStorage.setItem(
            `${user}`,
            JSON.stringify(data.current / 60000)
          ),
          (firstTime.current = d.getTime()),
          AsyncStorage.removeItem("user"),
          console.log("------------------");
      }

      if (user && user !== "null") {
        await AsyncStorage.setItem("user", `${user}`);
        const OldTimeSpent = await AsyncStorage.getItem(`${user}`);
        if (OldTimeSpent) {
          (data.current = Number(OldTimeSpent) * 60000),
            console.log(data.current);
        } else {
          data.current = 0;
        }
        console.log("SET--This");
        firstTime.current = d?.getTime();
      }
    }

    TimeSpent();
    return () => {
      subscription.remove();
    };
  }, [user]);

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      {ContxAuth.isTokenValide ? <MainTabScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
}
