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
    console.clear();
}
telaMenu ();

switch (escolha) {
    case 1:
        telaProduto ();
        break;
        
    case 2:
        telaPdv ();
        break;
            
    case 3:
        telaCliente ();
        break;
        
    case 0:
        console.log("Saindo do sistema... ");
        break;
        
    default: 
        console.log("Opção inválida. Por favor, digite uma opção válida.");
        break;
        telaMenu ()
    }        
    
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

switch (escolhaProduto) {
    case 1:
        cadastroProduto ();
        break;
    case 2:
            alteraProduto ();
        break;
    case 3:
            excluiProduto ();
            break;
        case 4:
        estoque ();
        break;
    case 0:
            telaMenu ();
                        break;        
    default:
        console.log("Opção inválida. Por favor, digite uma opção válida.");
        break;
            }
            
            function cadastroProduto() {
                
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
    console.clear();
    telaProduto() 
}

function alteraProduto() {
    let altera
    
    console.log("====================================")
    console.log("           ALTERAR PRODUTO          ")
    console.log("====================================\n")
    console.log("      1 - Astronauta                ")
    console.log("      2 - Quantidade em estoque: 1  ")
    console.log("      3 - Valor: 130,00             ")
    console.log("      0 - Voltar                    \n")
    console.log("====================================\n")
    altera = readline.question("Escolha uma opção: ")
    console.clear();
    

    switch(altera) {
        case 1:
            readline.question("Informe o novo nome do protudo: ");
                readline.question("Nome alterado com sucesso! Pressione para continuar");
                break;
                case 2:
                    readline.questionInt("Informe a quantidade disponível em estoque: ");
                readline.question("Estoque alterado com sucesso! Pressione ENTER para continuar");
                break;
            case 3:
                readline.questionFloat("Informe o novo preço do produto: ");
                readline.question("Preço alterado com sucesso! Pressione ENTER para continuar");
                break;
                case 0:
                    alteraProduto ();
                break;
            default:
                readline.question("Opção inválida! Precione ENTER para continuar")
                break
            } 
        console.clear()
        
    }

    /*console.log("====================================")
    console.log("           ALTERAR PRODUTO          ")
    console.log("====================================")
    console.log("     NÃO HÁ PRODUTOS PARA ALTERAR \n")
    console.log("====================================\n")
    readline.question("pressione pra continuar...")
    console.clear();
    telaProduto ();*/
    

    
    function telaPdv() {
        let escolhaPDV
        
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


function telaCliente() {
    let escolhaCliente
    
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


    
   