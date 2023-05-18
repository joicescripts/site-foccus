let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaCEP(cep.value));


async function buscaCEP(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        let consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!')
        }
        let cidade = document.getElementById('cidade');
        let logradouro= document.getElementById('logradouro');
        let bairro = document.getElementById('bairro');
        let estado = document.getElementById('estado');
       

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
        console.log(erro)
    }
}

