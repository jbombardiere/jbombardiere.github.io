let mainImg = document.getElementById("firstImg");
let imgList = ["Images/DummyImage2.png","Images/OsciliscopeCircuit.jpg","Images/speakerCircuit.jpg","Images/ArduinoCircuit.jpg","Images/OverdriveCircuit2.jpg"];

let proj = document.getElementById("projButton");

let num = 0;
let switchAmt = 5 //in seconds

setInterval(() =>{
    num = (num + 1) % imgList.length;
    mainImg.src = imgList[num];
    
}, switchAmt*1000);