var readline = require("readline-sync")

console.log("====================================")
console.log("               ENTRAR               ")
console.log("                                    ")
console.log("                                    ")
console.log("             *  LOGIN               ")
console.log("                                    ")
console.log("             *  SENHA               ")
console.log("                                    ")
console.log("                                    ")
console.log("====================================")
var loginok = "1234"
var login

while (login != loginok) {
  login = readline.question("Digite seu login: ");

  if (login == loginok) {
      console.log("login correto.")
      break;
  } else {
    console.log("Tente novamente.");
  }
}


var senhaok = "1234"
var senha

while (senha != senhaok) {
  senha = readline.question("Digite sua senha: ");

  if (senha == senhaok) {
      console.log("Senha correta.")
      break;
  } else {
    console.log("Tente novamente.");
  }
}


console.log("====================================")
console.log("               INICIO               ")
console.log("                                    ")
console.log("                                    ")
console.log(" 1- PRODUTO                         ")
console.log(" 2- PDV                             ")
console.log(" 3- CLIENTE                         ")
console.log(" 0- SAIR                            ")
console.log("                                    ")
console.log("====================================")

var escolha
var escolha ok

while (escolhaok != escolha) {}
var escolha = readline.questionInt("Digite a opção! ")
switch(escolha){
    case 1:
        console.log("====================================")
        console.log("              PRODUTO               ")
        console.log("                                    ")
        console.log(" 1- CADASTRAR                       ")
        console.log(" 2- ALTERAR                         ")
        console.log(" 3- EXCLUIR                         ")
        console.log(" 4- ESTOQUE                         ")
        console.log(" 0- INICIO                          ")
        console.log("                                    ")
        console.log("====================================")
        var produtoEscolha = readline.questionInt("Digite o número da opção desejada: ")
        switch (produtoEscolha) {
            case 1:
                var produtoCadastro = readline.question("Digite o nome do novo produto: ");
                console.log("Seu novo produto foi cadastrado com sucesso!");
            
        }
        break
        case 2:
            console.log("====================================")
            console.log("                PDV                 ")
            console.log("                                    ")
            console.log("                                    ")
            console.log(" 1- PEDIDOS                         ")
            console.log(" 2- HISTORICO                       ")
            console.log(" 3- FORMA PAGAMENTO                 ")
            console.log(" 0- INICIO                          ")
            console.log("                                    ")
            console.log("====================================")   
            break
            
            case 3:
                console.log("====================================")
                console.log("              CLIENTE               ")
                console.log("                                    ")
                console.log("                                    ")
                console.log(" 1- NOVO                            ")
                console.log(" 2- ALTERAR                         ")
                console.log(" 3- EXCLUIR                         ")
                console.log(" 0- INICIO                          ")
                console.log("                                    ")
                console.log("====================================")
                break
                case 0:
                    console.log("====================================")
                    console.log("               ENTRAR               ")
                    console.log("                                    ")
                    console.log("                                    ")
                    console.log("             *  LOGIN               ")
                    console.log("                                    ")
                    console.log("             *  SENHA               ")
                    console.log("                                    ")
                    console.log("                                    ")
                    console.log("====================================")
                   break
                   default:
                    console.log("Opção inválida")