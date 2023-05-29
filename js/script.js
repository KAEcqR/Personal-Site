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

const bgMusic = document.querySelector(".background-music")
bgMusic.volume = 0.2

const birds = document.querySelector(".birds")
birds.volume = 0.5

const river = document.querySelector(".river")
river.volume = 1.0

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    
    if (bgMusic.volume === 0.2){
        bgMusic.volume = 0.07
    } else {
        bgMusic.volume = 0.0
    }
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";

    if (bgMusic.volume === 0.07){
        bgMusic.volume = 0.2
    } else {
        bgMusic.volume = 0.0
    }
}

document.querySelector(".mute").addEventListener("click", () => {
    if (bgMusic.volume === 0.2){
        bgMusic.volume = 0.0
        document.querySelector(".mute").innerHTML = "UNMUTE"
    } else {
        bgMusic.volume = 0.2
        document.querySelector(".mute").innerHTML = "MUTE"
    }
})
