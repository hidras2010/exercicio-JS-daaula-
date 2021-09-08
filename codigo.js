function add(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let lista = document.getElementById("lista")
    
    var listaU = document.createElement("li")
    var listaS = document.createElement("li")

    listaU.textContent ="Nome do usuario: "+ usuario
    listaS.textContent ="Senha do usuario:"+ senha

    lista.appendChild(listaU)
    lista.appendChild(listaS)




}