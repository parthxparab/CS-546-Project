
$(document).ready(function(){

    var hoursform = $("#updatehoursform"),
     userNameInput = $("#UsernameEmp"),
     startInput = $("#Startdate"),
     endInput = $("#Enddate"),
     hoursInput=$("#Hours");

    hoursform.submit(function(event) {
        event.preventDefault();
        var userName = userNameInput.val();
        var start = startInput.val();
        var end = endInput.val();
        var hours = hoursInput.val();
        var requestConfig = {
            method: "POST",
            url: "/employee/employeehours",
            contentType: "application/json",
            data: JSON.stringify({
              userName: userName,
              start: start,
              end: end,
              hours:hours
            })
        };
        $.ajax(requestConfig).then(function(responseMessage) {
            console.log(responseMessage);
        });
        });
            
  
    
});