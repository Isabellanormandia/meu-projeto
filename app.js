const botao = document.getElementById("botao");
const jogo = document.getElementById("jogo");
const pergunta = document.getElementById("pergunta");
const respostaInput = document.getElementById("resposta");
const enviarResposta = document.getElementById("enviarResposta");
const feedback = document.getElementById("feedback");
const mensagemFinal = document.getElementById("mensagemFinal");

// Pergunta e resposta do jogo
const perguntaTexto = "Qual é a capital do Brasil";
const respostaCorreta = "Brasília";

// Quando clicar no botão inicial
botao.addEventListener("click", () => {
    botao.classList.add("hidden");
    jogo.classList.remove("hidden");
});

// Verificar resposta
enviarResposta.addEventListener("click", () => {
    const respostaUsuario = respostaInput.value.trim();

    if (respostaUsuario === respostaCorreta) {
        // Acertou
        jogo.classList.add("hidden");
        mensagemFinal.classList.remove("hidden");
    } else {
        // Errou
        feedback.textContent = "Tente novamente!";
        feedback.style.color = "red";
        respostaInput.value = "";
    }
});
