console.log("loginSession.js is running")

var firebaseRef = firebase.database().ref()

firebaseRef.child("Users").child("Summer Shi").set("999")

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
    console.log('Logging user info...');
    console.log(userInfo);
    globalVariable = userInfo;
    console.log('Logging globalVariable');
    console.log(globalVariable.displayName);
    sessionStorage.setItem("globalVariable", globalVariable.displayName);
    sessionStorage.setItem("ProfilePicture", globalVariable.photoURL);
    window.alert('Checking');
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


// var user = firebase.auth().user;
var globalVariable = sessionStorage.getItem("globalVariable")
var ProfilePicture = sessionStorage.getItem("ProfilePicture")

document.getElementById("mainName").innerHTML = "Welcome "+globalVariable;
document.getElementById("profilePic").src = ProfilePicture

console.log("Profile Picture URL");
console.log(ProfilePicture)
console.log("User is now: ", globalVariable);
console.log("Done")