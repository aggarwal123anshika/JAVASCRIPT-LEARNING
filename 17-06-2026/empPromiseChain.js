let employees = [
  {
    e_id: 101,
    e_name: "Anshika",
    mobile_no: 9867,
    post: "Professor",
  },
  {
    e_id: 102,
    e_name: "Akanshi",
    mobile_no: 9787,
    post: "Associate Professor",
  },
  {
    e_id: 103,
    e_name: "Vanshika",
    mobile_no: 5677,
    post: "Manager",
  },
  {
    e_id: 104,
    e_name: "Shika",
    mobile_no: 9237,
    post: "Assistant Professor",
  },
  {
    e_id: 105,
    e_name: "Pokkiee",
    mobile_no: 2867,
    post: "BADA CHAPRASI",
  },
];
function getEmployee(id) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let emp = employees.find((employee) => employee.e_id == id);
      if (!emp) {
        reject("Employee not found...");
      } else {
        resolve(emp);
      }
    }, 5000);
  });
  return pr;
}
function getBasicSalary(post) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let basicSalary = 0;
    if (post === "BADA CHAPRASI") {
      basicSalary = 50000;
    } else if (post === "Assistant Professor") {
      basicSalary = 56000;
    } else {
      basicSalary = 52000;
    }
    resolve(basicSalary)
    },3000)
  });
  return pr;
}
function calculateSalary(basicSalary) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let grossSalary = 0;
            grossSalary = basicSalary + basicSalary * .50 + basicSalary * .70 + 6000;
            resolve(grossSalary)
        },3000)

    });
    return pr;
}
// PROMISE CHAINING
getEmployee(104)
  .then((emp) => {
    console.log(emp);
    return getBasicSalary(emp.post); //jb chalegi jb getEmployee ka resolve ho chuka hoga
  })
  .then((basicSalary) => {
    console.log(basicSalary);
    return calculateSalary(basicSalary);
  })
  .then((grossSalary) => {
    console.log(grossSalary);
  })
  .catch((err) => {
    console.log(err);
  })
