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