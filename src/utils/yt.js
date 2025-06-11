import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    // Remove the type assertion and non-null operator
    const interBubble = document.querySelector('.interactive');
    
    // Add null check
    if (!interBubble) {
        console.error('Interactive element not found!');
        return;
    }

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move); // Simplified this line
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});