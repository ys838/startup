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
    document.getElementById('linked').innerHTML = 'LINKED';
    document.getElementById('linked').style.background = "#79c879";

}

// var sleepRef = firebase.database().ref("anchors/Summer Shi/Sleep");
// sleepRef.on("value",function(snapshot){
//     var sleep = snapshot.val()*10;
//     sessionStorage.setItem("sleep",sleep);
// });
// var sleep = sessionStorage.getItem("sleep");
// console.log(sleep);
// window.alert("working");



function submitKnob(e){
    e.preventDefault();
    // document.location.reload("true");
    var sleepRef = firebase.database().ref("anchors/Emmanuel Cruz/Sleep");
    sleepRef.on("value",function(snapshot){
        var sleep = snapshot.val()*10;
        sessionStorage.setItem("sleep",sleep);
    });
    var sleep = sessionStorage.getItem("sleep");

    var eatRef = firebase.database().ref("anchors/Emmanuel Cruz/Eat");
    eatRef.on("value",function(snapshot){
        var eat = snapshot.val()*10;
        sessionStorage.setItem("eat",eat);
    });
    var eat = sessionStorage.getItem("eat");

    var moodRef = firebase.database().ref("anchors/Emmanuel Cruz/Mood");
    moodRef.on("value",function(snapshot){
        var mood = snapshot.val()*10;
        sessionStorage.setItem("mood",mood);
    });
    var mood = sessionStorage.getItem("mood");

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
    document.getElementById('starbucks').innerHTML = "<span>100%</span>";
    document.getElementById('starbucks').style.width = "100%";
    document.getElementById('goodwork').style.display = 'block';
    setTimeout(function(){
        document.getElementById('goodwork').style.display = 'none';
    },4000);
    
    (function ($) {
        /*---------------------
           Circular Bars - Knob
        --------------------- */	
          if(typeof($.fn.knob) != 'undefined') {
    
            $('.knob').each(function () {
              var $this = $(this),
                    knobVal = $this.attr('data-rel');
                    if($(this).attr('id') == 'sleep'){
                        knobVal = String(sleep);
                    }
                    else if ($(this).attr('id') == 'eat'){
                        knobVal = String(eat);
                    }
                    else if ($(this).attr('id') == 'mood'){
                        knobVal = String(mood);
                    }
                    else{
                        var overall = (parseInt(sleep)+parseInt(eat)+parseInt(mood))/3;
                        // window.alert(overall);
                        knobVal = String(Math.round(overall));
                    };
                    
                    // console.log(knobVal);
        
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




