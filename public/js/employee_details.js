$( document ).ready(function() {
document.getElementById("details_button").onclick = function () {

    x = ("/employee/empprof_two/"+(document.getElementById("UsernameEmp1").value))
  //  console.log(x)
    location.href=x
    };
});

