import keys from '../config/keys';
import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId,
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
