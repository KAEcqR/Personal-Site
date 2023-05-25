const trailer = document.querySelector(".trailer")

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `
            translate(${x}px, ${y}px) 
            scale(${interacting ? 3:1})`
    }

    trailer.animate(keyframes, {
        duration: 500,
        fill: 'forwards'
    })
}

window.onmousemove = e => {
    const interactible = e.target.closest(".interactible"),
          interacting = interactible !== null

    animateTrailer(e, interacting)
}