const inputPx = document.getElementById('input-px');
const inputEm = document.getElementById('input-em');

const pxToEm = ()=>{
    const pxVal = inputPx.value;
    if(pxVal.length != 0){
        inputEm.value = parseFloat(pxVal) / 16;
    }else{
        inputEm.value ="";
    }
}

const EmToPx = ()=>{
    const emVal = inputEm.value;
    if(emVal.length != 0){
        inputPx.value = parseFloat(emVal) * 16;
    }else{
        inputPx.value ="";
    }
}
inputPx.oninput = pxToEm;
inputEm.oninput = EmToPx;