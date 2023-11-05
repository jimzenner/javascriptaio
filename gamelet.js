const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let hposition = 0;
let vposition = 0;

function handleKeyPress(e) {
    if (e.code === 'Numpad4') {
        hposition = hposition - 10;
    }
    if (e.code === 'Numpad6') {
        hposition = hposition + 10;
    }
    if (e.code === 'Numpad2') {
        vposition = vposition + 10;
    }
    if (e.code === 'Numpad8') {
        vposition = vposition - 10;
    }
    if (hposition < 0) {
        hposition = 0;
    } 
    if (vposition < 0) {
        vposition = 0;
    } 
    refresh();
}
function refresh( ) {
    ball.style.left = hposition + 'px';
    ball.style.top = vposition + 'px';
}