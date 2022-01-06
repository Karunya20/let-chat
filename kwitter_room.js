var firebaseConfig = {
      apiKey: "AIzaSyAP17iAyxuDWaa5iTwzqcL_zbSqNqVHgfo",
      authDomain: "kwitter-efc52.firebaseapp.com",
      databaseURL: "https://kwitter-efc52-default-rtdb.firebaseio.com",
      projectId: "kwitter-efc52",
      storageBucket: "kwitter-efc52.appspot.com",
      messagingSenderId: "896268466401",
      appId: "1:896268466401:web:8219a00c245fab0577dfa0",
      measurementId: "G-82SM6JHFLC"
    };
    
    
firebase.initializeApp(firebaseConfig);
    

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row; 
      
      });});}
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
         window.location = "kwitter.html";
}
