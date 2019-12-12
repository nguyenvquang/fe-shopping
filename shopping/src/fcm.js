importScripts('www.gstatic.com/firebasejs/<insert-version-here>/firebase-app.js');
importScripts('www.gstatic.com/firebasejs/<insert-version-here>/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '168121829140'
});

const messaging = firebase.messaging();
