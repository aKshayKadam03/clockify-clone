  // Simply deletes the projects which have total time of 0
 const timeSheetGrabageCollector = () => {
    const grabage = JSON.parse(localStorage.getItem("local"))
   
    if(grabage.length !== 0){
        for( i in grabage){
            
             if(grabage[i].monday.time == 0 && grabage[i].tuesday.time == 0 && grabage[i].wednesday.time == 0 && grabage[i].thursday.time == 0 && grabage[i].friday.time == 0 && grabage[i].saturday.time == 0 && grabage[i].sunday.time == 0){
                
                grabage.splice(i,1);
                console.log(grabage)
                localStorage.setItem("local", JSON.stringify(grabage));
             }
        }
    }

 }

 timeSheetGrabageCollector();

//constructor for storing values
const ar = []
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
 

const addTimesheet = document.getElementById("addTimesheet")


//Adding elements into the table
const addElement = () => {
    const proj = document.getElementById("project").value;
    const mon = document.getElementById("mon").value;
    const tue = document.getElementById("tue").value;
    const wed = document.getElementById("wed").value;
    const thu = document.getElementById("thu").value;
    const fri = document.getElementById("fri").value;
    const sat = document.getElementById("sat").value;
    const sun = document.getElementById("sun").value;
    const id =  Math.ceil(Math.random()*10000)
    
  
    if(proj !== ""){
        if(mon == 0 && tue == 0 && wed == 0 && thu == 0 && fri == 0 && sat == 0 && sun == 0){
            alert("You need to fill atleast one field in time")
        } 
        else{
            const array = [mon,tue,wed,thu,fri,sat,sun]
            for(let i = 0; i < array.length; i++){ // initializing undefined values
                if(array[i] === ""){
                    array[i] = 0;
                }
            }
            console.log("yes")
            const [monday,tuesday,wednesday,thursday,friday,saturday,sunday] = array // destructuring
            const store = new Storagemanager(id,proj,monday,tuesday,wednesday,thursday,friday,saturday,sunday)
        
            let localArray = JSON.parse(localStorage.getItem("local"));
            if(localArray === null){
                    localArray = [];
                    localArray.push(store)
                    localStorage.setItem("local",JSON.stringify(localArray))
            }
            else{
                localArray.push(store)
                localStorage.setItem("local",JSON.stringify(localArray))
            }
        
            displayTimesheet();
        
            document.getElementById("project").value = ""
            document.getElementById("mon").value = ""
            document.getElementById("tue").value = ""
            document.getElementById("wed").value = ""
            document.getElementById("thu").value = ""
            document.getElementById("fri").value = ""
            document.getElementById("sat").value = ""
            document.getElementById("sun").value = ""
        
            }
            

    }
         
    else{
            alert("Project name can't be empty")
    }
     
}


//Displaying the added elements 
 
displayTimesheet = () =>{
    const array = JSON.parse(localStorage.getItem("local"))
    let colSum = 0;
    let [rowMon,rowTue,rowWed,rowThu,rowFri,rowSat,rowSun] = [ 0, 0, 0, 0, 0, 0, 0] ;
    let html = "";
    array.map((item,index) => {
        colSum = Number(item.monday.time) + Number(item.tuesday.time) + Number(item.wednesday.time) + Number(item.thursday.time) + Number(item.friday.time) + Number(item.saturday.time) + + Number(item.sunday.time);
        rowMon = rowMon + Number(item.monday.time)
        rowTue = rowTue + Number(item.tuesday.time)
        rowWed = rowWed + Number(item.wednesday.time)
        rowThu = rowThu + Number(item.thursday.time)
        rowFri = rowFri + Number(item.friday.time)
        rowSat = rowSat + Number(item.saturday.time)
        rowSun = rowSun + Number(item.sunday.time)
        html += `
        <div class="Timesheet__table__body">
            <div class="Timesheet__table__spacer">
                <p>${item.project}</p>
            </div>
            <div class="Timesheet__table__details">
                <div>
                    <p>${item.monday.time} Min</p>
                </div>
                <div>
                    <p> ${item.tuesday.time} Min</p>
                </div>
                <div>
                    <p> ${item.wednesday.time} Min</p>
                </div>
                <div>
                    <p> ${item.thursday.time} Min</p>
                </div>
                <div>
                    <p> ${item.friday.time} Min</p>
                </div>
                <div>
                    <p> ${item.saturday.time} Min</p>
                </div>
                <div>
                    <p>${item.sunday.time} Min</p>
                </div>
                <div>
                    <p>${colSum} Min</p>
                </div>
                <div>
                    <button onclick="deleteTimeSheet(${index})">Delete</button>
                </div>
            </div>
        </div>
        `
  
    })
    document.getElementById("Timesheet__table__body").innerHTML = html;
    const sumTotal = rowMon + rowTue + rowWed + rowThu + rowFri + rowSat + rowSun;
    document.getElementById("monTotal").innerHTML = rowMon + " Min";
    document.getElementById("tueTotal").innerHTML = rowTue + " Min";
    document.getElementById("wedTotal").innerHTML = rowWed + " Min";
    document.getElementById("thuTotal").innerHTML = rowThu + " Min";
    document.getElementById("friTotal").innerHTML = rowFri + " Min";
    document.getElementById("satTotal").innerHTML = rowSat + " Min";
    document.getElementById("sunTotal").innerHTML = rowSun + " Min";
    document.getElementById("sumTotal").innerHTML = sumTotal + " Min";

 
   
     
}


addTimesheet.addEventListener("click",addElement)

displayTimesheet();



//deleting the added elements

deleteTimeSheet = (index) => {
    const array = JSON.parse(localStorage.getItem("local"))
    array.splice(index,1);
    localStorage.setItem("local", JSON.stringify(array));
    displayTimesheet();
}



clearAll = () =>{
    if(JSON.parse(localStorage.getItem("local")).length === 0){
      alert("The list is empty")
    }
    else if(window.confirm("Do you really want to clear the list?")) {
      localStorage.setItem("local",JSON.stringify([]))
      displayTimesheet(); 
    }
  
  }
 


   setInterval(timeSheetGrabageCollector, 1000);

 
