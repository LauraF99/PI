let readline = require("readline-sync")

let loginok = "admin"
let login

let senhaok = "1234"
let senha

function entrada () {
console.log("====================================")
console.log("               ENTRAR               ")
console.log("====================================")
console.log("                                    ")
login = readline.question("      Login:          ");
senha = readline.question("      Senha:          ");
console.log("                                    ")
console.log("                                    ")
console.log("====================================\n")
console.clear(); }

do {
    entrada ();
} while (senha !== senhaok || login !== loginok);

let escolha
function telaMenu() {

    console.log("====================================")
    console.log("                MENU                ")
    console.log("====================================")
    console.log("          1 - PRODUTO               ")
    console.log("          2 - PDV                   ")
    console.log("          3 - CLIENTE               ")
    console.log("          0 - SAIR                  ")
    console.log("====================================\n")
    escolha = readline.questionInt("Digite a opção desejada: ");
    console.clear(); }
    telaMenu ();

let escolhaProduto
function telaProduto() {
    console.log("====================================")
    console.log("              PRODUTO               ")
    console.log("====================================")
    console.log("           1 - CADASTRAR            ")
    console.log("           2 - ALTERAR              ")
    console.log("           3 - EXCLUIR              ")
    console.log("           4 - ESTOQUE              ")
    console.log("           0 - INÍCIO               ")
    console.log("====================================\n")
    escolhaProduto = readline.questionInt("Digite a opção desejada: ");
    console.clear();

}
let escolhaPDV
function telaPdv() {
    
    console.log("====================================")
    console.log("                PDV                 ")
    console.log("====================================")
    console.log("          1 - PEDIDOS               ")
    console.log("          2 - HISTÓRICO             ")
    console.log("          3 - PAGAMENTO             ")
    console.log("          0 - INÍCIO                ")
    console.log("====================================\n")
    escolhaPDV = readline.questionInt("Digite a opção desejada:");
    console.clear()

}
let escolhaCliente
function telaCliente() {
    
    console.log("====================================")
    console.log("              CLIENTE               ")
    console.log("====================================")
    console.log("          1 - NOVO                  ")
    console.log("          2 - ALTERAR               ")
    console.log("          3 - EXCLUIR               ")
    console.log("          0 - INÍCIO                ")
    console.log("====================================\n")
    escolhaCliente = readline.questionInt("Digite a opção desejada: ");
    console.clear();


}
switch (escolha) {
    case 1 :
        telaProduto ();
        break;
    case 2 :
        telaPdv ();
        break;
    case 3:
        telaCliente ();
    case 0:
        console.log("Saindo do sistema...");
        break;

    default: console.log("Opção inválida. Por favor, digite uma opção válida.");
        break;
}

function novoProduto() {

    let novoProduto = {
        nome: "",
        categoria: "",
        tamanho: "",
        preço: ""
    };

    console.log("====================================")
    console.log("           NOVO PRODUTO             ")
    console.log("====================================")
    novoProduto.nome = readline.question("Qual o nome do produto? ");
    novoProduto.categoria = readline.question("Qual a categoria do produto? ");
    novoProduto.tamanho = readline.question("Digite o tamanho do produto: ");
    novoProduto.preço = readline.question("Digite o preço do produto: ");
    console.log("====================================\n")
    console.clear();

    console.log("Novo produto cadastrado com sucesso!\n");
    readline.question("pressione pra continuar...")
    console.clear(); }
   