import { messaging } from "../src/messaging/firebaseinit";

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });