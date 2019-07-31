let botao = document.querySelector("button");
let input = document.querySelector("input");
let section = document.querySelector("p");
let div = document.querySelector("div");
let a = document.querySelector("a");
let h2 = document.querySelector("h2");


if(localStorage.nome){
    h2.innerHTML = `Bem vindo ${localStorage.nome}`;
    a.innerHTML = `Você não é o ${localStorage.nome}?`;
    div.style.display = "none";   
} else {
    function acessar(){
        localStorage.setItem("nome", input.value);   
        if(localStorage.nome){
            h2.innerHTML = `Bem vindo ${localStorage.nome}`;
            a.innerHTML = `Você não é o ${localStorage.nome}?`;
            div.style.display = "none";
        }
    }
}


function limpar(){
    localStorage.removeItem('nome');
}

botao.onclick = acessar;
a.onclick = limpar;