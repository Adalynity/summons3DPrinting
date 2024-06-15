function hideDad(){
    document.getElementById('card-front').style.visibility="hidden";
}
function placeCard(){
    document.getElementById('card-inside').style.zIndex="5";
    document.getElementById('card-inside').classList.toggle('place');
    setTimeout(hideDad, 725)
}
function openCard(){
    document.getElementById('card-inside').classList.toggle('open');
    console.log("is working");
    setTimeout(placeCard, 2500)
}

