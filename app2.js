var map = L.map("map").setView([52.239876282953595, 21.009695687675006], 10);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const team = {
  rafalKolacz: {
    "2024-01-23": [
      [52.19329854584873, 21.14346896171669],
      [52.19282993013169, 21.16984281348213],
      [52.17610357185383, 21.18099107887905],
      [52.183456789012345, 21.155432109876543],
      [52.19567890123456, 21.162345678901234],
      [52.184321098765432, 21.174321098765432],
      [52.19789012345679, 21.1490123456789],
      [52.186789012345677, 21.15890123456789],
      [52.193456789012345, 21.16890123456789],
      [52.17678901234567, 21.17989012345679],
    ],
  },
  konradKubicki: {
    "2024-01-23": [
      [52.59717197373283, 21.269501882792536],
      [52.52224502969791, 20.458924238718595],
      [52.14380582243707, 21.91705497959486],
    ],
  },
  tomaszSkawski: {
    "2024-01-23": [
      [52.27362513353931, 20.644007635299833],
      [52.101698060198714, 20.70712553442428],
      [52.117931596692465, 20.278081536735968],
      [52.006758856475464, 20.80835295201984],
    ],
  },
};
const datePicker = document.getElementById("datePicker");
const checkboxes = document.querySelectorAll(".isChecked");
const messageContainer = document.querySelector(".messageContainer");
let currentlyDrawnPolylines = [];

function manipulatePolylines() {
  checkboxes.forEach((checkbox) => {
    let polyline = null;
    checkbox.addEventListener("click", () => {
      const polylineCoordinates =
        team[checkbox.id][checkbox.getAttribute("aria-label-date")];
      if (polyline === null) {
        polyline = L.polyline(polylineCoordinates);
        currentlyDrawnPolylines.push(polyline);
        console.log(polyline);
      }
      checkbox.checked ? polyline.addTo(map) : polyline.remove();
    });
  });
}
manipulatePolylines();

function setAriaLabelsForCheckboxes() {
  checkboxes.forEach((checkbox) => {
    checkbox.setAttribute("aria-label-date", datePicker.value);
    checkbox.checked = false;
    currentlyDrawnPolylines.forEach((polyline) => {
      polyline.remove();
      currentlyDrawnPolylines.forEach((poly) => (poly = null));
    });
  });
}

setAriaLabelsForCheckboxes();
datePicker.addEventListener("change", () => {
  setAriaLabelsForCheckboxes();
  manipulatePolylines();
});
