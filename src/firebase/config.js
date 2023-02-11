import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAukHuVTmnbS4d6EAMIhDsCzjltOEwe3U4",
    authDomain: "music-store-a93fb.firebaseapp.com",
    projectId: "music-store-a93fb",
    storageBucket: "music-store-a93fb.appspot.com",
    messagingSenderId: "365180313210",
    appId: "1:365180313210:web:6468f6ddaec2bb9a11e5c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);