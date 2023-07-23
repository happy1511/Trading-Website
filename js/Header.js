var open = 0

function toggleMenu() {
    const tag = document.getElementById('menu');

    if (open == 0) {
        tag.style.display = "inline-block"
        open = 1
        
    }
    else {
        tag.style.display = "none"
        open = 0
    }
    
}

