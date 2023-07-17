const firebaseConfig = {
    apiKey: "AIzaSyAOu8l5perjjhY8_DzmiYj48zeXKnxdILo",
    authDomain: "attendityapp.firebaseapp.com",
    databaseURL: "https://attendityapp-default-rtdb.firebaseio.com",
    projectId: "attendityapp",
    storageBucket: "attendityapp.appspot.com",
    messagingSenderId: "937240821235",
    appId: "1:937240821235:web:b037cc239e61f0f598a686",
    measurementId: "G-RQ1NCWQ22S"
  };

  firebase.initializeApp(firebaseConfig);
  const contactDB = firebase.database().ref('contact');
  
  // Function to send the captured data to Firebase
  function sendCapturedData(name, roll, imageBase64) {
      contactDB.push().set({
          name: name,
          roll: roll,
          image: imageBase64
      });
  }