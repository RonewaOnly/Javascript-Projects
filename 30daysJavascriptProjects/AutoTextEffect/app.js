const text = document.getElementById('heading');
const prog = 'I have finished the 30 days of javascript.😍😑';
let idx =1 ;

setInterval(typeWriter,150);

function typeWriter() {
    text.innerHTML = prog.slice(0,idx);
    idx++;
}

