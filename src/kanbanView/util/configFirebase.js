import * as firebase from "firebase/app";

export const API_FIREBASE_KEY = 'AIzaSyCFtrN-Mgpp4IKuHThi5K066c2cI1ETdLc'
export const AUTH_DOMAIN = 'kanbandboard.firebaseapp.com'
export const DB_URL = "https://kanbandboard.firebaseio.com/"

export const firebaseConfig = () => {
    let config = {
        apiKey: API_FIREBASE_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DB_URL,
    };
    return firebase.initializeApp(config);
}