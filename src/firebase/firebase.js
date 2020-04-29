import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDX3jtE3WLqLaJ5ate1ovSarYLKGwfly-w',
  authDomain: 'expensify-20229.firebaseapp.com',
  databaseURL: 'https://expensify-20229.firebaseio.com',
  projectId: 'expensify-20229',
  storageBucket: 'expensify-20229.appspot.com',
  messagingSenderId: '68597681415',
  appId: '1:68597681415:web:e1f0818eef9f1c94a4c9a2',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

database
  .ref()
  .once('value')
  .then((snapshot) => {
    const { name, job } = snapshot.val()
    console.log(`${name} is a ${job.title} at ${job.company}`)
  })
  .catch((e) => {
    console.log('Error fetching data', e)
  })

// database
//   .ref()
//   .set({
//     name: 'Marat Maksumov',
//     age: 42,
//     isSingle: true,
//     job: {
//       title: 'Software Developer',
//       company: 'Google',
//     },
//     stressLevel: 6,
//     location: {
//       city: 'Kazan',
//       country: 'Russian Federation',
//     },
//   })
//   .then(() => {
//     console.log('Data saved')
//   })
//   .catch((e) => {
//     console.log('Error occured: ', e)
//   })

// database
//   .ref('attributes')
//   .set({
//     height: 184,
//     weight: 91,
//   })
//   .then(() => {
//     console.log('Data saved 2')
//   })
//   .catch((e) => {
//     console.log('Error catched: ', e)
//   })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   // job: 'Software developer', // New data
//   isSingle: null, // Remove data
// })

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log('Data removed')
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e)
//   })
