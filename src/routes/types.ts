export type RootStackNavigatorParamList = {
  SplashScreen: undefined;
  MainScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

//Main Tab Stack
export type TabStackNavigatiorParam = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  EditScreen: undefined;
  PasswordScreen: undefined;
  Support: undefined;
  Terms: undefined;
  AboutUs: undefined;

  DetailScreen: {
    title: string;
  };
  QuizScreen: {
    title: string;
  };
  Module: {
    name: string;
  };
};

export type HomeStackScreenParams = {
  HomeScreen: undefined;
  Module: {name: string};
  DetailScreen: {
    title: string;
  };
  QuizScreen: {
    title: string;
  };
  // Restaurant: {
  //   name: string;
  // };
};

export type ProfileStackScreenParams = {
  ProfileS: undefined;
  EditScreen: undefined;
};

export type SettingStackScreenParams = {
  Setting: undefined;
  PasswordScreen: undefined;
  Support: undefined;
  Terms: undefined;
  AboutUs: undefined;
};
