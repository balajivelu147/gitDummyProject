// function signup(){
//     let username = document.getElementById("userName").value;
//     let password = document.getElementById("password").value;

//     var finalResult = `
//         username = ${username},
//         password = ${password}
//     `
//     if(username == ''){
//         alert('please enter username');
//     }
//     else if(password == ''){
//         alert('please enter password');
//     }
//     else{
//         alert(finalResult);
//     }
// }

var array = [2,3,4,5,6]

var object = {"first":1,"second":2,"third":3}

var fruites = ["banana","orange","apple","mango"]

var veg = ["carrot","bringle","tomato"]

var flen,i,text;
flen=fruites.length;

function my_function(){
    console.log(array);
    // document.getElementById('demo').innerHTML="array";
    console.log(array.length);
    console.log(object);
    console.log(typeof fruites);
    console.log(Array.isArray(fruites));
    console.log(fruites instanceof Array);
    console.log(fruites[fruites.length-1]);

    text='<ul>';
    for(i=0;i<flen;i++){
        text+='<li>'+fruites[i]+'</li>';
    }
    text+='</ul>';
    console.log(text);
    console.log(fruites.push("Kiwi"));
    console.log(fruites.pop());
    console.log(fruites[0].toUpperCase());
    console.log(fruites.toString());
    console.log(delete fruites[0]);
    console.log(fruites.concat(veg));
    console.log(fruites.push("banana"));
    console.log(fruites);
    console.log(fruites.splice(2,0,"lemon","grapes"));
    var citrus = fruites.slice(1);
}

// window.onload=function docFunction(){
// // var firstClass=4;
// for(var i=0;i<=4;i++){
//     document.getElementsByClassName("firstClass")[i].style.color="red"
// }
// }
