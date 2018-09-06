var omdb = function() {
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
const baseURL1 = 'https://www.omdbapi.com/?apikey=1fc4ac92&i=tt3896198';
const baseURL2 = 'https://www.omdbapi.com/?apikey=1fc4ac92&i=tt0107290';
const baseURL3 = 'https://www.omdbapi.com/?apikey=1fc4ac92&i=tt0295701';
const baseURL4 = 'https://www.omdbapi.com/?apikey=1fc4ac92&i=tt0952640';

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
  console.log(ourObj1);
    document.getElementById("A1Title").innerHTML = ourObj1.Title;
    document.getElementById("A1desc").innerHTML = ourObj1.Genre;
    document.getElementById("number1").innerHTML = ourObj1.BoxOffice;
    document.getElementById("A1Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj1.Title;
    popUpp.innerHTML = ourObj1.Plot;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj1.Website;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }

}

//document.getElementById("A1Title").onclick=function(){console.log("Clicked!");}


function handleSuccess2(){
var ourObj2 = JSON.parse(asyncRequestObject2.responseText);
  //console.log(ourObj2);
    document.getElementById("A2Title").innerHTML = ourObj2.Title;
    document.getElementById("A2desc").innerHTML = ourObj2.Genre;
    document.getElementById("number2").innerHTML = ourObj2.BoxOffice;
    document.getElementById("A2Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj2.Title;
    popUpp.innerHTML = ourObj2.Plot;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj2.Website;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }   
}
function handleSuccess3(){
var ourObj3 = JSON.parse(asyncRequestObject3.responseText);
  //console.log(ourObj3);
    document.getElementById("A3Title").innerHTML = ourObj3.Title;
    document.getElementById("A3desc").innerHTML = ourObj3.Genre;
    document.getElementById("number3").innerHTML = ourObj3.BoxOffice;
    document.getElementById("A3Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj3.Title;
    popUpp.innerHTML = ourObj3.Plot;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj3.Website;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }
}
function handleSuccess4(){
var ourObj4 = JSON.parse(asyncRequestObject4.responseText);
  //console.log(ourObj4);
    document.getElementById("A4Title").innerHTML = ourObj4.Title;
    document.getElementById("A4desc").innerHTML = ourObj4.Genre;
    document.getElementById("number4").innerHTML = ourObj4.BoxOffice;
    document.getElementById("A4Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj4.Title;
    popUpp.innerHTML = ourObj4.Plot;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj4.Website;
        }
    }
    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }
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
document.getElementById("img1").src = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg";
document.getElementById("img2").src = "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg";
document.getElementById("img3").src = "https://m.media-amazon.com/images/M/MV5BNzZjZmM1ZDctNDhlZi00Mzk1LWFjNWItYzIxNGY2OWYzYjJmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg";
document.getElementById("img4").src = "https://m.media-amazon.com/images/M/MV5BMjdmNWY4MjItMjBiMi00MWNiLWI0ZjctYzBjZmEzOGRmNTc5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";

}