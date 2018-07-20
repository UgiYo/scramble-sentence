// Initialize Firebase
var config = {
    apiKey: "AIzaSyBkKb_V4GAAP0mo8HO_YbauenQgf4YFQ2o",
    authDomain: "fir-first-3ed45.firebaseapp.com",
    databaseURL: "https://fir-first-3ed45.firebaseio.com",
    projectId: "fir-first-3ed45",
    storageBucket: "fir-first-3ed45.appspot.com",
  };
firebase.initializeApp(config);
var ref = firebase.database().ref('/posts/');   //firebase的database

$('#random').click(function(){
    var inputs = $("#container").find('input');
    var name, rst, updatedObj;
    
    ref.remove();
    for(var i = 0 ; i < inputs.length; i++){
        if($(inputs[i]).val() != ""){
            rst = shuffle($(inputs[i]).val().split(" "));
            name = inputs[i].name;
            //要指定key值用法
            updatedObj = {};
            updatedObj[name] = rst;
            ref.update(updatedObj);         
            // ref.set({
            //     name: rst
            // });
        }
    }

    window.location = "result.html";

    
});

//亂數產生
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    var arr = "";
    for(var i = 0; i < array.length; i++)
    {
        arr = arr + array[i] + ' / ';
    }
    
    return arr.substr(0, arr.length - 2);
}