import './random.pok.js';

//Onload Function

window.addEventListener("load", onLoad => {
    timerPomodoro()
})

//Settings
let btn_setting = document.querySelector("#btn--setting")
btn_setting.addEventListener("click", openSettings)
let close_settings = document.querySelector("#close--settings")
close_settings.addEventListener("click", closeSettings)
let settings = document.querySelector(".settings")

let pomodoro_min = Number(document.querySelector("#timer-pomodoro").value)
let short_brk_min = Number(document.querySelector("#timer-short-brk").value)
let long_brk_min = Number(document.querySelector("#timer-long-brk").value)

function openSettings() {
    settings.style.display = "flex"
}

function closeSettings() {
    settings.style.display = "none"
    pomodoro_min = Number(document.querySelector("#timer-pomodoro").value)
    short_brk_min = Number(document.querySelector("#timer-short-brk").value)
    long_brk_min = Number(document.querySelector("#timer-long-brk").value)

    if (pomodoro_option) {
        timerPomodoro()
    }
    else if (short_brk_option) {
        timerShortBrk()
    }
    else if (long_brk_option) {
        timerLongBrk()
    }
}

//Timer Options
let pomodoro = document.querySelector("#modes--normal")
pomodoro.addEventListener("click", timerPomodoro)
let short_brk = document.querySelector("#modes--short-brk")
short_brk.addEventListener("click", timerShortBrk)
let long_brk = document.querySelector("#modes--long-brk")
long_brk.addEventListener("click", timerLongBrk)

let pomodoro_option = false
let short_brk_option = false
let long_brk_option = false

function timerPomodoro() {
    if (running_timer) {
        alert("The timer is still running, are you sure you want to switch?")
    }
    pomodoro.style.backgroundColor = "#1616167e"
    short_brk.style.background = "none"
    long_brk.style.background = "none"
    pomodoro_option = true
    short_brk_option = false
    long_brk_option = false
    min = pomodoro_min
    sec = 0
    pomodoroStop()
    clockTimer(pomodoro_min)
}

function timerShortBrk() {
    if (running_timer) {
        alert("The timer is still running, are you sure you want to switch?")
    }
    short_brk.style.backgroundColor = "#1616167e"
    pomodoro.style.background = "none"
    long_brk.style.background = "none"
    short_brk_option = true
    pomodoro_option = false
    long_brk_option = false
    min = short_brk_min
    sec = 0
    pomodoroStop()
    clockTimer(short_brk_min)
}

function timerLongBrk() {
    if (running_timer) {
        alert("The timer is still running, are you sure you want to switch?")
    }
    long_brk.style.backgroundColor = "#1616167e"
    short_brk.style.background = "none"
    pomodoro.style.background = "none"
    long_brk_option = true
    pomodoro_option = false
    short_brk_option = false
    min = long_brk_min
    sec = 0
    pomodoroStop()
    clockTimer(long_brk_min)
}

//Relógio
let btn_start = document.querySelector("#button--start")
btn_start.addEventListener("click", pomodoroStart)
let btn_stop = document.querySelector("#button--stop")
btn_stop.addEventListener("click", pomodoroStop)

let timer
let timer_number = document.querySelector("#timer--number")

let min
let sec = 0
let sec_string
let min_string
let running_timer = false

let btn_pokebola = document.querySelector("#pokebola--icon")
let rotate_pokebola

function clockTimer(min) {
    if (min<=9) {
        min_string = `0${min}`
    }
    else {
        min_string = `${min}`
    }
    
    if (sec <= 9){
        sec_string = `0${sec}`
    }
    else{
        sec_string = `${sec}`
    }
    timer_number.innerHTML = `${min_string}:${sec_string}`
}

function pomodoroStart() {
    timer = setInterval(runsTimer, 1000)
    btn_start.removeEventListener("click", pomodoroStart)
    running_timer = true
}

function pomodoroStop() {
    clearInterval(timer)
    btn_start.addEventListener("click", pomodoroStart)
    running_timer = false
}

function runsTimer() {
    if (sec==0) {
        sec = 60
    }
    if (sec==60) {
        min--
    }
    sec--
    clockTimer(min)

    if (min==0 && sec==0) {
        clearInterval(timer)
        let posi = 0
        rotate_pokebola = setInterval(rotatePokebola => {
            posi+=5

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
        document.location.reload(true)
    })
}
