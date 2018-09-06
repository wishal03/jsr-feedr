var books = function() {
    var dropDown = document.getElementById("dropDown");
var popUp = document.getElementById("popUp");
var popUpH1 = document.getElementById("popUpH1");
var popUpp = document.getElementById("popUpp");
//console.log(popUpH1);
//console.log(popUpp);
//console.log(popUp);
//console.log(dropDown);
const asyncRequestObject1 = new XMLHttpRequest();
const asyncRequestObject2 = new XMLHttpRequest();
const asyncRequestObject3 = new XMLHttpRequest();
const asyncRequestObject4 = new XMLHttpRequest();
const baseURL1 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
const baseURL2 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:147714790X';
const baseURL3 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:1887140638';
const baseURL4 = 'https://www.googleapis.com/books/v1/volumes?q=isbn:055305502X';

asyncRequestObject1.open('GET', baseURL1);
asyncRequestObject1.send();

asyncRequestObject2.open('GET', baseURL2);
asyncRequestObject2.send();

asyncRequestObject3.open('GET', baseURL3);
asyncRequestObject3.send();

asyncRequestObject4.open('GET', baseURL4);
asyncRequestObject4.send();

//console.log(asyncRequestObject1);
function handleSuccess1(){
  //console.log(asyncRequestObject.status);
  //console.log(asyncRequestObject.responseText)
  var ourObj1 = JSON.parse(asyncRequestObject1.responseText);
  //console.log(ourObj1);
    document.getElementById("A1Title").innerHTML = ourObj1.items[0].volumeInfo.title;
    document.getElementById("A1desc").innerHTML = ourObj1.items[0].searchInfo.textSnippet;
    document.getElementById("number1").innerHTML = ourObj1.items[0].volumeInfo.pageCount;
    document.getElementById("A1Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj1.items[0].volumeInfo.title;
    popUpp.innerHTML = ourObj1.items[0].volumeInfo.description;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj1.items[0].volumeInfo.previewLink;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }
document.getElementById("img1").src = ourObj1.items[0].volumeInfo.imageLinks.thumbnail;
}

//document.getElementById("A1Title").onclick=function(){console.log("Clicked!");}


function handleSuccess2(){
var ourObj2 = JSON.parse(asyncRequestObject2.responseText);
  //console.log(ourObj2);
    document.getElementById("A2Title").innerHTML = ourObj2.items[0].volumeInfo.title;
    document.getElementById("A2desc").innerHTML = ourObj2.items[0].searchInfo.textSnippet;
    document.getElementById("number2").innerHTML = ourObj2.items[0].volumeInfo.pageCount;
    document.getElementById("A2Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj2.items[0].volumeInfo.title;
    popUpp.innerHTML = ourObj2.items[0].volumeInfo.description;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj2.items[0].volumeInfo.previewLink;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }   
    document.getElementById("img2").src = ourObj2.items[0].volumeInfo.imageLinks.thumbnail;
}
function handleSuccess3(){
var ourObj3 = JSON.parse(asyncRequestObject3.responseText);
  //console.log(ourObj3);
    document.getElementById("A3Title").innerHTML = ourObj3.items[0].volumeInfo.title;
    document.getElementById("A3desc").innerHTML = ourObj3.items[0].searchInfo.textSnippet;
    document.getElementById("number3").innerHTML = ourObj3.items[0].volumeInfo.pageCount;
    document.getElementById("A3Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj3.items[0].volumeInfo.title;
    popUpp.innerHTML = ourObj3.items[0].volumeInfo.description;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj3.items[0].volumeInfo.previewLink;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }
    document.getElementById("img3").src = ourObj3.items[0].volumeInfo.imageLinks.thumbnail;
}
function handleSuccess4(){
var ourObj4 = JSON.parse(asyncRequestObject4.responseText);
  //console.log(ourObj4);
    document.getElementById("A4Title").innerHTML = ourObj4.items[0].volumeInfo.title;
    document.getElementById("A4desc").innerHTML = ourObj4.items[0].searchInfo.textSnippet;
    document.getElementById("number4").innerHTML = ourObj4.items[0].volumeInfo.pageCount;
    document.getElementById("A4Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj4.items[0].volumeInfo.title;
    popUpp.innerHTML = ourObj4.items[0].volumeInfo.description;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj4.items[0].volumeInfo.previewLink;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }
    document.getElementById("img4").src = ourObj4.items[0].volumeInfo.imageLinks.thumbnail;
}
function handleError(){
 console.log("Something went wrong")
}

asyncRequestObject1.onload = handleSuccess1;
asyncRequestObject1.onerror = handleError;
asyncRequestObject2.onload = handleSuccess2;
asyncRequestObject2.onerror = handleError;
asyncRequestObject3.onload = handleSuccess3;
asyncRequestObject3.onerror = handleError;
asyncRequestObject4.onload = handleSuccess4;
asyncRequestObject4.onerror = handleError;
//console.log(asyncRequestObject);
}