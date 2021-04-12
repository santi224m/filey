import keys from '../config/keys';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId,
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// export const storageRef = storage.ref();