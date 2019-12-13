//const tran = require('../database-utils/mongoConnection')
// import { abc } from '../database-utils/mongoConnection';



$(document).ready(function() {

    document.getElementById('button').addEventListener("click", (event) => {
        event.preventDefault();
        // hide containers by default
        // errorContainer.classList.add("hidden");
        // resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(

        let va = document.getElementById("usernamedetail").innerHTML
            //const FirstNumberValue = searchDetail.username;
            // let result = tran.getTransactionByUsername(searchDetail.username)

        console.log(va)
        var list = document.getElementById("attempts");
        list.innerHTML += '<li><span> ' + va + '</span></li>'

        //document.getElementById("Primenumber").value = ""
        //document.getElementById("errortext").textContent = ""

    });









});