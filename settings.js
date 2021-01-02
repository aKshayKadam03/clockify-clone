let settings_btn = document.getElementById("settings_btn")
let alert_btn = document.getElementById("alert_btn")
let account_btn = document.getElementById("account_btn")
let auth_btn = document.getElementById("auth_btn")
let custom_btn = document.getElementById("custom_btn")
let import_btn = document.getElementById("import_btn")

settings_btn.addEventListener("click", openSettings)
alert_btn.addEventListener("click", openAlert)
account_btn.addEventListener("click", openAccount)
auth_btn.addEventListener("click", openAuth)
custom_btn.addEventListener("click", openCustom)
import_btn.addEventListener("click", openImport)

let mainBody__settings = document.getElementById("mainBody__settings")


function openSettings() {
    settings_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    settings_btn.style.background = "#E4EAEE"
}

function openAlert() {
    mainBody__settings.innerHTML = ""
    alert_btn.style.background = "white"
    alert_btn.style.borderBottom = 0
    settings_btn.style.background = "#E4EAEE"
    settings_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    account_btn.style.background = "#E4EAEE"
    account_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    auth_btn.style.background = "#E4EAEE"
    auth_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    custom_btn.style.background = "#E4EAEE"
    custom_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    import_btn.style.background = "#E4EAEE"
    import_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBody__settings.innerHTML = `<div id="mainBody__settings" style="margin-top:0">
                                        <div class="settings__innerBody" style="height:200px">
                                            <div class="innerBody__upgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button class="innerBody__uploadFile" style="margin-top:15px; cursor:default">
                                                <label style="padding-left:40px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openAccount() {
    alert_btn.style.background = "#E4EAEE"
    alert_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBody__settings.innerHTML = ""
    account_btn.style.background = "white"
    account_btn.style.borderBottom = 0
    auth_btn.style.background = "#E4EAEE"
    auth_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    custom_btn.style.background = "#E4EAEE"
    custom_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    import_btn.style.background = "#E4EAEE"
    import_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBody__settings.innerHTML = `<div id="mainBody__settings" style="margin-top:0">
                                        <div class="settings__innerBody" style="height:200px">
                                            <div class="innerBody__upgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                                <input type="text" value="Search by email" style="margin-left:-10px; margin-top:15px; height:35px; width:200px"></input>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openAuth() {
    alert_btn.style.background = "#E4EAEE"
    alert_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    account_btn.style.background = "#E4EAEE"
    account_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    auth_btn.style.background = "white"
    auth_btn.style.borderBottom = 0
    custom_btn.style.background = "#E4EAEE"
    custom_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBody__settings.innerHTML = ""
    import_btn.style.background = "#E4EAEE"
    import_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBody__settings.innerHTML = `<div id="mainBody__settings" style="margin-top:0px;">
                                        <div class="settings__innerBody" style="height:500px; margin-bottom:50px;">
                                            <div class="innerBody__upgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                            <p class="innerBody__heading">Regular users can see</p>
                                            <p class="innerBody__desc">Prevent regular users from seeing other people’s time entries.</p>
                                            <div class="newProjects__radio"><input type="radio"  checked="checked" style="cursor:default"><label style="cursor:default"> All tracked time</label> <input type="radio" style="cursor:default"><label style="cursor:default"> Only time on public projects</label> <input type="radio" style="cursor:default"><label style="cursor:default"> Only their own time</label></div>
                                            <hr>
                                            <p class="innerBody__heading">Group projects by</p>
                                            <p class="innerBody__desc">If you don’t have clients or departments, you can change the label to something else.</p>
                                            <select name="options" class="groupProjects__options">
                                                <option value="client">Client</option>
                                                <option value="department">Departments</option>
                                                <option value="ategory">Category</option>
                                                <option value="Custom...">Custom</option>
                                            </select>
                                            <hr>
                                            <p class="innerBody__heading">Project favorites</p>
                                            <p class="innerBody__desc">Let people mark their most used projects as favorite so they appear at the top of their project list when tracking time.</p>
                                            <label class="switch">
                                                <input type="checkbox" checked style="cursor:default">
                                                <span class="slider round" style="cursor:default"></span>
                                            </label>
                                            <label class="activate">Activate project favorites</label>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openCustom() {
    alert_btn.style.background = "#E4EAEE"
    alert_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    account_btn.style.background = "#E4EAEE"
    account_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    auth_btn.style.background = "#E4EAEE"
    auth_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    custom_btn.style.background = "white"
    custom_btn.style.borderBottom = 0
    mainBody__settings.innerHTML = ""
    import_btn.style.background = "#E4EAEE"
    import_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBody__settings.innerHTML = `<div id="mainBody__settings" style="margin-top:0px">
                                        <div class="settings__innerBody" style="height:400px;">
                                            <div class="innerBody__upgrade">
                                                <p>ENTERPRISE feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="font-size:14px">
                                                <p class="innerBody__heading">Duration format</p>
                                                <p class="innerBody__desc">Display time in clock format (with or without seconds).</p>
                                                <select name="options" class="groupProjects__options">
                                                <option value="client">Full (hh:mm:ss)</option>
                                                <option value="department">Comapct (h:mm)</option>
                                              </select>
                                              <hr>
                                              <p class="innerBody__heading">Task filter</p>
                                                <p class="innerBody__desc">Quickly find the right task in project picker by using the task@project syntax.</p>
                                                <label class="switch" style="cursor:default">
                                                    <input type="checkbox" style="cursor:default">
                                                    <span class="slider round" style="cursor:default"></span>
                                                </label>
                                                <label class="activate">Activate task filter</label>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openImport() {
    alert_btn.style.background = "#E4EAEE"
    alert_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    account_btn.style.background = "#E4EAEE"
    account_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    auth_btn.style.background = "#E4EAEE"
    auth_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    custom_btn.style.background = "#E4EAEE"
    custom_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    mainBody__settings.innerHTML = ""
    import_btn.style.background = "white"
    import_btn.style.borderBottom = 0
    // settings.style.background = "white"
    mainBody__settings.innerHTML = `<div id="mainBody__settings" style="margin-top:0">
                                        <div class="settings__innerBody" style="height:200px">
                                            <div class="innerBody__upgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button class="innerBody__uploadFile" style="margin-top:15px; cursor:default"">
                                                <label style="padding-left:40px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}


let uploadFileBtn = document.getElementById("uploadFile")
// uploadFileBtn.addEventListener("click", uploadImage)

var loadFile = function(event) {
	var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    
    image.style.width = 100+"px"
    image.style.height = 100+"px"
    image.style.borderRadius = 50+"%"
};

