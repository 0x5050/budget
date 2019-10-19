import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBbcGZTvZjRGnixbeRJZks51MQN0ZeSNe0',
  authDomain: 'budget-managment-d8391.firebaseapp.com',
  databaseURL: 'https://budget-managment-d8391.firebaseio.com',
  projectId: 'budget-managment-d8391',
  storageBucket: 'budget-managment-d8391.appspot.com',
  messagingSenderId: '543789972306',
  appID: '1:543789972306:web:414e578b1c31482b92d88b',
}

// let app = null
if (!firebase.apps.length) {
  // app = firebase.initializeApp(firebaseConfig)
  firebase.initializeApp(firebaseConfig)
}
/*
 * TODO: Problems with db
 * export const db = app.database()
 */
