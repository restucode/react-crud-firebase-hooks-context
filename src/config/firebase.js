import firebase from "firebase/app"
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyAbpi7VAOWw6dU-fvuuEykQ3DRICAmsdAw",
    authDomain: "react-crud-sendiri.firebaseapp.com",
    databaseURL: "https://react-crud-sendiri.firebaseio.com",
    projectId: "react-crud-sendiri",
    storageBucket: "react-crud-sendiri.appspot.com",
    messagingSenderId: "613854143276",
    appId: "1:613854143276:web:a8bbc53584a19430370289"
  };

  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();