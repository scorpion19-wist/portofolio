// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated foreground lines on mouse movement across the page
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) { // 10% chance to create lines on mouse move
        createAnimatedLine(Math.random() * window.innerHeight);
        createAnimatedLineVertical(Math.random() * window.innerWidth);
    }
});

function createAnimatedLine(y) {
    const line = document.createElement('div');
    line.className = 'animated-line';
    line.style.top = y + 'px';
    document.body.appendChild(line);

    // Remove the line after animation completes
    setTimeout(() => {
        if (line.parentNode) {
            line.parentNode.removeChild(line);
        }
    }, 3000);
}

function createAnimatedLineVertical(x) {
    const line = document.createElement('div');
    line.className = 'animated-line-vertical';
    line.style.left = x + 'px';
    document.body.appendChild(line);

    // Remove the line after animation completes
    setTimeout(() => {
        if (line.parentNode) {
            line.parentNode.removeChild(line);
        }
    }, 3000);
}
