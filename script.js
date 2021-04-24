let main = document.querySelector('.main');
function moveLeft(){
    let left = parseInt(window.getComputedStyle(main).getPropertyValue("left"));
    left -= 120;
    if(left>=0){
        main.style.left = left + 'px';
    }
}
function moveRight(){
    let left = parseInt(window.getComputedStyle(main).getPropertyValue("left"));
    left += 120;
    if(left<=240){
        main.style.left = left + 'px';
    }
}

window.addEventListener('keydown', (event) => {
    if(event.key === 'a'){
        moveLeft();
    }
    if(event.key === 'd'){
        moveRight();
    }
})
let obs = document.querySelector('.obstacle');
function start(){
    document.querySelector('.startMenu').style.display= 'none';
    document.querySelector('.obstacle').classList.add('start');
}
function start2(){
    document.querySelector('.end').style.display= 'none';
    score = 0;
    document.querySelector('.obstacle').classList.add('start');

}
var score = 0;
obs.addEventListener('animationiteration', ()=>{
    let random = Math.floor((Math.random() * 3));
    left = random * 120;
    obs.style.left = left + 'px';
    score += 1;
})
function checkCollide(){
    let obsCheckTop = parseInt(window.getComputedStyle(obs).getPropertyValue('top'));
    let obsCheckLeft = parseInt(window.getComputedStyle(obs).getPropertyValue('left'));
    let mainCheckLeft = parseInt(window.getComputedStyle(main).getPropertyValue('left'));
    let mainCheckTop = parseInt(window.getComputedStyle(main).getPropertyValue('top'));
    // console.log(obsCheckBottom);
    if(obsCheckTop>(mainCheckTop-120)&&(obsCheckLeft==mainCheckLeft)){
        document.querySelector('.end').style.display = 'inline-block';
        document.getElementById('score').innerHTML = `Your score is ${score} points`
        document.querySelector('.obstacle').classList.remove('start')
    }
}
document.getElementById('left').addEventListener('touchstart',moveLeft());
document.getElementById('right').addEventListener('touchstart',moveRight());
setInterval(checkCollide,1);
setTimeout(() => {
    obs.style.animationDuration = '1s';
}, 15000);
setTimeout(() => {
    obs.style.animationDuration = '0.8s';
}, 40000);
setTimeout(() => {
    obs.style.animationDuration = '0.5s';
}, 60000);
setTimeout(() => {
    obs.style.animationDuration = '0.2s';
}, 80000);
