console.log("loginSession.js is running")

var firebaseRef = firebase.database().ref()

firebaseRef.child("Users").child("Summer Shi").set("999")

googleLoginPatient=()=>{

  var provider = new firebase.auth.GoogleAuthProvider();
  var patientName
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }
      // The signed-in user info.
      var userInfo = result.user;
      patientName = userInfo;
      // console.log("Logging Patient information Vars")
      // console.log(patientName.displayName)
      // console.log(patientName.photoURL)
      // console.log(patientName.email)

      sessionStorage.setItem("globalVariable", patientName.displayName);
      sessionStorage.setItem("ProfilePicture", patientName.photoURL);
      sessionStorage.setItem("PatientEmail", patientName.email);

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          
          window.location.href = '/appointment.html';
        }
      });
      
  
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
   
  };

googleLogin=()=>{

var provider = new firebase.auth.GoogleAuthProvider();
var globalVariable

firebase.auth().signInWithPopup(provider).then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log('success!')
    }
    // The signed-in user info.
    var userInfo = result.user;
    globalVariable = userInfo;

    sessionStorage.setItem("globalVariable", globalVariable.displayName);
    sessionStorage.setItem("ProfilePicture", globalVariable.photoURL);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = '/green-horizotal/form-components.html';
      }
    });
    

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
 
};


var globalVariable = sessionStorage.getItem("globalVariable");
var ProfilePicture = sessionStorage.getItem("ProfilePicture");

document.getElementById("mainName").innerHTML = "Welcome, "+globalVariable+"!";
document.getElementById("profilePic").src = ProfilePicture;

var PatientEmail = sessionStorage.getItem("PatientEmail");
document.getElementById("PatientEmail").innerHTML = PatientEmail
