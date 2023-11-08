const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92'];

const container = document.getElementById('container');
const SQUARES_NR = 300;

for(let i =0; i < SQUARES_NR;i++){
    const squre = document.createElement('div');
    squre.classList.add('squre');
    squre.addEventListener('mouseover',()=>{
        setcolorE1(squre);
    });
    squre.addEventListener('mouseout',()=>{
        removecolorE1(squre);
    });
    container.appendChild(squre);
}
function setcolorE1(e){
    const color = getRandomColor();
    e.style.backgroundColor=color;
    e.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}
function removecolorE1(e){
    e.style.background=`#111111`;
    e.style.boxShadow = `0 0 2px #fff`;
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}