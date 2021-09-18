if(window.location.href.includes("menu")){
    console.log("Hello World")
    let cardElems = document.querySelectorAll(".card");
    cardElems.forEach((elem)=>{
        elem.style.opacity="1"
        elem.style.marginTop="0px"
    })
}