import keys from '../config/keys';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId,
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
