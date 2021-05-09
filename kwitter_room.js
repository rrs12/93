 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyBB805nW41aCopPfz9E0e1f6p1zHyZOB28",
      authDomain: "chat-web-1.firebaseapp.com",
      databaseURL: "https://chat-web-1-default-rtdb.firebaseio.com",
      projectId: "chat-web-1",
      storageBucket: "chat-web-1.appspot.com",
      messagingSenderId: "677534835645",
      appId: "1:677534835645:web:ec1a5c461665c544e668d4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 //ADD YOUR FIREBASE LINKS HERE

 function getData() {
       firebase.database().ref("/").on('value', function (snapshot) {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                   childKey = childSnapshot.key;
                   Room_names = childKey;
                   //Start code

                   //End code
             });
       });
 }
 getData();
