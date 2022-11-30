import {Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const LINK = '';

// storeProgress(userId, TimeSpent, SetsStudied, Ratio, WordAverage);
export async function storeProgress(ProgressData) {
  const response = await axios
    .post(url, ProgressData)
    .catch(err => Alert.alert('error', `${err}`));

  const id = response.data.name;
  return id;
}

export async function showProgress() {
  const token = await AsyncStorage.getItem('token');

  const response = await axios
    .get(url)
    .catch(err => Alert.alert('error', `${err}`));
  console.log(response);
  // const id = response.data.name;
  // return id;
}

export async function showModules() {
  // console.log(' from http');
  const token = await AsyncStorage.getItem('token');
  const response = await axios
    .get(LINK + `imagedata.json?auth=` + token)
    .catch(err => Alert.alert('error', `${err}`));

  // const dataRes = response.data;

  // const PostData = [];
  // for (const key in dataRes) {
  //   const Posts = {
  //     id: Object.keys(dataRes[key].Post)[0],
  //     data: Object.values(dataRes[key].Post)[0],
  //   };

  // PostData.push(Posts);
  // }

  // console.log(PostData);

  // return PostData;
}

export async function QuizMaker(Id) {
  const token = await AsyncStorage.getItem('token');

  const response = await axios
    .get(LINK + `Question${Id}.json?auth=` + token)
    .catch(err => Alert.alert('error', `${err}`));
  //IT will provide the data again
  const id = response.data;
  console.log(id);
  return id;
}

export async function storeIDToken(UserID) {
  const token = await AsyncStorage.getItem('token');
  const email = await AsyncStorage.getItem('email');
  const response = await axios
    .get(LINK + `quizData.json?auth=` + token)
    .catch(err => Alert.alert('error', `${err}`));

  // const id = response.data.name;
  // return id;
}
