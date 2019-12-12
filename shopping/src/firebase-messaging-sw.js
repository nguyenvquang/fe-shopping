// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// firebase.initializeApp({
//   'messagingSenderId': '168121829140'
// });
firebase.initializeApp({
  // apiKey: 'AIzaSyA4BRXh3C30_e3o1cCeTCk_HgjowqcZAJs',
  // authDomain: 'jlearning-c40ea.firebaseapp.com',
  // databaseURL: 'https://jlearning-c40ea.firebaseio.com',
  // projectId: 'jlearning-c40ea',
  // storageBucket: 'jlearning-c40ea.appspot.com',
  messagingSenderId: '563016885311'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png"
//   };
//
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
