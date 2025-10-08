function mudarCor() {
    if (document.getElementById("nome").style.backgroundColor.valueOf() == "aqua") {
        document.getElementById("nome").style.backgroundColor = "white"
    }
    else {
        document.getElementById("nome").style.backgroundColor = "aqua"
    }
}

function verSenha(senha) {
    if (senha == 1){
        if (document.getElementById("senha1").type == "text")
            document.getElementById("senha1").type = "password"
        else
            document.getElementById("senha1").setAttribute("type", "text")
    }
    if (senha == 2){
        if (document.getElementById("senha2").type == "text")
            document.getElementById("senha2").type = "password"
        else
            document.getElementById("senha2").type = "text"
    }
}