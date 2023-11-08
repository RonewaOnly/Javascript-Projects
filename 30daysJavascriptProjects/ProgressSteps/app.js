const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bullets = document.querySelectorAll('.bullet');

const MAX_STEPS = 4;
let currentStepIndex = 1;

nextBtn.addEventListener('click',()=>{
    const currentBullet = bullets[currentStepIndex-1];
    currentBullet.classList.add('completed');
    currentStepIndex++;

    prevBtn.disabled = false;

    if(currentStepIndex === MAX_STEPS){
        nextBtn.disabled = true;
    }
});
prevBtn.addEventListener('click',()=>{
    const currentBullet = bullets[currentStepIndex-1];
    currentBullet.classList.remove('completed');
    currentStepIndex--;

    prevBtn.disabled = false;

    if(currentStepIndex === 1){
        nextBtn.disabled = false;
    }
});