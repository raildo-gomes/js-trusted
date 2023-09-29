function turnOnOrOff(){

    let img = document.getElementById("img");
    let htmlbody = document.body
    if(img.src.match("OFFLampada.jpg")){
    
        img.src = "ONLampada.jpg"
        htmlbody.style.background = "white"
        htmlbody.style.color = "black"
    } else{

        htmlbody.style.background = "black"
        htmlbody.style.color = "white"
        img.src = "OFFLampada.jpg"

    }
    

}

