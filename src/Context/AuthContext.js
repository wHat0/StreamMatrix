// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  email: '',
  mode: '',
  isTokenValide: false,
  authenticate: token => {},
  ModeCheck: mode => {},
  logout: () => {},
});

function AuthContextProvider({children}) {
  const [AuthToken, setAuthToken] = useState();
  const [Email, setEmail] = useState();
  const [Mode, setMode] = useState();

  async function authenticate(token) {
    setAuthToken(token);
    setEmail(await AsyncStorage.getItem('email'));
  }
  async function ModeCheck(mode) {
    // console.log('FromContext' + mode);
    setMode(mode);
  }

  async function logout() {
    setAuthToken(null);
    setEmail(null);
    AsyncStorage.multiRemove(['token', 'email']);
  }

  const value = {
    token: AuthToken,
    mode: Mode,
    email: Email,
    isTokenValide: !!AuthToken,
    logout: logout,
    authenticate: authenticate,
    ModeCheck: ModeCheck,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
