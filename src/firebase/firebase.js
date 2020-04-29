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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('Removed: ', snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Changed: ', snapshot.key, snapshot.val())
})

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log('Added: ', snapshot.key, snapshot.val())
})

// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const data = []
//     snapshot.forEach((childSnapshot) => {
//       data.push({ id: childSnapshot.key, ...childSnapshot.val() })
//     })
//     console.log(data)
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const data = []
//   snapshot.forEach((childSnapshot) => {
//     data.push({ id: childSnapshot.key, ...childSnapshot.val() })
//   })
//   console.log(data)
// })

// const expenses = [
//   {
//     description: 'Rent',
//     note: '',
//     amount: 12234,
//     createdAt: 1221,
//   },
//   {
//     description: 'Coffee',
//     note: '',
//     amount: 567,
//     createdAt: 2221,
//   },
//   {
//     description: 'Tea',
//     note: '',
//     amount: 123,
//     createdAt: 121,
//   },
// ]
// expenses.forEach((expense) => database.ref('expenses').push(expense))

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const { name, job } = snapshot.val()
//     console.log(`${name} is a ${job.title} at ${job.company}`)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

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
