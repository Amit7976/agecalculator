
let result = document.getElementById('year')

function show() {
  let dob = document.getElementById('dob').value;
  let d = new Date(dob);
  let year = d.getFullYear();
  let month = d.getMonth() + 1; // Months are zero-indexed
  let day = d.getDate();

  let cd = new Date();
  let cyear = cd.getFullYear();
  let cmonth = cd.getMonth() + 1;
  let cday = cd.getDate();

  let ageYear = cyear - year;
  let ageMonth = cmonth - month;
  let ageDay = cday - day;

  // Adjust for when the current month/day is before the birth month/day
  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(cyear, cmonth - 1, 0).getDate(); // Days in previous month
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  // Format to two digits
  ageYear = ageYear < 10 ? '0' + ageYear : ageYear;
  ageMonth = ageMonth < 10 ? '0' + ageMonth : ageMonth;
  ageDay = ageDay < 10 ? '0' + ageDay : ageDay;

  document.getElementById('year').innerText = ageYear;
  document.getElementById("month").innerText = ageMonth;
  document.getElementById('day').innerText = ageDay;


    let img = document.getElementById('img')
    

    if (ageYear <= 2) {
      img.style.setProperty("--after-width", `${5}%`);
    }
    else if (ageYear <= 5) {
      img.style.setProperty("--after-width", `${10}%`);
    }
    else if (ageYear <= 10) {
      img.style.setProperty("--after-width", `${20}%`);
    }
    else if (ageYear <= 15) {
      img.style.setProperty("--after-width", `${40}%`);
    }
    else if (ageYear <= 20) {
      img.style.setProperty("--after-width", `${45}%`);
    }
    else if (ageYear <= 25) {
      img.style.setProperty("--after-width", `${50}%`);
    }
    else if (ageYear <= 30) {
      img.style.setProperty("--after-width", `${55}%`);
    }
    else if (ageYear <= 35) {
      img.style.setProperty("--after-width", `${60}%`);
    }
    else if (ageYear <= 40) {
      img.style.setProperty("--after-width", `${65}%`);
    }
    else if (ageYear <= 45) {
      img.style.setProperty("--after-width", `${67}%`);
    }
    else if (ageYear <= 50) {
      img.style.setProperty("--after-width", `${70}%`);
    }
    else if (ageYear <= 55) {
      img.style.setProperty("--after-width", `${72}%`);
    }
    else if (ageYear <= 60) {
      img.style.setProperty("--after-width", `${75}%`);
    }
    else if (ageYear <= 65) {
      img.style.setProperty("--after-width", `${80}%`);
    }
    else if (ageYear <= 70) {
      img.style.setProperty("--after-width", `${83}%`);
    }
    else if (ageYear <= 75) {
      img.style.setProperty("--after-width", `${85}%`);
    }
    else if (ageYear <= 80) {
      img.style.setProperty("--after-width", `${86}%`);
    }
    else if (ageYear <= 85) {
      img.style.setProperty("--after-width", `${87}%`);
    }
    else if (ageYear <= 90) {
      img.style.setProperty("--after-width", `${88}%`);
    }
    else if (ageYear <= 95) {
      img.style.setProperty("--after-width", `${90}%`);
    }
    else if (ageYear <= 100) {
      img.style.setProperty("--after-width", `${95}%`);
    }
    else if (ageYear > 100) {
      img.style.setProperty("--after-width", `${100}%`);
    }
    else {
        img.style.setProperty("--after-width", `${60}%`);
    }



} 

