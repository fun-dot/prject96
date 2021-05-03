
var firebaseConfig = {
      apiKey: "AIzaSyDIxIwA0FDOejMFNE-hC5LQRjiXAoM5-es",
      authDomain: "kwitter-7afab.firebaseapp.com",
      databaseURL: "https://kwitter-7afab-default-rtdb.firebaseio.com",
      projectId: "kwitter-7afab",
      storageBucket: "kwitter-7afab.appspot.com",
      messagingSenderId: "963846874023",
      appId: "1:963846874023:web:4c2911fe19471da1ad0c82"
    };
      firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like:0
});
document.getElementById("msg").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();
