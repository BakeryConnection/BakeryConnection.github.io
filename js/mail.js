var btn = document.getElementById('submit');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var messagebox = document.getElementById('ordertxt').value;
    var phonenumber = document.getElementById('phone').value;
    var deliverything = document.getElementById('deliveryway').value;
    var thetext = name +" From: "+email+" and "+phonenumber+" says: "+ messagebox;
    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bakeryconnection22@gmail.com",
        Password : "qhkmbnigkcnmevwm",
        To : 'bakeryconnection22@gmail.com',
        From : "you@isp.com",
        Subject : "Delivery Method: " +deliverything,
        Body : thetext
    }).then(
      message => alert("Your order has been placed <3")
    );
})