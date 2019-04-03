// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2NSP_OUiOIqJRzY8ntwydZXvQRpOhEV0",
    authDomain: "train-scheduler-4e9cd.firebaseapp.com",
    databaseURL: "https://train-scheduler-4e9cd.firebaseio.com",
    projectId: "train-scheduler-4e9cd",
    storageBucket: "train-scheduler-4e9cd.appspot.com",
    messagingSenderId: "618074628527"
  }

  firebase.initializeApp(config)

  let db = firebase.firestore()
  
  