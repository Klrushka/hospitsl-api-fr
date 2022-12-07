import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCzHFvq7w6TMR_gRfzlZkrkz4whE96ZfhY",
  authDomain: "hospital-api-14be0.firebaseapp.com",
  projectId: "hospital-api-14be0",
  storageBucket: "hospital-api-14be0.appspot.com",
  messagingSenderId: "175960922493",
  appId: "1:175960922493:web:5426d0808d57eb81121414",
  measurementId: "G-LC3JCM258J"
};


function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      const app = initializeApp(firebaseConfig, 'hospital-api-14be0');

      const messaging = getMessaging(app);
      getToken(messaging, { vapidKey: 'BKEYhk3_cH33D5RqX1PnF3zF93f5iMlbm2ohrzCj9rEkjnrDTTMPs_uh1RekwclKV-w-06Y6fyAEkiMrjzsIDJc' })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log('Can not get Token');
          }
        })

    } else {
      console.log('Dont have permission');
    }

  })
}

requestPermission();