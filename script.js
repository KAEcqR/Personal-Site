const parallax_el = document.querySelectorAll(".parallax")
const main = document.querySelector("main")

let xValue = 0
let yValue = 0

let rotateDegree = 0
parallax_el.forEach((el) => {
    el.style.transform = `translate(-50%, -50%)`
})

function update(cursorposition) {
    parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx
    let speedy = el.dataset.speedy
    let speedz = el.dataset.speedz

    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorposition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1

    el.style.transform = `
    translateX(calc(-50% + ${-xValue * speedx}px)) 
    translateY(calc(-50% + ${yValue * speedy}px))
    rotateY(${rotateDegree}deg)
    perspective(2000px)
    translateZ(calc(${zValue * speedz}px))`
    })
}

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth  / 2
    yValue = e.clientY - window.innerHeight / 2

    rotateDegree = (xValue / (window.innerWidth  / 2) * 10 )
    
    update(e.clientX)
})

if(window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`
}else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`
}

const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    { repeat: 999, duration: 3000, yoyo: true}
)

tween.start()