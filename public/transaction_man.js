//const tran = require('../database-utils/mongoConnection')
// import { abc } from '../database-utils/mongoConnection';
let va = document.getElementById("usernamedetail").innerHTML
$(document).ready(function() {

    $('#button').click(() => {
        console.log('code  Value of va is')
            //let va = document.getElementById("usernamedetail").innerHTML
        console.log(va)
        $.ajax({
            url: '/manager/transaction',
            type: 'GET',
            data: va,
            datatype: 'json',
            success: (data) => {
                console.log("success")
                
                const target = document.getElementById('demo')
                target.innerHTML = ''
                
                data.forEach( (k,i,a) => {
                    var temp = document.createElement('li')
                    temp.textContent = k
                    
                    target.appendChild(temp)
                } )
            }
        })
    });

});