// var myFunc = function() {
//   alert("loading")
//   }
//   window.onload = function() {
//     setTimeout(myFunc, 1);
//   }

var btn = document.getElementById("display_name")
var btn1 = document.getElementById("sidebar")


function openNav()
{
    // var set = document.getElementById("Product_Navbar_Sidebar").value
    // set.style.width ="100px"
    var body = document.querySelector("display_name")
    var menu = document.getElementById("display_dropbtn_workspace")
    menu.setAttribute("class",".display_dropbtn_workspace_open")

  
    menu.style.display ="block"
    
    console.log("hi")
  
    var a = localStorage.getItem("email")
    var b= localStorage.getItem("password")

    var password = document.getElementById("workspace_email")
    // password.setAttribute("class",".display_content_workspace_email")
    password.innerHTML = b 
    
    var email = document.getElementById("workspace_email_name")
    // email.setAttribute("class",".display_content_workspace_email")
    email.innerHTML = a;
    
    var work = document.getElementById("name_workspace")
    work.setAttribute("class",".dropbtn_workspace")
    work.innerHTML = b;
    
    var drop_down = document.getElementById("drop_down_work")
    drop_down.setAttribute("class",".dropbtn_workspace")
    drop_down.innerHTML = b;
    
   console.log( b + "HI")
}

function closeNav(){
    var menu = document.getElementById("display_dropbtn_workspace")
    menu.style.display ="none"
    console.log("HEllo")
}

function showdiv()
{
    console.log("inside open div")
    var div= document.getElementById("middle_content")
    var s = document.getElementById("Product_Navbar_Sidebar")    
    var t1 = document.getElementById("Product_Navbar_Sidebar_toggle")

    div.style.width ="1200px"
    div.style.marginTop ="80px"
    div.style.marginLeft="90px"
    div.style.backgroundColor="#F2F6F8"
    console.log("open")

   
    s.style.display="none";
    s.style.border="none"
    t1.style.display="block";
    console.log(t1)
    console.log(s)
}


function closediv()
{
    console.log("inside close div")
    var div1= document.getElementById("middle_content")
    var s = document.getElementById("Product_Navbar_Sidebar")    
    var t1 = document.getElementById("Product_Navbar_Sidebar_toggle")

    div1.style.width ="1000px"
    div1.style.marginLeft ="250px"
    div1.style.marginTop = "80px"

    s.style.display="block";

    t1.style.display="none";
    console.log("close")   
}


btn.addEventListener("mouseover",openNav)
btn.addEventListener("mousedown",closeNav)

btn1.addEventListener("mouseover",showdiv)
btn1.addEventListener("mousedown",closediv)

