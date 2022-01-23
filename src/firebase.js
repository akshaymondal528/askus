// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// // import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAj4JA9SkmI4moCYpmJCm-WhP7SlaKfLiQ',
//   authDomain: 'askus-f7fb8.firebaseapp.com',
//   projectId: 'askus-f7fb8',
//   storageBucket: 'askus-f7fb8.appspot.com',
//   messagingSenderId: '230743809041',
//   appId: '1:230743809041:web:f1014a55ffcb852cee65b0',
//   measurementId: 'G-FRL0F7S3L4',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// // const analytics = getAnalytics(app);

// export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAj4JA9SkmI4moCYpmJCm-WhP7SlaKfLiQ',
  authDomain: 'askus-f7fb8.firebaseapp.com',
  projectId: 'askus-f7fb8',
  storageBucket: 'askus-f7fb8.appspot.com',
  messagingSenderId: '230743809041',
  appId: '1:230743809041:web:f1014a55ffcb852cee65b0',
  measurementId: 'G-FRL0F7S3L4',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // For Using Database

export default db;
