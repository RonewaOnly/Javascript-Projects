function shuffle(){
    const img = document.getElementById('img');
    let random = Math.floor(Math.random()*6)+1;
    img.setAttribute("src",`assets/${random}.png`);
}
function ainm(){//this sets the animation of the dice rotate in a format of a gif
    setTimeout(shuffle,500);
    const img = document.getElementById('img');
    img.setAttribute("src",`assets/diceRoll.gif`);
}