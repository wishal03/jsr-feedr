var guardian = function() {
    var dropDown = document.getElementById("dropDown");
var popUp = document.getElementById("popUp");
var popUpH1 = document.getElementById("popUpH1");
var popUpp = document.getElementById("popUpp");
//console.log(dropDown);
const asyncRequestObject = new XMLHttpRequest();
const baseURL = 'https://content.guardianapis.com/search?api-key=20b7cc14-5ab3-4aee-9911-ae35f7424719&show-fields=,wordcount,thumbnail&show-blocks=body:latest';
asyncRequestObject.open('GET', baseURL);
asyncRequestObject.send();

//console.log(asyncRequestObject);

function handleSuccess(){
  //console.log(asyncRequestObject.status);
  //console.log(asyncRequestObject.responseText)
  var ourObj = JSON.parse(asyncRequestObject.responseText);
  //console.log(ourObj.response);
    document.getElementById("A1Title").innerHTML = ourObj.response.results[0].webTitle;
    document.getElementById("A1desc").innerHTML = ourObj.response.results[0].sectionName;
    document.getElementById("number1").innerHTML = ourObj.response.results[0].fields.wordcount;
    document.getElementById("A1Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj.response.results[0].webTitle;
    popUpp.innerHTML = ourObj.response.results[0].blocks.requestedBodyBlocks[ 'body:latest' ][0].bodyHtml;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj.response.results[0].webUrl;
        }
    }

console.log(ourObj.response.results[0].webUrl);
    //console.log(ourObj.response.results[0].blocks.requestedBodyBlocks[ 'body:latest' ][0].bodyHtml);
                
    document.getElementById("A2Title").innerHTML = ourObj.response.results[1].webTitle;
    document.getElementById("A2desc").innerHTML = ourObj.response.results[1].sectionName;
    document.getElementById("number2").innerHTML = ourObj.response.results[1].fields.wordcount;
    document.getElementById("A2Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj.response.results[1].webTitle;
    popUpp.innerHTML = ourObj.response.results[1].blocks.requestedBodyBlocks[ 'body:latest' ][0].bodyHtml;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj.response.results[1].webUrl;
        }
    }
    
    document.getElementById("A3Title").innerHTML = ourObj.response.results[2].webTitle;
    document.getElementById("A3desc").innerHTML = ourObj.response.results[2].sectionName;
    document.getElementById("number3").innerHTML = ourObj.response.results[2].fields.wordcount;
    document.getElementById("A3Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj.response.results[2].webTitle;
    popUpp.innerHTML = ourObj.response.results[2].blocks.requestedBodyBlocks[ 'body:latest' ][0].bodyHtml;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj.response.results[2].webUrl;
        }
    }
    
    document.getElementById("A4Title").innerHTML = ourObj.response.results[3].webTitle;
    document.getElementById("A4desc").innerHTML = ourObj.response.results[3].sectionName;
    document.getElementById("number4").innerHTML = ourObj.response.results[3].fields.wordcount;
    document.getElementById("A4Title").onclick=function(){
    popUp.className="container";
    popUpH1.innerHTML = ourObj.response.results[3].webTitle;
    popUpp.innerHTML = ourObj.response.results[3].blocks.requestedBodyBlocks[ 'body:latest' ][0].bodyHtml;
    document.getElementById("RMFS").onclick=function(){
    RMFS.href=ourObj.response.results[3].webUrl;
        }
    }
    
    document.getElementById("img1").src = ourObj.response.results[0].fields.thumbnail;
    document.getElementById("img2").src = ourObj.response.results[1].fields.thumbnail;
    document.getElementById("img3").src = ourObj.response.results[2].fields.thumbnail;
    document.getElementById("img4").src = ourObj.response.results[3].fields.thumbnail;

    document.getElementById("popUpClose").onclick=function(){
    popUp.className="hidden";
    }

}

function handleError(){
console.log("Something went wrong")
}

asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
}