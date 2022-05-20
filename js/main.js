//RANDOM POKE
const rare = [3,6,9,26,31,34,38,45,59,62,65,68,71,76,94,115,131,132,137,139,141,142,143,149,154,157,160,169,175,176,181,201,208,212,214,227,230,233,242,248,254,257,260,272,275,282,286,289,292,295,306,319,321,330,334,357,365,373,376]
const legendary = [144,145,146,150,151,243,244,245,249,250,251,377,378,379,380,381,382,383,384,385,386]

// PULL POKEMON
let id
let box = document.createElement("div")
let pokemon_types = document.querySelector(".pokemon__types")
function pull(min) {
    id = Math.floor(Math.random() * (386)) + 1
    if(min <= 25) {
        if (rare.indexOf(id, 0)!= - 1 || legendary.indexOf(id, 0)!= - 1) {
            pull(min)
        }
        else {
            fetchPokemon()
        }
    }
    else if (min >= 26 & min <= 49) {
        if (legendary.indexOf(id, 0)!= - 1) {
            pull(min)
        }
        else {
            fetchPokemon()
        }
    }
    else {
        fetchPokemon()
    }
    function fetchPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(url)
            .then(response => response.json())
            .then(pokemon => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                let name = pokemon.name
                let img
                let soundPokemon = `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`
                if (!three3d_active) {
                    if (id<=9) {
                        id = `00${id}`
                    }
                    else if (id<=99) {
                        id = `0${id}`
                    }
                    img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
                }
                else {
                    img = `https://professorlotus.com/Sprites/${name}.gif`
                }
                document.querySelector("#pokemon--id").innerHTML = `ID: ${id}`
                document.querySelector(".pokemon__image").innerHTML = `
                <img id="pokemon--img" src="${img}" alt="Pokemon Image"/>`
                document.querySelector("#pokemon--name").innerHTML = `${name}`
                if (types.length==2) {
                    box.setAttribute("class", "pokemon--types")
                    pokemon_types.appendChild(box)
                }
                let box_types = document.querySelectorAll(".pokemon--types")
                for (let i=0; i<types.length; i++) {
                    if (types[i]=="electric") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#EED535"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="grass") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#729F3F"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="bug") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#729F3F"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="dark") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#585978"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="dragon") {
                        box_types[i].style.color = "white"
                        box_types[i].style.background = "linear-gradient(to bottom, #53A4CF 0%, #53A4CF 50%, #F16E57 51%, #F16E57 100%)"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="fairy") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#FDB9E9"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="fighting") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#E3612F"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="fire") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#FD7D24"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="flying") {
                        box_types[i].style.color = "black"
                        box_types[i].style.background = "linear-gradient(to bottom, #3DC7EF 0%, #3DC7EF 50%, #39C294 51%, #39C294 100%)"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="ghost") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#946994"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="ground") {
                        box_types[i].style.color = "black"
                        box_types[i].style.background = "linear-gradient(to bottom, #F7DE3F 0%, #F7DE3F 50%, #AB9842 51%, #AB9842 100%)"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="ice") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#B97FC9"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="normal") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#A4ACAF"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="poison") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#9867E4"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="psychic") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#F366B9"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="rock") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#8E4125"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="steel") {
                        box_types[i].style.color = "black"
                        box_types[i].style.backgroundColor = "#9EB7B8"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                    else if (types[i]=="water") {
                        box_types[i].style.color = "white"
                        box_types[i].style.backgroundColor = "#4592C4"
                        box_types[i].innerHTML = `${types[i]}`
                    }
                }
            })
    }
}

//Onload Function
let body = document.body
window.addEventListener("load", onLoad => {
    timerPomodoro()
})

//Background
let date = new Date()
let hours = date.getHours()
if (hours >= 6 && hours < 18) {
    body.style.backgroundImage = "url('images/backgrounds/day/background-day2.gif')"
}
else {
    body.style.backgroundImage = "url('images/backgrounds/night/background-night1.gif')"
}

//Menu Hamburguer
let verify_width
let nav_menu = document.querySelector(".menu__dropdown")
let active_menu = false
let menu_hamburguer = document.querySelector("#checkbox--hamburguer")
menu_hamburguer.addEventListener("click", activeMobileMenu)
function activeMobileMenu() {
    if (!active_menu) {
        active_menu = true
        hamburguerAnimation(true)
        nav_menu.style.transition = "1s ease-in-out"
        nav_menu.style.visibility = "visible"
        nav_menu.style.opacity = "1"
        clearInterval(verify_width)
    }
    else {
        active_menu = false
        hamburguerAnimation(false)
        nav_menu.style.transition = "1s ease-in-out"
        nav_menu.style.visibility = "hidden"
        nav_menu.style.opacity = "0"
        verify_width = setInterval(verifyWidth, 100)
    }
}

function hamburguerAnimation(check) {
    let menu_bar1 = document.querySelector("#menu--bar1")
    let menu_bar2 = document.querySelector("#menu--bar2")
    let menu_bar3 = document.querySelector("#menu--bar3")
    if (check) {
        menu_bar1.setAttribute("style", "transform:rotate(-45deg);top:8px;")
        menu_bar2.setAttribute("style", "opacity:0;")
        menu_bar3.setAttribute("style", "transform:rotate(45deg);top:8px;")
    }
    else {
        menu_bar1.setAttribute("style", "top:0px;")
        menu_bar2.setAttribute("style", "top:6px;")
        menu_bar3.setAttribute("style", "top:12px;")
    }
}

function verifyWidth() {
    let width = innerWidth
    if (width > 600) {
        nav_menu.style.transition = "none"
        nav_menu.style.visibility = "visible"
        nav_menu.style.opacity = "1"
    }
    else {
        nav_menu.style.transition = "1s ease-in-out"
        nav_menu.style.visibility = "hidden"
        nav_menu.style.opacity = "0"
    }
}

//Settings
let btn_setting = document.querySelector("#btn--setting")
btn_setting.addEventListener("click", openSettings)
let close_settings = document.querySelector("#close--settings")
close_settings.addEventListener("click", closeSettings)
let settings = document.querySelector(".settings")

let pomodoro_min = Number(document.querySelector("#timer-pomodoro").value)
let short_brk_min = Number(document.querySelector("#timer-short-brk").value)
let long_brk_min = Number(document.querySelector("#timer-long-brk").value)
let repeat_value = Number(document.querySelector("#repeat-number").value)
let pomodoro_min_last
let short_brk_min_last
let long_brk_min_last
let min_values

function openSettings() {
    activeMobileMenu()
    settings.style.display = "flex"
    pomodoro_min_last = pomodoro_min
    short_brk_min_last = short_brk_min
    long_brk_min_last = long_brk_min
    min_values = setInterval(receiveValues, 1)
}

function closeSettings() {
    if (pomodoro_min < 1 || pomodoro_min > 60 || short_brk_min < 1 || short_brk_min > 30 || long_brk_min < 15 || long_brk_min > 60 || repeat_value < 1 || repeat_value > 100) {
        settings.style.display = "flex"
    }
    else {
        clearInterval(min_values)
        settings.style.display = "none"
        if (pomodoro_min != pomodoro_min_last || short_brk_min != short_brk_min_last || long_brk_min != long_brk_min_last) {
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
    }
}

function receiveValues() {
    repeat_value = Number(document.querySelector("#repeat-number").value)
    pomodoro_min = Number(document.querySelector("#timer-pomodoro").value)
    short_brk_min = Number(document.querySelector("#timer-short-brk").value)
    long_brk_min = Number(document.querySelector("#timer-long-brk").value)
    let pomodoro_alert = document.querySelector(".minutes__pomodoro--alert")
    let short_brk_alert = document.querySelector(".minutes__short-brk--alert")
    let long_brk_alert = document.querySelector(".minutes__long-brk--alert")
    let repeat_alert = document.querySelector(".alarm__repeat--alert")
    if (repeat_value < 1 || repeat_value > 100) {
        repeat_alert.style.display = "flex"
    }
    else {
        repeat_alert.style.display = "none"
    }
    if (pomodoro_min < 1 || pomodoro_min > 60) {
        pomodoro_alert.style.display = "flex"
    }
    else {
        pomodoro_alert.style.display = "none"
    }
    if (short_brk_min < 1 || short_brk_min > 30) {
        short_brk_alert.style.display = "flex"
    }
    else {
        short_brk_alert.style.display = "none"
    }
    if (long_brk_min < 15 || long_brk_min > 60) {
        long_brk_alert.style.display = "flex"
    }
    else {
        long_brk_alert.style.display = "none"
    }
}

//Active Buttons Settings
let break_active = false
let break_format = document.querySelector("#break__format")
break_format.addEventListener("click", autoBreak => {
    let break_input = document.querySelector("#auto-start-break")
    if (!break_active) {
        break_active = true
        break_input.style.transform = "translate(28px, 0px)"
        break_format.style.backgroundColor = "rgb(30, 156, 30)"
    }
    else {
        break_active = false
        break_input.style.transform = "translate(0px, 0px)"
        break_format.style.backgroundColor = "gray"
    }
})

let pomodoro_active = false
let pomodoro_format = document.querySelector("#pomodoro__format")
pomodoro_format.addEventListener("click", autoPomodoro => {
    let pomodoro_input = document.querySelector("#auto-start-pomodoro")
    if (!pomodoro_active) {
        pomodoro_active = true
        pomodoro_input.style.transform = "translate(28px, 0px)"
        pomodoro_format.style.backgroundColor = "rgb(30, 156, 30)"
    }
    else {
        pomodoro_active = false
        pomodoro_input.style.transform = "translate(0px, 0px)"
        pomodoro_format.style.backgroundColor = "gray"
    }
})

let three3d_active = false
let format_3d = document.querySelector("#format__3d")
format_3d.addEventListener("click", active3DPokemon => {
    let input_3d = document.querySelector("#input-3d")
    if (!three3d_active) {
        three3d_active = true
        input_3d.style.transform = "translate(28px, 0px)"
        format_3d.style.backgroundColor = "rgb(30, 156, 30)"
    }
    else {
        three3d_active = false
        input_3d.style.transform = "translate(0px, 0px)"
        format_3d.style.backgroundColor = "gray"
    }
})

//Alarm Sounds Settings
let alarm_dropdown = document.querySelector(".alarm__dropdown")
let dropdown_active = false
let alarm_input = document.querySelector(".alarm__input")
alarm_input.addEventListener("click", alarmDropdown => {
    if (dropdown_active) {
        alarm_dropdown.style.display = "none"
        dropdown_active = false
    }
    else {
        alarm_dropdown.style.display = "block"
        dropdown_active = true
    }
})

let alarm_active = document.querySelector("#alarm--active")
let alarm_options  = document.querySelectorAll("div#fire-red--alarm, div#kitchen--alarm")
alarm_active.innerHTML = alarm_options[0].innerHTML
for (let i=0; i<alarm_options.length; i++) {
    alarm_options[i].addEventListener("click", chooseAlarm => {
        alarm_active.innerHTML = alarm_options[i].innerHTML
    })
}

let volume_bar = document.querySelector("#volume--bar")
let volume_value = document.querySelector("#volume--value")
volume_value.innerHTML = volume_bar.value
setInterval(volumeSound, 1)
function volumeSound() {
    volume_value.innerHTML = volume_bar.value
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
let confirme

function timerPomodoro() {
    if (running_timer) {
        confirme = confirm("The timer is still running, are you sure you want to switch?")
        if (confirme) {
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
    }
    else {
        pomodoro.style.backgroundColor = "#1616167e"
        short_brk.style.background = "none"
        long_brk.style.background = "none"
        pomodoro_option = true
        short_brk_option = false
        long_brk_option = false
        min = pomodoro_min
        sec = 0
        clearInterval(rotate_pokebola)
        btn_pokebola.removeEventListener("click", openPokebola)
        btn_pokebola.style.cursor = "default"
        btn_pokebola.style.transform = `rotate(0deg)`
        pomodoroStop()
        clockTimer(pomodoro_min)
    }
}

function timerShortBrk() {
    if (running_timer) {
        confirme = confirm("The timer is still running, are you sure you want to switch?")
        if (confirme) {
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
    }
    else {
        short_brk.style.backgroundColor = "#1616167e"
        pomodoro.style.background = "none"
        long_brk.style.background = "none"
        short_brk_option = true
        pomodoro_option = false
        long_brk_option = false
        min = short_brk_min
        sec = 0
        clearInterval(rotate_pokebola)
        btn_pokebola.removeEventListener("click", openPokebola)
        btn_pokebola.style.cursor = "default"
        btn_pokebola.style.transform = `rotate(0deg)`
        pomodoroStop()
        clockTimer(short_brk_min)
    }
}

function timerLongBrk() {
    if (running_timer) {
        confirme = confirm("The timer is still running, are you sure you want to switch?")
        if (confirme) {
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
    }
    else {
        long_brk.style.backgroundColor = "#1616167e"
        short_brk.style.background = "none"
        pomodoro.style.background = "none"
        long_brk_option = true
        pomodoro_option = false
        short_brk_option = false
        min = long_brk_min
        sec = 0
        clearInterval(rotate_pokebola)
        btn_pokebola.removeEventListener("click", openPokebola)
        btn_pokebola.style.cursor = "default"
        btn_pokebola.style.transform = `rotate(0deg)`
        pomodoroStop()
        clockTimer(long_brk_min)
    }
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
        running_timer = false
        if (pomodoro_option) {
            let posi = 0
            rotate_pokebola = setInterval(rotatePokebola => {
                posi+=5
                btn_pokebola.style.transform = `rotate(${posi}deg)`
            }, 10)
            btn_pokebola.addEventListener("click", openPokebola)
            btn_pokebola.style.cursor = "pointer"
        }
        else {
            timerPomodoro()
            if (pomodoro_active) {
                pomodoroStart()
            }
        }
    }
}

let count_breaks = 0
function openPokebola() {
    clearInterval(rotate_pokebola)
    pull(pomodoro_min)
    btn_pokebola.removeEventListener("click", openPokebola)
    btn_pokebola.style.cursor = "default"
    btn_pokebola.style.transform = `rotate(0deg)`
    let pokemon_container = document.querySelector(".pokemon-container")
    pokemon_container.style.display = "flex"
    let close_container = document.querySelector("#close--pokemon-container")
    close_container.addEventListener("click", closePoketainer => {
        running_timer = false
        pokemon_container.style.display = "none"
        box.removeAttribute("class")
        pokemon_types.removeChild(box)
        if (count_breaks < 4) {
            timerShortBrk()
            count_breaks++
        }
        else {
            timerLongBrk()
            count_breaks = 0
        }
        if (break_active) {
            pomodoroStart()
        }
    })
}

openPokebola()