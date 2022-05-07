import './random.pok.js';

let btn_start = document.querySelector("#button__start")
btn_start.addEventListener("click", pomodoroStart)
let btn_stop = document.querySelector("#button__stop")
btn_stop.addEventListener("click", pomodoroStop)

let timer
let timer_number = document.querySelector("#timer--number")

let min = 0
let sec = 10
let sec_string = `0${sec}`
let min_string = `${min}`
timer_number.innerHTML = `${min_string}:${sec_string}`

let btn_pokebola = document.querySelector("#pokebola--icon")
let rotate_pokebola

function pomodoroStart() {
    timer = setInterval(runsTimer, 1000)
    btn_start.removeEventListener("click", pomodoroStart, false)
}

function pomodoroStop() {
    clearInterval(timer)
    btn_start.addEventListener("click", pomodoroStart)
}

function runsTimer() {
    if (sec==0) {
        sec = 60
    }
    if (sec==60) {
        min--
    }
    sec--
    if (sec<10) {
        sec_string = `0${sec}`
    }
    else {
        sec_string = `${sec}`
    }
    if (min<10) {
        min_string = `0${min}`
    }
    else {
        min_string = `${min}`
    }
    timer_number.innerHTML = `${min_string}:${sec_string}`

    if (min==0 && sec==0) {
        clearInterval(timer)
        let posi = 0
        rotate_pokebola = setInterval(rotatePokebola => {
            posi+=2
            btn_pokebola.style.transform = `rotate(${posi}deg)`
        }, 10)
        btn_pokebola.addEventListener("click", openPokebola)
        btn_pokebola.style.cursor = "pointer"
    }
}

function openPokebola() {
    clearInterval(rotate_pokebola)
    btn_pokebola.removeEventListener("click", openPokebola)
    btn_pokebola.style.cursor = "default"
    btn_pokebola.style.transform = `rotate(0deg)`
    let pokemon_container = document.querySelector(".pokemon-container")
    pokemon_container.style.display = "flex"
    let close_container = document.querySelector("#close--pokemon-container")
    close_container.addEventListener("click", closePoketainer => {
        pokemon_container.style.display = "none"
    })
}
