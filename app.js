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
    "2024-01-24": [
      [52.242757418437044, 20.973022855987804],
      [52.194429442702855, 21.055453776709214],
      [52.12370410619805, 20.818762081783465],
      ,
    ],
  },
  konradKubicki: {
    "2024-01-23": [
      [52.59717197373283, 21.269501882792536],
      [52.52224502969791, 20.458924238718595],
      [52.14380582243707, 21.91705497959486],
    ],
    "2024-01-24": [
      [52.28871550648092, 20.652351618998082],
      [52.36172599026873, 21.096642993979508],
      [52.127911601212006, 21.233057235831772],
    ],
  },
  tomaszSkawski: {
    "2024-01-23": [
      [52.27362513353931, 20.644007635299833],
      [52.101698060198714, 20.70712553442428],
      [52.117931596692465, 20.278081536735968],
      [52.006758856475464, 20.80835295201984],
    ],
    "2024-01-24": [
      [52.25067405525631, 21.357935418534865],
      [52.134626906382195, 20.932347052236903],
    ],
  },
};
const datePicker = document.getElementById("datePicker");
const checkboxes = document.querySelectorAll(".isChecked");

let lines = [];
function createLines() {
  checkboxes.forEach((checkbox) =>
    lines.push(L.polyline(team[checkbox.id][datePicker.value]))
  );
}
createLines();
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("click", () => {
    checkbox.checked ? lines[index].addTo(map) : lines[index].remove();
  });
});

datePicker.addEventListener("change", () => {
  lines.forEach((line) => {
    line.remove();
  });
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
  lines = [];
  createLines();
});
