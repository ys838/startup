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
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('anchorForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();
    // console.log(123);
    //get values
    // var name = getInputVal('name');
    // var message = getInputVal('message');
    var energy = getInputVal('amountp');
    var appetite = getInputVal('bedrooms');
    var mood = getInputVal('budget');
    var times = getInputVal('amounts');
    console.log(energy,appetite,mood,times);
    //update database
    updateRating(energy,appetite,mood,times);

    // console.log(name);

    // save message
    // saveMessage(name,message);
    // show alert
    console.log(123);
    document.getElementById('alert').style.display = 'block';
    // document.querySelector('.alert').style.display = 'none';
    // hide alert after 3 sec
    setTimeout(function(){
        document.getElementById('alert').style.display = 'none';
    },3000);
}
//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

function updateRating(energy,appetite,mood,times){
    var anchorsRef = firebase.database().ref("anchors/Douglas");
    // console.log(energy);

    anchorsRef.update ({
        "Sleep": energy,
        "Eat": appetite,
        "Mood": mood,
        "Meet": times
        });

}

function saveMessage(name,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        message: message
    });
}

  

document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    console.log(app)
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
            })
            .catch(console.log)
}



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




