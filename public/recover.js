// var config = {
//     apiKey: "AIzaSyAKxK17wAvmQkVJwLhFxGB6tcTQDMLvTeU",
//     authDomain: "anchor-me.firebaseapp.com",
//     databaseURL: "https://anchor-me.firebaseio.com",
//     projectId: "anchor-me",
//     storageBucket: "anchor-me.appspot.com",
//     messagingSenderId: "1060146172993"
//   };
//   firebase.initializeApp(config);

//reference messages collection
// var messagesRef = firebase.database().ref('messages');

document.getElementById('statsForm').addEventListener('submit',submitKnob);
document.getElementById('device').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    // console.log(123);
    //get values
    // var name = getInputVal('name');
    // var message = getInputVal('message');
    document.getElementById('chart').style.opacity = 1;
}

var sleepRef = firebase.database().ref("anchors/Summer Shi/Sleep");
var sleep = 0;
sleepRef.on("value",function(snapshot){
    sleep = snapshot.val()*10;
});
console.log(sleep);



function submitKnob(e){
    e.preventDefault();
    // console.log(123);
    //get values
    // var name = getInputVal('name');
    // var message = getInputVal('message');
    // var input1 = document.getElementById('sleep');
    // input1.setAttribute("data-rel","88");
    // setTimeout(function(){
    //     input1.setAttribute("data-rel","88");
    //     console.log(88);
    // },1000);
    
    (function ($) {
        /*---------------------
           Circular Bars - Knob
        --------------------- */	
          if(typeof($.fn.knob) != 'undefined') {
    
            $('.knob').each(function () {
              var $this = $(this),
                    knobVal = $this.attr('data-rel');
                    knobVal = "80";
                    console.log(knobVal);
        
              $this.knob({
                'draw' : function () { 
                  $(this.i).val(this.cv + '%')
                }
              });
              
              $this.appear(function() {
                $({
                  value: 0
                }).animate({
                  value: knobVal
                }, {
                  duration : 2000,
                  easing   : 'swing',
                  step     : function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                  }
                });
              }, {accX: 0, accY: -150});
            });
        }	
    
    })(jQuery);
}

//retrieve data from db on patient's page
// var sleepRef = firebase.database().ref("anchors/Douglas/Sleep");
// sleepRef.on("value",function(snapshot){
//     var sleep = snapshot.val();
//     console.log(sleep);
//     var input1 = document.getElementById('sleep');
//     input1.setAttribute("data-rel","88");
// });
// console.log(sleep);



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




