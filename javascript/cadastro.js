//envia o formulario validando
function validateForm(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;

    if(nome.trim() === '' || sobrenome.trim() === '' || email.trim() === ''){
        alert("Preencha todos os campos!");
        return;
    }

    document.getElementById("formCadastro").submit();
}