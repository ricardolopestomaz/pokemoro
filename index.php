<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemoro - Pomodoro Timer with Pokemon</title>
    <link rel="shortcut icon" href="images/icons/pokebola-comum.svg" type="image/x-icon">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <!--============================= HEADER =============================-->
    <header class="header">
        <nav class="header__menu">
            <div class="menu__logo">
                <h1><a href="#" id="menu__home"><img src="images/icons/pokebola-comum.svg" alt="Icon Pokebola">Pokemoro</a></h1>
            </div>
            <div class="menu__nav">
                <div class="menu__hamburguer">
                    <input type="checkbox" name="" id="checkbox--hamburguer">
                    <label for="checkbox--hamburguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div class="menu__dropdown">
                    <ul class="menu__nav--opts">
                        <li>
                            <button onclick="setting()" class="button__a">
                                <a href="#" class="menu__links"><img src="images/icons/config-white.png" alt="Icon Config">Settings</a>
                            </button>
                        </li>
                        <li>
                            <a href="#" class="menu__links"><img src="images/icons/graph-white.png" alt="Icon Graph">Pokedex</a>
                        </li>
                        <li>
                            <a href="pages/login.html" class="menu__links"><img src="images/icons/user-white.png" alt="Icon Login User">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!--============================= DIV SETTINGS =============================-->
    <?php 
    (!empty($_GET['pagina'])?include(trim($_GET['pagina'])):include('./pages/setting.php'))
    ?>
    
    <div class="settings">
        <div class="settings__timer">
            <div class="settings__title">
                <h1>Timer Settings</h1>
                <button onclick="settingClose()" class="button__a""""">
                    <img src="images/icons/remove-black-sm.svg">
                </button>
            </div>
            <hr>
            <div class="settings__minutes">
                <h2>Time (minutes)</h2>
                <div class="settings__minutes--inputs">
                    <div class="minutes__pomodoro">
                        <h3>Pomodoro</h3>
                        <input type="number" min="1" value="25" step="1" name="" id="timer-pomodoro">
                    </div>
                    <div class="minutes__short-brk">
                        <h3>Short Break</h3>
                        <input type="number" min="1" value="5" step="1" name="" id="timer-short-brk">
                    </div>
                    <div class="minutes__long-brk">
                        <h3>Long Break</h3>
                        <input type="number" min="1" value="15" step="1" name="" id="timer-long-brk">
                    </div>
                </div>
            </div>
            <hr>
            <div class="settings__auto">
                <div class="auto__break">
                    <h2>Auto start Breaks?</h2>
                    <div class="break__format">
                        <div class="break__input"></div>
                    </div>
                </div>
                <hr>
                <div class="auto__pomodoro">
                    <h2>Auto start Pomodoros?</h2>
                    <div class="break__format">
                        <div class="break__input"></div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="settings__alarm">
                <div class="alarm__name">
                    <h2>Alarm Sound</h2>
                </div>
                <div class="alarm__config">
                    <div class="alarm__type">
                        <div class="alarm__input">
                            <span>Fire Red</span>
                            <img src="images/icons/down-arrow-black.png" alt="Icon Down Arrow">
                            <div class="alarm__dropdown">
                                <div id="fire-red--alarm">Fire Red</div>
                                <div id="kitchen--alarm">Kitchen</div>
                            </div>
                        </div>
                    </div>
                    <div class="alarm__sound">
                        <span>0</span>
                        <input type="range" min="0" max="100" value="0" name="" id="">
                    </div>
                    <div class="alarm__repeat">
                        <span>repeat</span>
                        <input type="number" name="" id="repeat-number" value="1">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pokemon-container">
        <div class="pokemon__window">
            <div class="pokemon__header">
                <img id="close--pokemon-container" src="images/icons/remove-black-sm.svg" alt="">
            </div>
            <div class="pokemon__image">
                
            </div>
            <div class="pokemon__info">
                <h1 id="pokemon--name"></h1>
                <span id="pokemon--id"></span>
            </div>
        </div>
    </div>
    <!--============================= CONTAINER POMODORO =============================-->
    <div class="container">
        <div class="pomodoro">
            <div class="pomodoro__modes">
                <button id="modes--normal">Pomodoro</button>
                <button id="modes--short-brk">Short Break</button>
                <button id="modes--long-brk">Long Break</button>
            </div>
            <div class="pomodoro__timer">
                <span id="timer--number"></span>
            </div>
            <div class="pomodoro__buttons">
                <button id="button__start">Start</button>
                <div class="pomodoro__pokebola">
                   <img id="pokebola--icon" src="images/icons/pokebola-comum.svg" alt="Icon Pokebola">
                </div>
                <button id="button__stop">Stop</button>
            </div>
        </div>
    </div>

    <audio src="./sound/rain.mp3" autoplay loop>

    <script>
        function setting(){
            const root = document.documentElement;
            root.style.setProperty('--setting', "flex")
        }

        function settingClose(){
            const root = document.documentElement;
            root.style.setProperty('--setting', "none")
        }
    </script>

    <script type="module" src="./js/main.js"></script>
</body>
</html>