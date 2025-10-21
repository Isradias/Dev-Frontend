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

trilho.addEventListener("click", ()=>{
    trilho.classList.toggle("dark");
    body.classList.toggle("dark");
    header.classList.toggle("dark");
})