import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDC6hXXpc_6pS_IGgToifrK9XBNvmMM7qY",
    authDomain: "proyecto-prueba-karem-e5484.firebaseapp.com",
    projectId: "proyecto-prueba-karem-e5484",
    storageBucket: "proyecto-prueba-karem-e5484.appspot.com",
    messagingSenderId: "594644502685",
    appId: "1:594644502685:web:ccc8678665b8265eafac74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Exporta la funcionalidad de la DB
export const firestore = firebase.firestore()
// exporta el paquete de firebase para poder usarlo
export default firebase

/*
login social con FIREBASE:

// -- el modulo de la autenticacion --
export const auth = firebase.auth();

// -- el provedor de la autenticacion --
export const provider = new firebase.auth.GoogleAuthProvider();

// -- la utilidad de hacer login con el popup --
export const loginWithGoogle = () => auth.signInWithPopup(provider);

// -- la utilidad para hacer logout --
export const logout = () => auth.signOut();

*/ 
