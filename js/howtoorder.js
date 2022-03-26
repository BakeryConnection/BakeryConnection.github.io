/*
function additems(){
    var item = document.getElementById('item');
    //var name = document.getElementById('items').value;
    let name = document.forms["order"]["items"].value;
    if (name == ""){
        alert("Name must be filled out");
        //item.innerHTML += 'I want pizza';
        return false;
    }
    
}
*/
function validateForm(){
    //var item = document.getElementById('item');
    //var name = document.getElementById('items').value;
    let name = document.forms["order"]["name"].value;
    if (name == ""){
        alert("Name must be filled out");
        //item.innerHTML += 'I want pizza';
        return false;
    }
}
