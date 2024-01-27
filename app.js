var map = L.map("map").setView([52.239876282953595, 21.009695687675006], 10);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const team = {
  rafalKolacz: {
    "2024-01-25": [
      [52.23498121406386, 21.272301474408646],
      [52.24716945294074, 21.301224984690645],
      [52.236885847051255, 21.296870907874],
    ],
    "2024-01-24": [
      [52.240504424564904, 21.16842564178299],
      [52.23040976143125, 21.176200778955568],
      [52.224694783594316, 21.19983719596021],
    ],
    "2024-01-23": [
      [52.19329854584873, 21.14346896171669],
      [52.19282993013169, 21.16984281348213],
      [52.17610357185383, 21.18099107887905],
    ],
  },
  konradKubicki: {
    "2024-01-25": [
      [52.23498121406386, 21.272301474408646],
      [52.24716945294074, 21.301224984690645],
      [52.236885847051255, 21.296870907874],
    ],
    "2024-01-24": [
      [52.240504424564904, 21.16842564178299],
      [52.23040976143125, 21.176200778955568],
      [52.224694783594316, 21.19983719596021],
    ],
    "2024-01-23": [
      [52.19329854584873, 21.14346896171669],
      [52.19282993013169, 21.16984281348213],
      [52.17610357185383, 21.18099107887905],
    ],
  },
  tomaszSkawski: {
    "2024-01-25": [
      [52.23498121406386, 21.272301474408646],
      [52.24716945294074, 21.301224984690645],
      [52.236885847051255, 21.296870907874],
    ],
    "2024-01-24": [
      [52.240504424564904, 21.16842564178299],
      [52.23040976143125, 21.176200778955568],
      [52.224694783594316, 21.19983719596021],
    ],
    "2024-01-23": [
      [52.26106170665216, 21.254376469797933],
      [52.215502183849125, 21.416330435963747],
      [52.17610357185383, 21.395580084048753],
    ],
  },
};
class Polyline {
  constructor(date, salesman) {
    this.date = date;
    this.salesman = salesman;
    this.polyline = null;
  }
  createPolyline() {
    this.polyline = L.polyline(team[this.salesman][this.date]);
    this.polyline.addTo(map);
  }
  removePolyline() {
    this.polyline.remove();
  }
}
const salesmanCheckboxes = document.querySelectorAll(".isChecked");

salesmanCheckboxes.forEach((salesman) => {
  let newPoly = null;
  salesman.addEventListener("click", () => {
    const date = document.querySelector("#datePicker").value;
    if (newPoly === null) {
      newPoly = new Polyline(date, salesman.id);
    }
    if (salesman.checked) newPoly.createPolyline();
    if (!salesman.checked) {
      console.log(newPoly);
      newPoly.removePolyline();
    }
  });
});
