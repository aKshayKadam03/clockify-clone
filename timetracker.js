

const killNull = JSON.parse(localStorage.getItem("local"))
if(killNull === null){
    const temp = [];
    localStorage.setItem("local",JSON.stringify(temp))
}
const projectList = document.getElementById("project__list")

projectLister = () => {
    const array = JSON.parse(localStorage.getItem("local"));
    let html = ``
     
    for( i in array){
        html += `
        <option>${array[i].project}</option> 
        `
    }
    projectList.innerHTML = html
} 

projectLister();

const displayTimeTracker = () => {
    const array = JSON.parse(localStorage.getItem("local"))
    let html = ""
    for( let i = 0; i < array.length; i++){
         let obj = array[i];
         for(key in obj){
             if(obj[key].time != undefined && obj[key].time != 0 ){
                let tempo = key
                html += `  
        
                <div class="Timetracker__body__info">
                    <div>
                        <span>Day : <b>${key}</b> </span>
                    </div>
                    <div>
                        <input  placeholder="Add Description" title=${tempo} id=${obj.id}  onchange="inputChangeTracker(this)" value="${obj[key].desc}" >
                    </div>
                    <div>
                        <span>Project Name : <b>${obj.project}</b></span>
                    </div>
                    <div>
                        <span>Total Time : <input type="number" title=${tempo} id=${obj.id}  onchange="inputTimeChangeTracker(this)" value="${obj[key].time}" > <b>Minutes</b></span>
                    </div>
                    <div>
                        <i title=${tempo} id=${obj.id} onClick="deleteTimeTracker(this)" class="far fa-trash-alt"></i>
                    </div>
                </div>`
             }
         }
    }
    document.getElementById("Timetracker__body").innerHTML = html
}

 // <div>
// <i title=${tempo} id=${obj.id}  onClick="miniStopWatch(this)" class="fas fa-play"></i>
// </div>

displayTimeTracker();

const inputTimeChangeTracker = (e)=>{
   const newValue = e.value;
   let array = JSON.parse(localStorage.getItem("local"))
   let id = e.id;
   let day = e.title;
   for(let i = 0; i < array.length; i++){
       if(array[i].id == id){
           if(newValue != ""){
            array[i][day].time = newValue;  
           }
          
       }
   }

   localStorage.setItem("local",JSON.stringify(array))
   displayTimeTracker();
}


const inputChangeTracker = (e) =>{
   const newValue = e.value;
   let array = JSON.parse(localStorage.getItem("local"))
   let id = e.id;
   let day = e.title;
   for(let i = 0; i < array.length; i++){
       if(array[i].id == id){
           array[i][day].desc = newValue;  
       }
   }

   localStorage.setItem("local",JSON.stringify(array))
   displayTimeTracker();

}

 


deleteTimeTracker = (e) =>{
    let array = JSON.parse(localStorage.getItem("local"))
    let id = e.id;
    let day = e.title;
    for(let i = 0; i < array.length; i++){
        if(array[i].id == id){
            array[i][day].time = 0;
            array[i][day].desc = "";

            
          if(array[i].monday.time == 0 && array[i].tuesday.time  == 0 && array[i].wednesday.time == 0 && array[i].thursday.time == 0 && array[i].friday.time == 0 && array[i].saturday.time == 0 && array[i].sunday.time == 0){
            array.splice(i,1);
          }  
        }
    }

    localStorage.setItem("local",JSON.stringify(array))
    displayTimeTracker();
}


// ---------------------------Time Tracker Add Items----------------------------------

//constructor for storing values
function Storagemanager(id,project,monday,tuesday,wednesday,thursday,friday,saturday,sunday) {
    this.id = id;
    this.project = project;

    this.monday = {
        time : monday,
        desc : "",
    }
    this.tuesday = {
        time : tuesday,
        desc : "",
    }
    this.wednesday = {
        time : wednesday,
        desc : "",
    }
    this.thursday = {
        time : thursday,
        desc : "",
    }
    this.friday = {
        time : friday,
        desc : "",
    }
    this.saturday = {
        time : saturday,
        desc : "",
    }
    this.sunday = {
        time : sunday,
        desc : "",
    }   
}
 
var btn = document.getElementById("time__start")
var counter = document.getElementById("time__tracker")
var flag = 0;
 
var count = 0;
btn.addEventListener("click",start)
function start(){
       if( flag === 0){
        var start = setInterval(function(){
        count = count + 1;
        counter.innerHTML = count;   
        btn.innerHTML = "Stop";
        btn.style.background = "red"
        btn.style.color = "white"
        btn.style.border.color = "red"
        flag = 1;
        
        btn.addEventListener("click",function(){
            clearInterval(start)
                btn.innerHTML = "Start";
                flag = 0;
                btn.style.background = "#5FBDF7"
                btn.style.color = "white";
                btn.style.border.color = "#5FBDF7"
            })
       },1000) 
   }
   
}







addItemsTimeTracker = () => {
  if(flag === 1){
        let timeTrackerDesc = document.getElementById("Timetracker__description").value;
        let timeTrackerProject = document.getElementById("projectListInput").value;
        let timeTrackerWeekDay = document.getElementById("weekDaysInput").value;
        timeTrackerProject = timeTrackerProject.toLowerCase() 
        if(timeTrackerProject === "" || timeTrackerWeekDay === ""){
            alert("Please fill in the require fields")
            count = 0;
            counter.innerHTML = count;
        }
        else{
            
        var array = JSON.parse(localStorage.getItem("local"))
        if(array === null || array.length === 0){
             array = [];
             const id =  Math.ceil(Math.random()*10000);
             const proj = timeTrackerProject;
             const store = new Storagemanager(id,proj,0,0,0,0,0,0,0);
             let temp = timeTrackerWeekDay.toLowerCase();
             for(key in store){
                 if(key === temp){
                     store[key].desc = timeTrackerDesc;
                     store[key].time = count;
                 }
             }
             array.push(store)
             localStorage.setItem("local",JSON.stringify(array))
             displayTimeTracker();
             location.reload();
        }
        else{
                array = JSON.parse(localStorage.getItem("local"))
                for( i in array){
                    if(array[i].project === timeTrackerProject){
                        let temp = timeTrackerWeekDay.toLowerCase();
                        for( key in array[i]){
                                if(key === temp){
                                array[i][key].desc = timeTrackerDesc;
                                array[i][key].time =  Number(array[i][key].time) + count;
                            }
                        }    
                    localStorage.setItem("local",JSON.stringify(array))
                    location.reload();
                    }
                    else{
                        array = JSON.parse(localStorage.getItem("local"))
                        const id =  Math.ceil(Math.random()*10000);
                        const proj = timeTrackerProject;
                        const store = new Storagemanager(id,proj,0,0,0,0,0,0,0);
                        let temp = timeTrackerWeekDay.toLowerCase();
                        for(key in store){
                            if(key === temp){
                                store[key].desc = timeTrackerDesc;
                                store[key].time = count;
                            }
                        }
                        array.push(store)
                        localStorage.setItem("local",JSON.stringify(array))
                        document.getElementById("Timetracker__description").value = "";
                        document.getElementById("projectListInput").value = "";
                        document.getElementById("weekDaysInput").value = "";
                        count = 0;
                        displayTimeTracker();
                        location.reload();
                    }
                }

            }
        }

       
    }
}

btn.addEventListener("click",addItemsTimeTracker)


