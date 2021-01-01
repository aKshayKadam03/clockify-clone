let member_btn = document.getElementById("member_btn")
let group_btn = document.getElementById("group_btn")
let reminder_btn = document.getElementById("reminder_btn")

member_btn.addEventListener("click", openMember)
group_btn.addEventListener("click", openGroup)
reminder_btn.addEventListener("click", openReminder)

let mainBody__settings = document.getElementById("mainBody__settings")

function openMember() {
    member_btn.style.borderBottom = 1 + "px solid #C6D2D9"
    member_btn.style.background = "#E4EAEE"
}

function openGroup() {
    mainBody__settings.innerHTML = ""

    group_btn.style.background = "white"
    group_btn.style.borderBottom = 0

    member_btn.style.background = "#E4EAEE"
    member_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    reminder_btn.style.background = "#E4EAEE"
    reminder_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    mainBody__settings.innerHTML = `<div class="mainBody__settings" id="mainBody__settings">
                                        <div class="settings__innerBody" style="height:200px; margin-left:10px; width:107%">
                                            <div class="innerBody__upgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                                <p style="margin-left:-40px">If <span class="highight">Project</span> reaches 50% of estimate, alert <span  class="highight">Workspace admin</span> <button style="margin-top:15px; cursor:default; background-color:#03A9F4; width:100px; border:none; padding-top:10px; margin-left:20px">
                                                <label style="color:white; border:none; padding-top:10px">ADD</label></p>
                                            </fieldset>
                                        </div>
                                    </div>`
}

function openReminder() {
    mainBody__settings.innerHTML = ""

    group_btn.style.background = "#E4EAEE"
    group_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    member_btn.style.background = "#E4EAEE"
    member_btn.style.borderBottom = 1 + "px solid #C6D2D9"

    reminder_btn.style.background = "white"
    reminder_btn.style.borderBottom = 0

    mainBody__settings.innerHTML = `<div class="mainBody__settings" id="mainBody__settings">
                                        <div class="settings__innerBody" style="height:200px; width:107%">
                                            <div class="innerBody__upgrade">
                                                <p>PREMIUM feature
                                                <button>Upgrade</button></p>
                                            </div>
                                            <fieldset disabled style="margin-left:30px; font-size:14px">
                                            <div style="width:98%; height:35px; background-color:#e0e0e0; margin-top:20px; margin-left:-40px; padding-left:20px; padding-top:10px">Reminders</div>
                                            </fieldset>
                                        </div>
                                    </div>`
}