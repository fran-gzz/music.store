import { collection, getFirestore, getDocs, getDoc, doc, query, where, addDoc } from 'firebase/firestore'
import { app } from './config'

// Establece la conexión con la base de datos
const db = getFirestore( app )

//Referencia a la colección
const productsCollectionRef = collection( db, 'products' )

// Trae todos los items
export const getItems = async () => {
    const snapshot = await getDocs( productsCollectionRef );
    const docsData = snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id }
    })
    return ( docsData )
}

// Trae los productos según su tipo
export const getItemsByType = async ( type ) => {
    const question = query(productsCollectionRef, where('type', '==', type))
    const snapshot = await getDocs( question );
    const docsData = snapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id }
    })
    return ( docsData )
}

// Trae un producto en específico
export const getItem = async ( productId ) => {
    const productRef = doc( productsCollectionRef, productId )
    const snapshot = await getDoc( productRef )
    return {...snapshot.data(), id: snapshot.id}
}


// añadir un documento
const queryCollection = collection( db, 'orders' )

export const addOrder = async ( order ) => {
    const docRef = await addDoc( queryCollection, order )
    return docRef.id
}

export const getOrders = async () => {
    const snapshot = await getDocs( queryCollection );
    const docsData = snapshot.docs.map( (doc) => {
        return {...doc.data(), id: doc.id}
    })
    return docsData
}


