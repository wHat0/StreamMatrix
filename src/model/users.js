export default Users = [
  {
    id: 1,
    email: 'user1@email.com',
    username: 'user1',
    password: 'password',
    userToken: 'token123',
  },
  {
    id: 2,
    email: 'user2@email.com',
    username: 'user2',
    password: 'pass1234',
    userToken: 'token12345',
  },
  {
    id: 4,
    email: 'user3@email.com',
    username: 'user3',
    password: 'pass12345',
    userToken: 'token123456',
  },
  {
    id: 3,
    email: 'testuser@email.com',
    username: 'testuser',
    password: 'testpass',
    userToken: 'testtoken',
  },
  {
    id: 5,
    email: 'testuser@email.com',
    username: 'testuser2',
    password: 'testpass1',
    userToken: 'testtoken1',
  },
];

// LOG  U SAVE AT LOG OUT in useruser1
//  LOG  Time11.702266666666667

//  LOG changeuser2
//  LOG  Time10.892566666666667
export const totalQuestions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
// with react query
// const { status, data, error, isFetching } = useQuery(
//   ['data'],
//   async () => {
//     const data = await (
//       await fetch(`${API_BASE_URL}/data`)
//     ).json()
//     return data
//   }
// )
// $ yarn add @tanstack/react-query
// $ yarn add @tanstack/react-query
