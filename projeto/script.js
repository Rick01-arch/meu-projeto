document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botaoMensagem");
    const divMensagem = document.getElementById("mensagem");

    botao.addEventListener("click", function () {
        divMensagem.textContent = "Seja bem-vindo à minha página! Continue sempre aprendendo.";
    });
});
