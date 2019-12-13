//const tran = require('../database-utils/mongoConnection')
// import { abc } from '../database-utils/mongoConnection';
let va = document.getElementById("usernamedetail").innerHTML
$(document).ready(function() {

    $('#button').click(() => {
        console.log('code  here')
            //let va = document.getElementById("usernamedetail").innerHTML
        console.log(va)
        $.ajax({
            url: '/employee/transaction',
            type: 'GET',
            data: va,
            datatype: 'json',
            success: (data) => {
                console.log("success")
            }
        })
    });



    document.getElementById('button').addEventListener("click", (event) => {
        event.preventDefault();
        // hide containers by default
        // errorContainer.classList.add("hidden");
        // resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(

        //    va = document.getElementById("usernamedetail").innerHTML
        //const FirstNumberValue = searchDetail.username;
        // let result = tran.getTransactionByUsername(searchDetail.username)
        //  console.log('here')
        //  console.log(va)
        document.getElementById("demo").innerHTML = "1";


        //document.getElementById("Primenumber").value = ""
        //document.getElementById("errortext").textContent = ""

    });

});