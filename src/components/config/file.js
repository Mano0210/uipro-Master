import firebase from 'firebase'
import 'firebase/firebase'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBe2j6psXADUgWI5VCBBXeEyEdlgLcVjvc",
    authDomain: "eoa2019-03.firebaseapp.com",
    databaseURL: "https://eoa2019-03.firebaseio.com",
    projectId: "eoa2019-03",
    storageBucket: "eoa2019-03.appspot.com",
    messagingSenderId: "180817267558"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings( {timestampsInSnapshots: true})

  export default firebase;