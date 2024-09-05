let menuBar = document.getElementById('menuBar');
let component = document.getElementById('component');
let swipeIcon = document.getElementById('swipeIcon');

function getBar() {
    // menuBar.onclick = () =>  {      Reserve
        component.style.left = '0';
        swipeIcon.classList.add('anmation-swipe-i')
        swipeIcon.style.opacity = '1';
    // }
}

swipeIcon.onclick = function() {
    component.style.left = '-100%';
    swipeIcon.classList.remove('anmation-swipe-i')
    swipeIcon.style.opacity = '0';
}

window.onload = function() {
    // getBar()  Reserve
}