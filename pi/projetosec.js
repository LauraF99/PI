const readline = require("readline-sync");

let loginok = "admin";
let login;

let senhaok = "1234";
let senha;

let produto1 = {
    nome: "Coelho Sansão",
    id: "01",
    categoria: "Personagens",
    tamanho: "30cm",
    valor: "70.00",
};

let produto2 = {
    nome: "Astronauta",
    id: "02",
    categoria: "Profissões",
    tamanho: "25cm",
    valor: "130.00",
};

let produtos = [produto1, produto2];

function entrada() {
    console.log("====================================");
    console.log("               ENTRAR               ");
    console.log("====================================\n");
    login = readline.question("      Login:          ");
    senha = readline.question("      Senha:          ");
    console.log("====================================\n");
    console.clear();
}

do {
    entrada();
} while (senha !== senhaok || login !== loginok);

function telaMenu() {
    let escolha;

    console.log("====================================");
    console.log("                MENU                ");
    console.log("====================================\n");
    console.log("          1 - PRODUTO               ");
    console.log("          2 - PDV                   ");
    console.log("          3 - CLIENTE               ");
    console.log("          0 - SAIR                  ");
    console.log("====================================\n");
    escolha = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolha) {
        case 1:
            telaProduto();
            break;
        case 2:
            telaPdv();
            break;
        case 3:
            telaCliente();
            break;
        case 0:
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            telaMenu();
            break;
    }
}
telaMenu();

function telaProduto() {
    let escolhaProduto;

    console.log("====================================");
    console.log("              PRODUTO               ");
    console.log("====================================\n");
    console.log("           1 - CADASTRAR            ");
    console.log("           2 - ALTERAR              ");
    console.log("           3 - EXCLUIR              ");
    console.log("           4 - ESTOQUE              ");
    console.log("           0 - INÍCIO               ");
    console.log("====================================\n");
    escolhaProduto = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaProduto) {
        case 1:
            cadastroProduto();
            break;
        case 2:
            alteraProduto();
            break;
        case 3:
            excluiProduto();
            break;
        case 4:
            estoque();
            break;
        case 0:
            telaMenu();
            break;
        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            telaProduto();
            break;
    }
}

function cadastroProduto() {
    console.log("====================================");
    console.log("           NOVO PRODUTO             ");
    console.log("====================================\n");
    let nomeProduto = readline.question("Qual o nome do produto? ");
    let idProduto = readline.question("Qual o id do produto? ");
    let categoriaProduto = readline.question("Qual a categoria do produto? ");
    let tamanhoProduto = readline.question("Digite o tamanho do produto: ");
    let valorProduto = readline.question("Digite o valor do produto: ");
    console.log("====================================\n");
    console.clear();

    let novoProduto = {
        nome: nomeProduto,
        id: idProduto,
        categoria: categoriaProduto,
        tamanho: tamanhoProduto,
        valor: valorProduto,
    };

    produtos.push(novoProduto);

    console.log("Novo produto cadastrado com sucesso!");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaProduto();
}


function alteraProduto() {
    let altera;

    console.log("====================================");
    console.log("           ALTERAR PRODUTO          ");
    console.log("====================================\n");
    console.log("      1 - Astronauta                ");
    console.log("      2 - Quantidade em estoque: 1  ");
    console.log("      3 - Valor: 130,00             ");
    console.log("      0 - Voltar                    \n");
    console.log("====================================\n");
    altera = readline.questionInt("Escolha uma opção: ");
    console.clear();

    switch (altera) {
        case 1:
            readline.question("Informe o novo nome do protudo: ");
            readline.question("Nome alterado com sucesso! Pressione para continuar");
            alteraProduto();
            break;
        case 2:
            readline.questionInt("Informe a quantidade disponível em estoque: ");
            readline.question("Estoque alterado com sucesso! Pressione ENTER para continuar");
            alteraProduto();
            break;
        case 3:
            readline.questionFloat("Informe o novo preço do produto: ");
            readline.question("Preço alterado com sucesso! Pressione ENTER para continuar");
            alteraProduto();
            break;
        case 0:
            telaProduto();
            break;
        default:
            readline.question("Opção inválida! Pressione ENTER para continuar");
            alteraProduto();
            break;
    }
    console.clear();
}

function excluiProduto() {
    console.log("====================================")
    console.log("           EXCLUIR PRODUTO          ")
    console.log("====================================")
    console.log("     NÃO HÁ PRODUTOS PARA EXCLUIR \n")
    console.log("====================================\n")
    readline.question("pressione pra continuar...")
    console.clear();
    telaProduto();
}

function estoque() {
    console.log("====================================")
    console.log("              ESTOQUE               ")
    console.log("====================================")
    console.log( produtos)
    console.log("====================================\n")
    readline.question("pressione pra continuar...")
    console.clear();
    telaProduto ();
    
}

function telaPdv() {
    let escolhaPDV;

    console.log("====================================");
    console.log("                PDV                 ");
    console.log("====================================");
    console.log("          1 - PEDIDOS               ");
    console.log("          2 - HISTÓRICO             ");
    console.log("          3 - PAGAMENTO             ");
    console.log("          0 - INÍCIO                ");
    console.log("====================================\n");
    escolhaPDV = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaPDV) {
        case 1:
            telaPedidos();
            break;
        case 2:
            telaHistorico();
            break;
        case 3:
            telaPagamento();
            break;
        case 0:
            telaMenu();
            break;
        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            telaPdv();
            break;
    }
}

function telaPedidos() {
    console.log("====================================");
    console.log("              PEDIDOS              ");
    console.log("==================================== \n");
    const pedidoCliente = readline.question("Nome do cliente: ");
    const idProduto = readline.questionInt("ID do produto: ");
    const tamanhoProduto = readline.questionInt("Tamanho do produto: ");
    const quantidadeProduto = readline.questionInt("Quantidade do produto: ");
    const valorProduto = readline.questionFloat("Preço do produto: R$");
    console.log("====================================\n");

    let totalPedido = quantidadeProduto * valorProduto;
    console.log("valor total: R$" + totalPedido);
    const formaPagamento = readline.question("Qual a forma de pagamento: ");
    console.log("====================================\n");

    console.log("====================================");
    console.log("Confirme os dados do pedido:");
    console.log(`cliente: ${pedidoCliente}`);
    console.log(`ID: ${idProduto}`);
    console.log(`Tamanho: ${tamanhoProduto} cm`);
    console.log(`Quantidade: ${quantidadeProduto} unid`);
    console.log(`Valor total: R$ ${totalPedido}`);
    console.log(`Forma de pagamento: ${formaPagamento}`);
    console.log("====================================\n");

    let confirmacaoPedido = readline.question("Os dados estão corretos? (sim ou não): ");
    if (confirmacaoPedido.toLowerCase() === "sim") {
        console.log("Novo pedido cadastrado com sucesso!\n");
        readline.question("Pressione ENTER para continuar...");
        console.clear();
    } else {
        console.log("Os dados não foram confirmados. Volte ao menu CLIENTE para fazer alterações.\n");
    }
    console.clear();
}

function telaHistorico() {
    console.log("====================================");
    console.log("              HISTÓRICO             ");
    console.log("==================================== \n");
    console.log("     NÃO HÁ HISTÓRICO DE PEDIDOS \n ");
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar...");
    console.clear();
}

function telaPagamento() {
    let escolhaPagamento;

    console.log("====================================");
    console.log("              PAGAMENTO             ");
    console.log("==================================== \n");
    console.log("          1 - NOVO                  ");
    console.log("          2 - ALTERAR               ");
    console.log("          3 - EXCLUIR               ");
    console.log("          0 - RETORNAR              ");
    console.log("====================================\n");
    escolhaPagamento = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaPagamento) {
        case 1:
            console.log("Adicionar nova forma de pagamento \n");
            readline.question("Pressione ENTER para continuar...");
            console.clear();
            telaPagamento();
            break;
        case 2:
            console.log("Alterar forma de pagamento \n");
            readline.question("Pressione ENTER para continuar...");
            console.clear();
            telaPagamento();
            break;
        case 3:
            console.log("Excluir forma de pagamento \n");
            readline.question("Pressione ENTER para continuar...");
            console.clear();
            telaPagamento();
            break;
        case 0:
            console.log("Retornando a PDV...\n");
            console.clear();
            telaPdv();
            break;
        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            telaPagamento();
            break;
    }
}

function telaCliente() {
    let escolhaCliente;

    console.log("====================================");
    console.log("              CLIENTE               ");
    console.log("====================================");
    console.log("          1 - NOVO                  ");
    console.log("          2 - ALTERAR               ");
    console.log("          3 - EXCLUIR               ");
    console.log("          0 - INÍCIO                ");
    console.log("====================================\n");
    escolhaCliente = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaCliente) {
        case 1:
            novoCliente();
            break;
        case 2:
            alteraCliente();
            break;
        case 3:
            excluirCliente();
            break;
        case 0:
            telaMenu();
            break;
        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            telaCliente();
            break;
    }
}

function novoCliente() {
    let adcCliente = {
        nome: "",
        sobrenome: "",
        cpf: "",
        endereco: "",
        contato: 0
    };

    console.log("====================================");
    console.log("           NOVO CLIENTE             ");
    console.log("====================================");
    adcCliente.nome = readline.question("Qual o nome do cliente? ");
    adcCliente.sobrenome = readline.question("Qual o sobrenome do cliente? ");
    adcCliente.cpf = readline.question("Digite o CPF do cliente: ");
    adcCliente.endereco = readline.question("Digite o endereço do cliente: ");
    adcCliente.contato = readline.questionInt("Digite o contato do cliente: ");
    console.log("====================================\n");
    console.clear();

    console.log("====================================");
    console.log("Confirme os dados do novo cliente:");
    console.log("Nome:", adcCliente.nome);
    console.log("Sobrenome:", adcCliente.sobrenome);
    console.log("CPF:", adcCliente.cpf);
    console.log("Endereço:", adcCliente.endereco);
    console.log("Contato:", adcCliente.contato);
    console.log("====================================\n");

    let confirmacao = readline.question("Os dados estão corretos? (sim ou não): ");
    if (confirmacao.toLowerCase() === "sim") {
        console.log("Novo cliente cadastrado com sucesso!\n");
        readline.question("Pressione ENTER para continuar...");
        console.clear();
    } else {
        console.log("Os dados não foram confirmados. Volte ao menu CLIENTE para fazer alterações.\n");
    }
}

function alteraCliente() {
    let escolhaAlterar;

    console.log("====================================");
    console.log("           ALTERAR CLIENTE          ");
    console.log("====================================");
    console.log("     1 - PESQUISAR POR NOME         ");
    console.log("     2 - LISTAR TODOS               ");
    console.log("     3 - RETORNAR                   ");
    console.log("====================================\n");
    escolhaAlterar = readline.questionInt("Digite a opção desejada:");
    console.clear();

    switch (escolhaAlterar) {
        case 1:
            let nomeCliente = readline.question("Digite o nome e sobrenome do cliente: ");

            // Código para pesquisar e exibir informações do cliente
            console.log("====================================");
            console.log("          Dados do Cliente:         ");
            console.log("1 - Nome: Marcelo");
            console.log("2 - Sobrenome: Cavalcanti");
            console.log("3 - CPF: 081.727.864-84");
            console.log("4 - Endereço: Rua tal, numero tal, bairro tal");
            console.log("5 - Contato: 81 98690-3607");
            console.log("====================================\n");
            console.clear();

            console.log("====================================");
            console.log("Opções de alteração para o cliente:");
            console.log("1 - Nome");
            console.log("2 - Sobrenome");
            console.log("3 - CPF");
            console.log("4 - Endereço");
            console.log("5 - Contato");
            console.log("====================================");
            let opcaoAlteracao = readline.questionInt("Digite a opção de alteração desejada: ");
            console.clear();

            // Código para realizar a alteração no cliente
            console.log("====================================");
            console.log("Confirme os dados alterados:");
            console.log("1 - Nome: Marcelo");
            console.log("2 - Sobrenome: Cavalcanti");
            console.log("3 - CPF: 081.727.864-84");
            console.log("4 - Endereço: Rua tal, numero tal, bairro tal");
            console.log("5 - Contato: 81 98690-3607");
            console.log("====================================");

            var confirmacaoAlteracao = readline.question("Os dados estão corretos? (sim ou não): ");
            if (confirmacaoAlteracao.toLowerCase() === "sim") {
                console.clear();
                console.log("Alteração realizada com sucesso!");
                alteraCliente();
            } else {
                console.log("Os dados não foram confirmados. Volte ao menu inicial do sub menu CLIENTE para fazer alterações.");
                console.clear();
                telaCliente();
            }
            break;

        case 2:
            console.log("====================================");
            console.log("              LISTA                 ");
            console.log("==================================== \n");
            console.log("     NÃO HÁ CLIENTES CADASTRADOS \n ");
            console.log("====================================\n");
            readline.question("Pressione ENTER para continuar...");
            console.clear();
            break;

        case 3:
            console.log("Retornando ao menu Cliente...");
            telaCliente();
            break;

        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            alteraCliente();
            break;
    }
}

function excluirCliente() {
    console.log("====================================");
    console.log("               EXCLUIR               ");
    console.log("==================================== \n");
    console.log("     NÃO HÁ CLIENTES PARA EXCLUIR \n");
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar...");
    console.clear();
}
