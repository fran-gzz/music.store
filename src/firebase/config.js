
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {collection, getFirestore, getDocs, getDoc, doc, query, where } from 'firebase/firestore'

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
const app = initializeApp(firebaseConfig);

// Establece la conexión con la base
const db = getFirestore( app )

//Referencia a la colección
const productsCollectionRef = collection( db, 'products' )

export const getItems = async () => {
    const snapshot = await getDocs( productsCollectionRef );
    const docsData = snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id }
    })
    return ( docsData )
}

export const getItemsByType = async ( type ) => {
    const question = query(productsCollectionRef, where('type', '==', type))
    const snapshot = await getDocs( question );
    const docsData = snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id }
    })
    return ( docsData )
}

export const getItem = async ( productId ) => {
    const productRef = doc( productsCollectionRef, productId )
    const snapshot = await getDoc( productRef )
    return {...snapshot.data(), id: snapshot.id}
}