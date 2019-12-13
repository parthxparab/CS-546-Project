$(document).ready(function() {

    document.getElementById('button').addEventListener('click', (event) => {
        event.preventDefault();
        var list = document.getElementById("attempts");
        list.innerHTML += '<span > ' + 'Successfully submitted' + '</span>'
        event.preventDefault();

    });

});