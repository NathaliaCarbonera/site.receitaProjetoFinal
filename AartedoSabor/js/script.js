
// CARROSSEL DE IMAGENS

// Começa mostrando a primeira imagem
let indiceSlide = 1;

// Mostra a imagem inicial quando a página abre
mostrarSlide(indiceSlide);

// Função para passar ou voltar as imagens
function mudarSlide(numero) {
    mostrarSlide(indiceSlide + numero);
}

// Função que controla qual imagem aparece
function mostrarSlide(numero) {

    // Pega todas as imagens do carrossel
    let slides = document.getElementsByClassName("meusSlides");

    // Se chegar ao final, volta para a primeira imagem
    if (numero > slides.length) {
        indiceSlide = 1;
    }

    // Se voltar antes da primeira, mostra a última
    if (numero < 1) {
        indiceSlide = slides.length;
    }

    // Esconde todas as imagens
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra somente a imagem escolhida
    slides[indiceSlide - 1].style.display = "block";
}

// Faz o carrossel trocar de imagem sozinho a cada 4 segundos
setInterval(function() {
    mudarSlide(1);
}, 4000);


// RECEITAS DOS CARDS

// Função que abre o modal com a receita escolhida
function mostrarReceita(tipo) {

    // Pega os elementos do modal
    let titulo = document.getElementById("tituloReceita");
    let texto = document.getElementById("textoReceita");

    // Verifica qual receita foi escolhida
    if (tipo === "lasanha") {
        titulo.textContent = "Lasanha";
        texto.textContent = "Ingredientes: massa de lasanha, molho de tomate, queijo e presunto. Monte as camadas em uma travessa e leve ao forno até ficar pronta.";
    }

    else if (tipo === "bolo") {
        titulo.textContent = "Bolo de chocolate";
        texto.textContent = "Ingredientes: farinha, açúcar, chocolate em pó, ovos, leite e fermento. Misture os ingredientes e leve ao forno até assar.";
    }

    else if (tipo === "prato") {
        titulo.textContent = "Prato especial";
        texto.textContent = "Prepare uma refeição com os ingredientes de sua preferência. Capriche na apresentação e aproveite!";
    }

    // Abre o modal da receita
    document.getElementById("modalReceita").style.display = "block";
}

// Fecha o modal das receitas
function fecharReceita() {
    document.getElementById("modalReceita").style.display = "none";
}


// VALIDAÇÃO DO FORMULÁRIO

// Pega o formulário pelo ID
let formulario = document.getElementById("formulario");

// Detecta quando o usuário clica no botão de enviar
formulario.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    // Pega os valores digitados nos campos
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let preferencia = document.getElementById("preferencia").value;
    let aceite = document.getElementById("aceite").checked;

    // Verifica se o nome foi preenchido corretamente
    if (nome.length < 3) {
        alert("Digite seu nome com pelo menos 3 caracteres.");
        return;
    }

    // Verifica se o e-mail foi preenchido
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Verifica se uma preferência foi escolhida
    if (preferencia === "") {
        alert("Escolha sua receita favorita.");
        return;
    }

    // Verifica se a caixa de confirmação foi marcada
    if (!aceite) {
        alert("Marque a caixa de confirmação para continuar.");
        return;
    }

    // Se os dados estiverem corretos, abre o modal de sucesso
    document.getElementById("modalSucesso").style.display = "block";

    // Limpa os campos do formulário
    formulario.reset();

});


// FECHAR MODAL DE SUCESSO

// Função para fechar a mensagem de cadastro realizado
function fecharSucesso() {
    document.getElementById("modalSucesso").style.display = "none";
}


// FECHAR MODAIS AO CLICAR FORA DA CAIXA

// Pega os dois modais
let modalReceita = document.getElementById("modalReceita");
let modalSucesso = document.getElementById("modalSucesso");

// Detecta o clique na área do modal de receita
modalReceita.addEventListener("click", function(event) {

    // Fecha somente se o clique for fora do conteúdo
    if (event.target === modalReceita) {
        fecharReceita();
    }
});

// Detecta o clique na área do modal de sucesso
modalSucesso.addEventListener("click", function(event) {

    // Fecha somente se o clique for fora do conteúdo
    if (event.target === modalSucesso) {
        fecharSucesso();
    }
});
