import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAnFN_SfaVSmz7AslVhg7vhi27DhmJOEMY",
    authDomain: "react-firebase-authentic-faed2.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-faed2.firebaseio.com",
    projectId: "react-firebase-authentic-faed2",
    storageBucket: "react-firebase-authentic-faed2.appspot.com",
    messagingSenderId: "325627594199",
  };

  class Firebase {
    constructor(){
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }
    //*** AUTH API */

    //signup funtion
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
      
      //login&signin funtion
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
    //when no user is authenticated
    doSignOut = () => this.auth.signOut();

    //rest and change a password
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);


      // user API

      user = uid => this.db.ref('users/${uid}');
      users = () => this.db.ref ('users');

  }

  export default Firebase;