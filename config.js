// const firebase=require('firebase')
// firebaseConfig = {
//     apiKey: "AIzaSyBc9qH3Iyl1R0zp7jf8MN0CLeMH2BdTRA4",
//     authDomain: "tutorial-ef9d5.firebaseapp.com",
//     projectId: "tutorial-ef9d5",
//     storageBucket: "tutorial-ef9d5.appspot.com",
//     messagingSenderId: "229803567458",
//     appId: "1:229803567458:web:ae9c3648c33cc1bc92a43b",
//     measurementId: "G-0YEWEQLZGE"
//   };
//   firebase.initializeApp(firebaseConfig)
//   const db=firebase.firestore()
//   const user=Db.collection("users")
//   module.exports=User;

const firebase=require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyA016cibP9SqGCsTqnpmVsqZRwW4aG_XcI",
  authDomain: "web-dev-50e6e.firebaseapp.com",
  projectId: "web-dev-50e6e",
  storageBucket: "web-dev-50e6e.appspot.com",
  messagingSenderId: "743842078745",
  appId: "1:743842078745:web:aa7a5f9a578a996744ca88",
  measurementId: "G-BG6CYFPDTS"
};

firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const auth=firebase.auth;

module.exports = db




