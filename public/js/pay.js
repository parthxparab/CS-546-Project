$(document).ready(function() {
    document.getElementById('button').addEventListener("click", (event) => {
        event.preventDefault();



        // hide containers by default
        // errorContainer.classList.add("hidden");
        // resultContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(

        const parsedFirstNumberValue = parseInt(firstNumberValue);
        let result = checkPrime(parsedFirstNumberValue);
        var list = document.getElementById("attempts");

        if (result.prime != undefined && result.prime != null && result.prime != "") {
            list.innerHTML += '<li><span class="is-prime"> ' + result.prime + '</span></li>'
        } else {
            list.innerHTML += '<li><span class="not-prime"> ' + result.notPrime + '</span></li>'
        }

        document.getElementById("Primenumber").value = ""
        document.getElementById("errortext").textContent = ""








    });

});