//dark mode toggler
const checkbox = document.getElementById("checker")
const img = document.getElementById("mode")
checkbox.addEventListener("click", (e) =>{
    if(checkbox.checked === false){
        mode.setAttribute("src","images/herolight.svg")
    }
    else{
        mode.setAttribute("src","images/herodark.svg")
    }
})


//menu toggler
const html = `
<div class="Navigation__mobile">
    <div>
        <a href="features.html">Features</a>
    </div>
    <div>
        <a href="desktopapp.html">Download</a>
    </div>       
    <div>
        <a href="log-in">Log In</a>
    </div>
    <div>
        <a  href="Sing_Up"><Button class="Light__btn">Sign Up</Button></a>
    </div>
</div>
`
const mobileMenu = document.createElement("div")
mobileMenu.setAttribute = "id","mobileMenu";
const body = document.querySelector("body")
const header = document.getElementById("Header")
body.insertBefore(mobileMenu,header)
mobileMenu.innerHTML = html
mobileMenu.style.display = "none";


 let flag = 0;
 navToggler = () =>{
     if(flag === 0){
        document.getElementById("navIcon").innerHTML= `<i class="fas fa-times"></i>`
           
        mobileMenu.style.display = "inline" 
        flag = 1;
      }
      else{
        document.getElementById("navIcon").innerHTML= `<i class="fas fa-bars"></i>`
        mobileMenu.style.display = "none" 
        flag = 0;
      }   
  }

  

  `<img src="${"https://clockify.me/assets/images/features/features-weekly-screenshot.svg" }">`