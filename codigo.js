function add(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let lista = document.getElementById("lista")
    
    var listaU = document.createElement("li")
    var listaS = document.createElement("li")

    listaU.textContent ="Nome do usuario: "+ usuario
    listaS.textContent ="E-mail do usuario: "+ senha

    
    if(verifica()===true){
        lista.appendChild(listaU)
        lista.appendChild(listaS)
    }




}
function verifica(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value


    //fazendo condicionais
    if(usuario===""){
        alert("Por favor inserir o seu nome")
        return false
    }else if(usuario.length < 3){
        alert("insera um nome valido")
        return false
    }else if(senha===""){
        alert("Por favor inserir o seu E-mail")
        return false
    }else if(senha.length < 3){
        alert("Introduza um E-mail valido")
        

    }
    
        return true
}