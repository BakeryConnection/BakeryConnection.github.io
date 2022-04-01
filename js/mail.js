var btn = document.getElementById('submit');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('name').value;
    var Phone = document.getElementById('phone').value;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bakeryconnection22@gmail.com",
        Password : "qhkmbnigkcnmevwm",
        To : 'bakeryconnection22@gmail.com',
        From : "you@isp.com",
        Subject : Email,
        Body : Name,
    }).then(
      message => alert("Order Placed :)")
    );
})