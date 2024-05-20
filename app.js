function validateForm(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if(email.trim() == '' || senha.trim() == ''){
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("formLogin").submit();
}