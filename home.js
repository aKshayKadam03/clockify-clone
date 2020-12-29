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
        <a href="#">Features</a>
    </div>
    <div>
        <a href="#">Download</a>
    </div>       
    <div>
        <a href="#">Log In</a>
    </div>
    <div>
        <a  href="#"><Button class="Light__btn">Sign Up</Button></a>
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
        mobileMenu.style.display = "inline" 
        flag = 1;
      }
      else{
        mobileMenu.style.display = "none" 
        flag = 0;
      }   
  }

  

 