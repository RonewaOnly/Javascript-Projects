const jokeContainer = document.getElementById('joke_container');
const jokebtn = document.getElementById('joke_btn');

const API = 'https://icanhazdadjoke.com/';
getJoke();
async function getJoke(){
    const res = await fetch(API,{
        headers:{
            'Accept': 'application/json'
        }
    });
    const date = await res.json();
    jokeContainer.innerHTML = date.joke;
};
jokebtn.addEventListener('click',getJoke);