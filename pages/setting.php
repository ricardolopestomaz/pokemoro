<!--============================= DIV SETTINGS =============================-->
<div class="settings">
        <div class="settings__timer">
            <div class="settings__title">
                <h1>Timer Settings</h1>
                <button onclick="settingClose()" class="button__a">
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