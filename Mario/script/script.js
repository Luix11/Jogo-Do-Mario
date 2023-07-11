const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reset = document.querySelector('.restart');
const gameOver = document.querySelector('.gameOver');
const btn = document.querySelector('.btn');

var visorPontos = document.querySelector('.pontos');
var pontos = 0;

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    

    if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mariodead.webp';
        mario.style.width = '85px';
        mario.style.marginLeft = '20px';

        reset.style.display = 'flex';
        gameOver.style.display = 'flex';
        
        

        clearInterval(loop);

    }
    pontos +=  10;
    visorPontos.innerHTML = pontos;
}, 10)




document.addEventListener('keydown', jump);
btn.addEventListener('click', restart);

function restart(){
    localStorage.setItem('pontos',pontos)
    window.location ='./index.html';
}

onload = function (){
    
    var ponit = localStorage.getItem('pontos');
    if(ponit == null){
        ponit = 0;
    }
    console.log(ponit)
    var lista = document.querySelector('.lista');
    lista.innerHTML = `<li>${ponit}</li>`;
}