const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    { repeat: 999, duration: 3000, yoyo: true}
)

tween.start()

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}  

function update() {

    let blob = document.querySelector("#blob1")
    blob.style.transform = `
    translateX(calc(${xValue * 0.05}px)) 
    translateY(calc(${yValue * 0.05}px))
    `
}

v