$(document).ready(function() {

    document.getElementById('button').addEventListener('click', (event) => {
        event.preventDefault();
<<<<<<< HEAD
        var list = document.getElementById("attempts");
        list.innerHTML += '<span > ' + 'Successfully submitted' + '</span>'
        event.preventDefault();

    });

=======
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
            }),
            error: function(response){
                //alert('Working Hours NOT updated,please check the information');
                alert("failed to update")
            },
            success: function(response){
                alert('Working Hours Updated Successfuly');
               }
        };
        $.ajax(requestConfig).then(function(responseMessage) {
            console.log(responseMessage);
        });
        });
            
  
    
>>>>>>> aa5f66a1682ac1afdd73dec96c7e0675a959c84e
});