import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const API_KEY = 'AIzaSyCCzi7V-DQcE7m69M23dv1ci3Ci4VMWhww';

export async function LoginUser({email, password}) {
  // RestAPI for Login And SignUp User
  // const url=

  const response = await axios.post(url, {
    email: email,
    password: password,
  });

  const token = response.data.idToken;
  return token;
}

export async function SignUpUser({email, password}) {
  // const url=
  const token = await axios
    .post(url, {
      email,
      password,
    })
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // AsyncStorage.setItem('userData', user.toJSON.toString());

      const token = user.token;
      // console.log('Token' + token);
      return token;
    })
    .catch(error => {
      console.log(error);
    });

  return token;
}
