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

user_name = localStorage.getItem("User Name");
room_name = localStorage.getItem("Room Name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "Purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        named = message_data["name"];
                        message = message_data["message"];
                        like = message_data["like"]
                 
                          row = "<h4> "+ named +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      document.getElementById("output").innerHTML += row;                      
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
      document.getElementById("msg").value = ""
}
//like_click = 0

function updateLike(message_id) {
      button_id = message_id
      likes = document.getElementById(button_id).value
      likes++
      firebase.database().ref(room_name).child(message_id).update({
            like: likes
      })

}
function logOut() {
     localStorage.removeItem("User Name");
     localStorage.removeItem("Room Name");
     window.location.replace("index.html")
}