var map = L.map("map").setView([52.239876282953595, 21.009695687675006], 10);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const datePicker = document.getElementById("datePicker");
const checkboxes = document.querySelectorAll(".isChecked");
const messageContainer = document.querySelector(".messageContainer");
const btn = document.getElementById("testingAPI");

function processData(data){
  const coordinates = [];
  data.forEach((line)=>{
    coordinates.push([line.Latitude,line.Longitude])
  })
  return coordinates;
}

function getData(date,person){

  return new Promise((resolve,reject)=>{
    fetch(`http://tracking.local/getInfo.php?date=${date}&person=${person}`,{
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res)=>res.json())
  .then(data=>{ 
    console.log(data);
    if(data.length === 0 ) reject("Nie ma danych dla tej osoby")
    resolve(processData(data));
  })
  })
}

let lines = [];
function createLines() {
  let errorMessage = "";
  checkboxes.forEach((checkbox) => {
    console.log(datePicker.value);
    getData(datePicker.value,checkbox.id)
    .then((data)=>{
        lines.push(L.polyline(data));
    })
    .catch(err=>{
      console.log(err);
      errorMessage += ` Brak danych dla ${checkbox.id}<br> `;
      messageContainer.innerHTML = errorMessage;
      checkbox.setAttribute("disabled", "");
    })
    
  });
}
createLines();
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("click", () => {
    checkbox.checked ? lines[index].addTo(map) : lines[index].remove();
  });
});

datePicker.addEventListengetInfo.php?date=2024-01-30&person=rafalKolacz
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  lines = [];
  createLines();
});
