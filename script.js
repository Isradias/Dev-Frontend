const itens = document.querySelectorAll('.card');

function fadeIn() {
    itens.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('mostrar');
        }, index * 400);
    });
}

window.addEventListener('scroll', function () {
    if (window.scrollY >= 300) {
        fadeIn();

    // Para que a função só seja chamada apenas uma vez
        window.removeEventListener('scroll', arguments.callee);
    }
});

let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let header = document.querySelector("header");

// Verificar se o tema escuro já está salvo no sessionStorage
if (sessionStorage.getItem('darkMode') === 'true') {
    body.classList.add("dark");
    header.classList.add("dark");
    trilho.classList.add("dark");
}

trilho.addEventListener("click", () => {
    // Alternar entre temas
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    
    // Salvar a escolha no sessionStorage
    if (body.classList.contains("dark")) {
        sessionStorage.setItem('darkMode', 'true');
    } else {
        sessionStorage.setItem('darkMode', 'false');
    }
});

// Mostrar o alerta após 5 segundos
    setTimeout(() => {
      document.getElementById('alerta').classList.add('mostrar');
    }, 5000);

    // Botão para fechar o alerta
    document.getElementById('fechar').addEventListener('click', () => {
      document.getElementById('alerta').classList.remove('mostrar');
    })

    // MENU HAMBURGUER
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("ativo");
        menu.classList.toggle("ativo");
    });

    // Botão X fecha o alerta
const alerta = document.getElementById("alerta");
const botaoX = document.querySelector("#alerta .fechar");

botaoX.addEventListener("click", () => {
    alerta.classList.remove("mostrar");
    alerta.style.opacity = "0";
    setTimeout(() => alerta.style.display = "none", 300);
});
