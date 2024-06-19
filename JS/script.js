function confirmar(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("telefone").value
    let data = document.getElementById("data_nascimento").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let endereco = document.getElementById("endereco").value

    alert(`Entraremos em contato:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${tel}\nData de nascimento: ${data}\nCidade: ${cidade}\nEstado: ${estado}\nEndereço: ${endereco}`)
}