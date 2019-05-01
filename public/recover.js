var config = {
    apiKey: "AIzaSyAKxK17wAvmQkVJwLhFxGB6tcTQDMLvTeU",
    authDomain: "anchor-me.firebaseapp.com",
    databaseURL: "https://anchor-me.firebaseio.com",
    projectId: "anchor-me",
    storageBucket: "anchor-me.appspot.com",
    messagingSenderId: "1060146172993"
  };
  firebase.initializeApp(config);

//reference messages collection
// var messagesRef = firebase.database().ref('messages');


//retrieve data from db on patient's page
var sleepRef = firebase.database().ref("anchors/Douglas/Sleep");
sleepRef.on("value",function(snapshot){
    var sleep = snapshot.val();
    console.log(sleep);
    var input1 = document.getElementById('sleep');
    input1.setAttribute("data-rel",80);
});
console.log(sleep);



(function(){
    
    const config = {
        apiKey: "AIzaSyAKxK17wAvmQkVJwLhFxGB6tcTQDMLvTeU",
        authDomain: "anchor-me.firebaseapp.com",
        databaseURL: "https://anchor-me.firebaseio.com",
        projectId: "anchor-me",
        storageBucket: "anchor-me.appspot.com"
    };
    firebase.initializeApp(config);
    
    //get elements
    const preObject = document.getElementById('object');
    
    //create references
    const dbRefObject = firebase.database().ref().child('players').child('John');
    
    //Sync object changes
    dbRefObject.on('value', snap => console.log(snap.val()));

    //set
    var playersRef = firebase.database().ref("players/");

    playersRef.set ({
    John: {
        number: 1,
        age: 30
    },
        
    Amanda: {
        number: 2,
        age: 20
    }
    });

    //update
    var johnRef = firebase.database().ref("players/John");

    johnRef.update ({
    "number": 10
    });
    
}());




