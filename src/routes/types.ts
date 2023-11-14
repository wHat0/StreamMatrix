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
  SearchScreen: undefined;
  Support: undefined;
  Terms: undefined;
  AboutUs: undefined;
};

export interface featuredVideo {
  attributes: {
    category: string;
    file_url: string;
    release_date: string | null;
    thumbnail_url: string;
    title: string;
    video_type: string;
    views: number;
    yonra: string;
  };
  id: string;
  type: string;
}

export type HomeStackScreenParams = {
  HomeScreen: undefined;
  Profile: any;
  DetailScreen: {
    proDetails: featuredVideo;
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
