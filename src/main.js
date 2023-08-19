function inserir(valor_inserido) {
   document.querySelector(".tela").innerHTML += valor_inserido;
}

function clean(){
   document.querySelector(".tela").innerHTML = "";
}

function back(){
   let valor_inserido = document.querySelector(".tela").innerHTML;
   document.querySelector(".tela").innerHTML = valor_inserido.substring(0, valor_inserido.length -1);
}

function result(){
   let valor_inserido = document.querySelector(".tela").innerHTML;


      document.querySelector(".tela").innerHTML = eval(valor_inserido);
   
}