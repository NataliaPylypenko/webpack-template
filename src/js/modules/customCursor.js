function customCursor() {
    const dot = document.getElementById('cursor'),
        outline = document.getElementById('aura'),
        links = document.getElementsByTagName('a');

    let delay = 10,
        outX = 0,
        outY = 0,
        mouseX = 0,
        mouseY = 0;

    // Anchor hovering
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            dot.classList.add('active');
            outline.classList.add('active');
        });

        links[i].addEventListener('mouseout', () => {
            dot.classList.remove('active');
            outline.classList.remove('active');
        });
    }

    // Click events
    document.addEventListener('mousedown', function() {
        dot.classList.add('active');
        outline.classList.add('active');
    });
    document.addEventListener('mouseup', function() {
        dot.classList.remove('active');
        outline.classList.remove('active');
    });

    // Hide/show cursor
    document.addEventListener('mousemove', e => {
        // Position the dot
        mouseX = e.pageX;
        mouseY = e.pageY;
        dot.setAttribute("style", "top: "+mouseY+"px; left: "+mouseX+"px;");

        dot.classList.remove('hidden');
        outline.classList.remove('hidden');
    });
    document.addEventListener('mouseout', () => {
        dot.classList.add('hidden');
        outline.classList.add('hidden');
    });

    function animateDotOutline() {
        outX += (mouseX - outX) / delay;
        outY += (mouseY - outY) / delay;

        outline.setAttribute("style", "top: "+outY+"px; left: "+outX+"px;");

        requestAnimationFrame(animateDotOutline);
    }
    animateDotOutline();
}

export default customCursor;