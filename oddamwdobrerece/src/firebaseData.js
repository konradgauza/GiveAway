import firebase from 'firebase';
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCmFkPPtOFb45Ehqp6iBxlde3jdguWo7K8",
    authDomain: "oddam-rzeczy-23ac5.firebaseapp.com",
    projectId: "oddam-rzeczy-23ac5",
    storageBucket: "oddam-rzeczy-23ac5.appspot.com",
    messagingSenderId: "847016846664",
    appId: "1:847016846664:web:816d8b9d84e950e050ff7d"
};

const firebaseData = firebase.initializeApp(firebaseConfig);

export default firebaseData;