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

user_name = localStorage.getItem("User Name");
document.getElementById("welcome").innerHTML = "Welcome " + user_name + " !"

function addRoom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            Purpose: "Add Room"
      });
      localStorage.setItem("Room Name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                 //Start code
           row= "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>"
           document.getElementById("output").innerHTML+= row;
     //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
 localStorage.setItem("Room Name", name)
    window.location = "kwitter_page.html"
}

function logOut() {
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location.replace("index.html")
}
