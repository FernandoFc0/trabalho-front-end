//efeito do botão voltar ao Topo
fuction topo(){
    window.scrollto({
        top:0,
        left:0,
        behavitor: 'smooth'
    })



//Validação de Login

fuction login(){
    var logado = 0;
    var usuario = document.getElemetsByName('usuario')[0]value;
    usuario = usuario.toLowerCasa();
    var senha = documento.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario =="admin"&& senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado.Dados incorretos");
    }
}


//Ativar alert no botão cadastrar
