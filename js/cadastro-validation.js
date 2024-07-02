//validação de email
const emailInput = document.querySelector("#email");
const resultMessage = document.querySelector("#email-message");
    
emailInput.addEventListener("input", function(event) {

    event.preventDefault();

    const email = emailInput.value;

    //validar email
    const isValid = validateEmail(email);

    if(isValid) {
        resultMessage.textContent = "";

    }else{
        resultMessage.textContent = "E-mail inválido!";
    }
})

//funçaõ de validção
const validateEmail = (email) => {

    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
}

//validação e busca de cep
const cepInput = document.querySelector("#cep")
const searchCep = document.querySelector("#search");

const endereco = document.querySelector("#endereco");
const complemento = document.querySelector("#complemento");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

const enderecoCompleto = document.querySelector(".container-endereco") 
const cepInvalido = document.querySelector("#invalid-cep")

searchCep.addEventListener("click", async function(event){
    event.preventDefault();

    const cepValue = cepInput.value.trim();

    if(!/^\d{5}-\d{3}$/.test(cepValue) || cepValue === "" ){
        cepInvalido.textContent = "Insira um CEP válido!";

    }else{

        enderecoCompleto.style.display = "block";
    
        const apiURL = `https://viacep.com.br/ws/${cepValue}/json`;
    
        const response = await fetch(apiURL);
        const cep = await response.json();
    
        endereco.value = cep.logradouro;
        complemento.value = cep.complemento;
        bairro.value = cep.bairro;
        cidade.value = cep.localidade;
        estado.value = cep.uf;
    
        console.log(cep);
    }

});

//limpa o input cep e formata
cepInput.addEventListener("input", function(){

    let cepValue = cepInput.value.replace(/\D/g, '');

    if (cepValue.length > 5) {
        cepValue = cepValue.slice(0, 5) + '-' + cepValue.slice(5);
    }

    cepInput.value = cepValue;

    if(cepInput.value.trim() === ""){
        enderecoCompleto.style.display = "none";
    }
})