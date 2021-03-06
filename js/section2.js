class PersonalDetails { 
  constructor(name, location) {
    this.name = name;
    this.age = 0;
    this.location = location
  }

  setAge(...birthday) {
    let today = new Date();
    let birthDate = new Date(...birthday);
    this.age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() - birthDate.getDate())) {
      return this.age--
    }
  }
}

let personalDetails = new PersonalDetails("George Paresishvili", "Tbilisi, Georgia")
personalDetails.setAge(1995, 8, 10)

let sect2Details = document.querySelector(".sect2-details");
for(let entry of Object.entries(personalDetails)) {
//   console.log(entry[0].split("")[0].toUpperCase() + entry[0].slice(1))
  let newSect2H3El = document.createElement("h3");
  let newSect2PEl = document.createElement("p")
  newSect2H3El.innerText = entry[0].split("")[0].toUpperCase() + entry[0].slice(1);
  newSect2PEl.innerText = entry[1];
  sect2Details.append(newSect2H3El, newSect2PEl)
}
