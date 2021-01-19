import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDsmBWlUW8Xu2KLjf1lbyEOAKEvdoJwubc',
    authDomain: 'nicohnavarro-clones.firebaseapp.com',
    projectId: 'nicohnavarro-clones',
    storageBucket: 'nicohnavarro-clones.appspot.com',
    messagingSenderId: '830974104291',
    appId: '1:830974104291:web:8efe271505815f4f46ebd6',
    measurementId: 'G-EF3DG6RKJS'
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db;