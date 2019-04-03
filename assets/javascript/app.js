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

  // Click event listener whenever submit is clicked
  document.querySelector('#submit').addEventListener('click', function (event) {
    // prevent refresh when we submit
    event.preventDefault()
    // get info from inputs
    let train = {
      trainName: document.querySelector('#trainname').value,
      destination: document.querySelector('#destination').value,
      firstTrain: document.querySelector('#traintime').value,
      frequency: document.querySelector('#frequency').value
    }
    // set items to empty string so text inputs clear 
    document.querySelector('#trainname').value = ''
    document.querySelector('#destination').value = ''
    document.querySelector('#traintime').value = ''
    document.querySelector('#frequency').value = ''

  })

  




// db.ref().on('value', function(snapshot) {
//   console.log(snapshot.val())

// });