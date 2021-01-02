var flag = 0;
const sidebar = document.getElementById("product__container__sidebar")
const analyze = document.getElementById("product__analyze")
const manage = document.getElementById("product__manage")
const container = document.getElementById("product__container__content")

const sidebarFeature = () =>{
    if(flag === 0){
        sidebar.style.width = "2.8%"
        sidebar.style.minWidth = "0"
        sidebar.style.minWidth = "52px"
        analyze.style.display = "none"
        manage.style.display = "none"
        container.style.width = "97.2%"
        
        flag=1;
    }
    else{
        document.getElementById("product__container__sidebar").style.width = "10%"
        sidebar.style.minWidth = "200px"
        console.log("1")
        flag=0;
        analyze.style.display = "inline"
        manage.style.display = "inline"
        container.style.width = "90%"
       
    }

}
 

function Display_User_Name(){
    var email = localStorage.getItem("email")
    var password= localStorage.getItem("password")
    var work_name = document.getElementById("workspace_password")
    var work_password= document.getElementById("workspace_email")
    work_name.innerHTML = "User : " +  email
    work_password.innerHTML = "User Email : " + email
    var profile_name = document.getElementById("profile_password")
    var profile_password= document.getElementById("profile_email")
    profile_name.innerHTML ="User Workspace : " +  email
    profile_password = "User Email : " + email
    console.log( email, password)
  }
  window.onload=Display_User_Name();
