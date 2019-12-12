
// $(document).ready(function() {

//     document.getElementById('button').addEventListener('click', (event) => {
//         event.preventDefault();
//         var list = document.getElementById("attempts");
//         list.innerHTML += '<span > ' + 'Successfully submitted'+ '</span>'h
//         event.preventDefault();
//     });

// });

function update() 
{
    const transaction = require("/Users/parthxparab/Documents/Fall 2019/CS546/Project/CS546-Final-Project/database-utils/transaction.js");
    x = transaction.getTransactionByUsername("manasmsk")
    let va = document.getElementById("usernamedetail").innerHTML
    console.log(x)
}