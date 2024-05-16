import { app } from './firebase/config';
import {addDoc, collection, getFirestore } from 'firebase/firestore';
import { where, query, getDocs, updateDoc, doc } from 'firebase/auth';




export async function createEmail(data) {
    const db = getFirestore(app);
    console.log('db')

    try {
        const docRef = await addDoc(collection(db, "emails"), data);
        console.log("e-mail, cadastrado" , docRef.g);
         } catch (e) {
        console.error("Erro ao adicionar e-mail" , e);
        throw e;
    }
}


