
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


const displayChart = (array,chartType)=>{
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
            datasets: [{
                label: 'Number of minutes',
                data: array,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 109, 29, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(150, 15, 41, 2)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Total time spent in a week'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        } 
        
    });
 
}  

function pieChart(){
    showAllData(`pie`)
}   
function radarChart(){
    showAllData(`radar`)
}   

function lineChart(){
    showAllData(`line`)
}   

function barChart(){
    showAllData(`bar`)
}   

function doughnutChart(){
    showAllData(`doughnut`)
}   

 





// ---------------------------------------SHOWING ALL DATA ----------------------------------------
    
const showAllData =(gg)=>{
    typeOfGraph = gg;
    
    document.getElementById("dashboard__container__graph").innerHTML = `
    <div class="dashboard__container__graph__controls">
        <button onclick="barChart()">Bar</button>
        <button onclick="pieChart()">Pie</button>
        <button onclick="lineChart()">Line</button>
        <button onclick="radarChart()">Radar</button>
        <button onclick="doughnutChart()">Doughnut</button>
    </div>
    <canvas id="myChart"></canvas>`

    const array = JSON.parse(localStorage.getItem("local"))
   
    //for total time per day in a week;
    
        let colSum = 0;
        let [rowMon,rowTue,rowWed,rowThu,rowFri,rowSat,rowSun] = [ 0, 0, 0, 0, 0, 0, 0] ;
        let html = "";
        array.map((item) => {
            colSum = Number(item.monday.time) + Number(item.tuesday.time) + Number(item.wednesday.time) + Number(item.thursday.time) + Number(item.friday.time) + Number(item.saturday.time) + + Number(item.sunday.time);
            rowMon = rowMon + Number(item.monday.time)
            rowTue = rowTue + Number(item.tuesday.time)
            rowWed = rowWed + Number(item.wednesday.time)
            rowThu = rowThu + Number(item.thursday.time)
            rowFri = rowFri + Number(item.friday.time)
            rowSat = rowSat + Number(item.saturday.time)
            rowSun = rowSun + Number(item.sunday.time)
        }) 
        const sumTotal = rowMon + rowTue + rowWed + rowThu + rowFri + rowSat + rowSun;
        const minutesPerWeek = [rowMon,rowTue,rowWed,rowThu,rowFri,rowSat,rowSun]  
        // document.getElementById("dashboard__stats__total__time").innerHTML = sumTotal+` Minutes`
        // document.getElementById("dashboard__stats__average__time").innerHTML = Math.floor(sumTotal/7) +` Minutes`;
        const weeklyDataReport = [["Monday",rowMon],["Tuesday",rowTue],["Wednesday",rowWed],["Thursday",rowThu],["Firday",rowFri],["Saturday",rowSat],["Sunday",rowSun]] 
        
        weeklyDataReport.sort((a,b) => a[1] - b[1])
        console.log(weeklyDataReport)
                    
            let minDay = weeklyDataReport[0][0]
            let minTime = weeklyDataReport[0][1]
             
            
            let maxDay = weeklyDataReport[6][0]
            let maxTime = weeklyDataReport[6][1]
          



        displayChart(minutesPerWeek,typeOfGraph)

        document.getElementById("dashboard__stats__unique").innerHTML = `
        <div>   
            <span>Total Time</span>
            <h2 id="dashboard__stats__total__time">${sumTotal} Min</h2>
        </div>
        <div>
            <span>Average Time</span>
            <h2 id="dashboard__stats__average__time">${Math.floor(sumTotal/7) +` Min`}</h2>
        </div>
      
        `
            
        const dashboardReport = document.getElementById("dashboard__stats__details");
        dashboardReport.innerHTML = `
        <div>
        <ul>
            <h3>Most</h3>
            <li>You have spent the most of your time on <b>${maxDay}</b></li>
            <li>The time spent is <b>${maxTime} Minutes</b> </li>
        </ul>
        </div>
        <div>
        <ul>
            <h3>Least</h3>
            <li>You have spent the least of your time on <b>${minDay}</b></li>
            <li>The time spent is <b>${minTime} Minutes </b> </li>
        </ul>
        </div>
        `

}

// document.getElementById("showAllData").addEventListener("click",showAllData("bar"))

showAllData("bar");

// ---------------------------------------SHOWING ALL DATA END----------------------------------------


//-----------------------------------------SHOWING PROJECT WISE DATA --------------------------------


const goFilter = document.getElementById("goFilter")

const filterByProjectName = ()=>{

    document.getElementById("dashboard__container__graph").innerHTML = `
    <canvas id="myChart"></canvas>
    `

    let dataCollectorStats = []
    let dataCollector = []
    let totalTime = 0;
    const selectedProject = document.getElementById("projectListInput").value; 
    if(selectedProject === ""){
        alert("Please Select a project")
    }
    else{
        const array = JSON.parse(localStorage.getItem("local"))
        
        for( i in array){
            if(array[i].project.toLowerCase() == selectedProject.toLowerCase()){
                 dataCollector = [Number(array[i].monday.time)
                 ,Number(array[i].tuesday.time)
                 ,Number(array[i].wednesday.time)
                 ,Number(array[i].thursday.time)
                 ,Number(array[i].friday.time)
                 ,Number(array[i].saturday.time)
                 ,Number(array[i].sunday.time)]
                
                dataCollectorStats = [
                    ["Monday",Number(array[i].monday.time),array[i].monday.desc],
                    ["Tuesday",Number(array[i].tuesday.time),array[i].tuesday.desc],
                    ["Wednesday",Number(array[i].wednesday.time),array[i].wednesday.desc],
                    ["Thursday", Number(array[i].thursday.time),array[i].thursday.desc],
                    ["Friday",Number(array[i].friday.time), array[i].friday.desc],
                    ["Saturday",Number(array[i].saturday.time),array[i].saturday.desc],
                    ["Sunday",Number(array[i].sunday.time),array[i].sunday.desc]
                ] 
            }
        }
        totalTime = dataCollector.reduce((acc,item) =>{
            return acc + item
         },0)
         document.getElementById("dashboard__stats__total__time").innerHTML = totalTime +` Min`;
         document.getElementById("dashboard__stats__average__time").innerHTML = Math.floor(totalTime/7) +` Min`;
         
         displayChart(dataCollector,"bar")
        document.getElementById("projectListInput").value = "";  
    }
    dataCollectorStats.sort((a, b) => a[1] - b[1]);
         
    let minDay = dataCollectorStats[0][0]
    let minTime = dataCollectorStats[0][1]
    let minDesc = dataCollectorStats[0][2]
    
    let maxDay = dataCollectorStats[6][0]
    let maxTime = dataCollectorStats[6][1]
    let maxDesc = dataCollectorStats[6][2]


    const dashboardReport = document.getElementById("dashboard__stats__details");
    
    dashboardReport.innerHTML = `
                    <div>
                    <h2>For the Project <b style="color:#44A5F3; text-transform:uppercase; letter-spacing:1.2px">${selectedProject}</b></h2>
                    </div>
                <div>
                <ul>
                    <h3>Most</h3>
                    <li>You have spent the most of your time on <b>${maxDay}</b></li>
                    <li>The time spent is <b>${maxTime} Minutes</b> </li>
                    <li>The task you did was <b>${(maxDesc.trim()?maxDesc:"'No Description Given'")}</b></li>
                </ul>
                </div>
                <div>
                <ul>
                    <h3>Least</h3>
                    <li>You have spent the least of your time on <b>${minDay}</b></li>
                    <li>The time spent is <b>${minTime} Minutes </b> </li>
                    <li>The task you did was <b>${(minDesc.trim()?maxDesc:"'No Description Given'")}</b></li>
                </ul>
                </div>
    `

}


goFilter.addEventListener("click",filterByProjectName)
 










//-----------------------------------------SHOWING PROJECT WISE DATA END --------------------------------





