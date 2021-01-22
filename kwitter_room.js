 var firebaseConfig = {
    apiKey: "AIzaSyAUkogsoWw-69NuyktHhlzBL-DG71TOTCs",
    authDomain: "qwitter-cb14f.firebaseapp.com",
    databaseURL: "https://qwitter-cb14f-default-rtdb.firebaseio.com",
    projectId: "qwitter-cb14f",
    storageBucket: "qwitter-cb14f.appspot.com",
    messagingSenderId: "835699228095",
    appId: "1:835699228095:web:40bc6cc219b79c9e0f750a",
    measurementId: "G-1JRXH17K5Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
