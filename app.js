const botao = document.getElementById("botao");
const conteudo = document.getElementById("conteudo");
const mensagemFinal = document.getElementById("mensagemFinal");

botao.addEventListener("click", function() {
    // Some com o conteúdo
    conteudo.style.display = "none";

    // Mostra a frase centralizada
    mensagemFinal.classList.remove("hidden");
});
