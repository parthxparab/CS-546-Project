const e = require('.../database-utils/Employee')


function checkPrime(number) {

    var result = {}
    number = parseInt(number)
    console.log("here")
        // if (Number.isInteger(number) && number >= 0 && number != undefined) {

    //     result["prime"] = ""
    //     result["notPrime"] = ""

    // }

    // if (number <= 1) {

    //     result.notPrime = number + " is NOT a prime number";
    //     return result
    // }

    // if (number == 2) {

    //     result.prime = number + " is a prime number"
    //     return result

    // } else {

    //     for (var i = 2; i < number; i++) {

    //         if (number % i == 0) {

    //             result.notPrime = number + " is not a prime number"
    //             return result
    //         }
    //     }

    //     result.prime = number + " is a prime number"
    //     return result
    // }
}

chechPrime(7)


// document.querySelector('button').addEventListener("click", (event) => {
//     event.preventDefault();
//     document.getElementById("errortext").textContent = "Please enter a value!"

//     // hide containers by default
//     // errorContainer.classList.add("hidden");
//     // resultContainer.classList.add("hidden");

//     // Values come from inputs as strings, no matter what :(
//     const EmpId = parseInt(document.getElementById("id").value);
//     const EmpHours = parseInt(document.getElementById("Hours").value);
//     const ManagerHours = parseInt(document.getElementById("managerhours").value);

//     if (EmpId === undefined || EmpId === null || EmpHours === undefined || EmpHours === null || ManagerHours === undefined || ManagerHours === null || isNaN(EmpHours)) {

//         document.getElementById("errortext").textContent = "Please enter a value!"
//             // event.preventDefault();

//     } else if (EmpHours < 0) {
//         document.getElementById("errortext").textContent = "Please enter correct hours!"

//     } else {
//         const parsedEmpHours = parseInt(EmpHours);
//         // let result = checkPrime(parsedEmpHours);
//         var list = document.getElementById("attempts");

//         list.innerHTML += '<li><span>Successfully submitted </span></li>'

//         document.getElementById("id").value = ""
//         document.getElementById("Hours").textContent = ""
//     }

// });