var btn = document.getElementById('submit');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('name').value;
    alert("hi")
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bakeryconnection22@gmail.com",
        Password : "qhkmbnigkcnmevwm",
        To : 'bakeryconnection22@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})