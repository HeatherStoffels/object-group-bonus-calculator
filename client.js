const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


/*------------------*/

//loop employees
for (let i = 0; i < employees.length; i++) {
  console.log('These are our employees', employees[i].name);

}
// let specificEmployees = {
//   name: name,
//   bonusPercentage: bonusPercentage,
//   totalCompensation: totalCompensation,
//   totalBonus: totalBonus,
// }

//write function that takes in one employee object, returns new object


function individualBonuses(allEmployees) {
  let bonusEmployees = [];


  for (let employee of allEmployees) {

    let bonusPercentage = 0;
    if (employee.reviewRating <= 2) {
      console.log('No bonus');
      bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
      console.log('4 percent');
      bonusPercentage = 0.04;
    } else if (employee.reviewRating === 4) {
      console.log('6 percent');
      bonusPercentage = 0.06;
    } else if (employee.reviewRating === 5) {
      console.log('10 percent');
      bonusPercentage = 0.10;
    }
    bonusEmployees.push(allEmployees);
    //employee number
    //make a certain amount
    //nothing higher or lower
  }

  if (employeeNumber > 0000 && employeeNumber < 9999) {
    bonusPercentage + 0.05;
  }

  if (annualSalary > 65000) {
    bonusPercentage - .01;
  }

  let bonusMax = 13;
  let bonusMin = 0;

  if (bonusAmount > bonusMin && bonusAmount < bonusMax) {
    console.log('bonus is granted!');
    return true;


  }
  return individualBonuses;
}




// } else if (employees.employeeRating ===4){
//   console.log('6 percent');




// function percentage(employeeSalary, percent){

//   console.log(percentage(employees[i].employeeSalary, percent));
//   return (employeeSalary / 100) * percent;
// }

// console.log(percentage(35000, 4));


// console.log( employees ); --written prior


// bonusPercentage should be the % that an employee recieves
//totalCOmpensation should equal the base pay plus bonus
//totalBous should the bonus rounded to the nearest dollar

//employees with a rating of 2 or below does not get a bonus
//rating of 3 = 4% of base income
//rating of 4 = 6% of base income
//rating of 5 = 10% of base income
//if employeeNumber > 4, they get an extra 5%
//if annualSalary> 65000 bonus = 1%
// bonus range is 0-13 total
