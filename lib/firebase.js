import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDFELKTZM4uwPCjmHfnW5oPDCtYwaZbp8Y",
  authDomain: "portfolio-ba964.firebaseapp.com",
  databaseURL: "https://portfolio-ba964-default-rtdb.firebaseio.com",
  projectId: "portfolio-ba964",
  storageBucket: "portfolio-ba964.appspot.com",
  messagingSenderId: "156986414464",
  appId: "1:156986414464:web:e67098e3f251011b639d65"
}

const app = initializeApp(firebaseConfig)

export default app
