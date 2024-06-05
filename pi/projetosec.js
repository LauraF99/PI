const readline = require("readline-sync");

// Variáveis de Login
const loginOk = "admin";
const senhaOk = "1234";
let login;
let senha;

// Produtos
const produtos = [
    { nome: "Coelho Sansão", id: "1", categoria: "Personagens", tamanho: "30cm", valor: "70.00" },
    { nome: "Astronauta", id: "2", categoria: "Profissões", tamanho: "25cm", valor: "130.00" }
];

// Clientes
const clientes = [
    { nome: "Marcelo", sobrenome: "Cavalcanti", id: "1", cpf: "115.585.024-58", endereco: "Avenida Caxangá", contato: 81995662312 },
    { nome: "Laura", sobrenome: "Ferreira", id: "2", cpf: "110.925.334-55", endereco: "Avenida Chagas Ferreira", contato: 81996069031 }
];

// Pedidos
const pedidos = [
    { cliente: "Marcelo", id: "1", idProduto: "1", tamanho: "30", quantidade: 2, valor: 70, pagamento: "crédito", status: "pendente" }
];

function entrada() {
    console.log("====================================");
    console.log("               ENTRAR               ");
    console.log("====================================\n");
    login = readline.question("      Login:          ");
    senha = readline.question("      Senha:          ");
    console.log("====================================\n");
    console.clear();
}

function verificarLogin() {
    do {
        entrada();
    } while (senha !== senhaOk || login !== loginOk);
}

function telaMenu() {
    console.log("====================================");
    console.log("                MENU                ");
    console.log("====================================\n");
    console.log("          1 - PRODUTO               ");
    console.log("          2 - PDV                   ");
    console.log("          3 - CLIENTE               ");
    console.log("          0 - SAIR                  ");
    console.log("====================================\n");
    let escolha = readline.questionInt("Digite a opção desejada: ");
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

function telaProduto() {
    console.log("====================================");
    console.log("              PRODUTO               ");
    console.log("====================================\n");
    console.log("           1 - CADASTRAR            ");
    console.log("           2 - ALTERAR              ");
    console.log("           3 - EXCLUIR              ");
    console.log("           4 - ESTOQUE              ");
    console.log("           0 - INÍCIO               ");
    console.log("====================================\n");
    let escolhaProduto = readline.questionInt("Digite a opção desejada: ");
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
    let novoProduto = {
        nome: readline.question("Qual o nome do produto? "),
        id: readline.question("Qual o id do produto? "),
        categoria: readline.question("Qual a categoria do produto? "),
        tamanho: readline.question("Digite o tamanho do produto: "),
        valor: readline.question("Digite o valor do produto: ")
    };
    console.log("====================================\n");
    console.clear();

    produtos.push(novoProduto);
    console.log("Novo produto cadastrado com sucesso!");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaProduto();
}

function alteraProduto() {
    console.log("====================================");
    console.log("           ALTERAR PRODUTO          ");
    console.log("====================================\n");
    for (let produto of produtos) {
        console.log(produto.id, produto.nome);
    }
    console.log("      0 - Voltar                    \n");
    console.log("====================================\n");
    let altera = readline.questionInt("Escolha o id do produto: ");
    console.clear();

    for (let produto of produtos) {
        if (produto.id == altera) {
            console.log("====================================");
            console.log("           ALTERAR PRODUTO          ");
            console.log("====================================\n");
            console.log(`\tId: ${produto.id}\n\tProduto: ${produto.nome}\n\tCategoria: ${produto.categoria}\n\tTamanho: ${produto.tamanho}\n\tValor: ${produto.valor}\n`);
            console.log("====================================\n"); 
            console.log("Pressione ENTER se não deseja alterar");

            let altNome = readline.question("Nome: ");
            if (altNome) produto.nome = altNome;

            let altCategoria = readline.question("Categoria: ");
            if (altCategoria) produto.categoria = altCategoria;

            let altTamanho = readline.question("Tamanho: ");
            if (altTamanho) produto.tamanho = altTamanho;

            let altValor = readline.question("Valor: ");
            if (altValor) produto.valor = altValor;
        }
    }

    console.log("\nProduto Alterado com sucesso!");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaProduto();
}

function excluiProduto() {
    console.log("====================================");
    console.log("           EXCLUIR PRODUTO          ");
    console.log("====================================\n");
    for (let produto of produtos) {
        console.log(produto.id, produto.nome);
    }
    console.log("       0 - Voltar");
    console.log("====================================\n");
    let excluiProd = readline.question("Selecione o ID do produto: ");
    console.clear();

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == excluiProd) {
            produtos.splice(i, 1);
            console.log("Produto excluído com sucesso");
            readline.question("Pressione ENTER para continuar");
            console.clear();
            telaProduto();
        } else if (excluiProd == 0) {
            telaProduto();
        } else {
            excluiProduto();
        }
    }
}

function estoque() {
    console.log("====================================");
    console.log("              ESTOQUE               ");
    console.log("====================================\n");
    for (let produto of produtos) {
        console.log(produto.id, produto.nome);
    }
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar...");
    console.clear();
    telaProduto();
}

function telaPdv() {
    console.log("====================================");
    console.log("                PDV                 ");
    console.log("====================================\n");
    console.log("         1 - PEDIDOS                ");
    console.log("         2 - HISTÓRICO              ");
    console.log("         3 - STATUS DO PEDIDO       ");
    console.log("         4 - RELATÓRIO DE VENDAS    ");
    console.log("         0 - INÍCIO                 ");
    console.log("====================================\n");
    let escolhaPDV = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaPDV) {
        case 1:
            telaPedidos();
            break;
        case 2:
            telaHistorico();
            break;
        case 3:
            telaStatus();
            break;
        case 4:
            telaRelatorio();
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
    let novoPedido = {
        cliente: readline.question("Nome do cliente: "),
        id: readline.question("ID do pedido: "),
        idProduto: readline.question("ID do produto: "),
        tamanho: readline.question("Tamanho do produto: "),
        quantidade: readline.questionInt("Quantidade do produto: "),
        valor: readline.questionInt("Preço do produto: R$"),
        pagamento: "",
        status: ""
    };

    console.log("====================================\n");

    let totalPedido = novoPedido.quantidade * novoPedido.valor;
    console.log(`valor total: R$ ${totalPedido}`);
    novoPedido.pagamento = readline.question("Qual a forma de pagamento: ");
    console.log("====================================\n");

    console.log("====================================");
    console.log("Confirme os dados do pedido:");
    console.log(`Cliente: ${novoPedido.cliente}`);
    console.log(`ID do pedido: ${novoPedido.id}`);
    console.log(`ID do produto: ${novoPedido.idProduto}`);
    console.log(`Tamanho: ${novoPedido.tamanho}`);
    console.log(`Quantidade: ${novoPedido.quantidade}`);
    console.log(`Preço: R$ ${novoPedido.valor}`);
    console.log(`Forma de pagamento: ${novoPedido.pagamento}`);
    console.log("====================================\n");

    let confirmarPedido = readline.question("O pedido está correto? (s/n): ");
    console.clear();

    if (confirmarPedido.toLowerCase() === 's') {
        novoPedido.status = "pendente";
        pedidos.push(novoPedido);
        console.log("Pedido realizado com sucesso!\n");
        readline.question("Pressione ENTER para continuar");
        console.clear();
        telaPdv();
    } else {
        console.log("Pedido cancelado.\n");
        readline.question("Pressione ENTER para continuar");
        console.clear();
        telaPedidos();
    }
}

function telaHistorico() {
    console.log("====================================");
    console.log("            HISTÓRICO               ");
    console.log("====================================\n");
    for (let pedido of pedidos) {
        console.log(`ID: ${pedido.id}\t Cliente: ${pedido.cliente}\t Status: ${pedido.status}`);
    }
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaPdv();
}

function telaStatus() {
    console.log("====================================");
    console.log("           STATUS DO PEDIDO         ");
    console.log("====================================\n");
    for (let pedido of pedidos) {
        console.log(pedido.id, pedido.status);
    }
    console.log("====================================\n");
    let mudaStatus = readline.questionInt("Selecione o ID do pedido para alterar o status: ");
    console.clear();

    for (let pedido of pedidos) {
        if (pedido.id == mudaStatus) {
            console.log("====================================");
            console.log("           ALTERAR STATUS           ");
            console.log("====================================\n");
            console.log(`ID: ${pedido.id}\nCliente: ${pedido.cliente}\nStatus: ${pedido.status}`);
            console.log("====================================\n");

            let novoStatus = readline.question("Novo status: ");
            pedido.status = novoStatus;

            console.log("\nStatus do pedido alterado com sucesso!");
            readline.question("Pressione ENTER para continuar");
            console.clear();
            telaPdv();
        }
    }
}

function telaRelatorio() {
    let valorTotalVendas = pedidos.reduce((total, pedido) => total + (pedido.valor * pedido.quantidade), 0);

    console.log("====================================");
    console.log("        RELATÓRIO DE VENDAS         ");
    console.log("====================================\n");
    console.log(`Valor total das vendas: R$ ${valorTotalVendas}`);
    console.log("====================================\n");

    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaPdv();
}

function telaCliente() {
    console.log("====================================");
    console.log("              CLIENTE               ");
    console.log("====================================\n");
    console.log("         1 - CADASTRAR              ");
    console.log("         2 - ALTERAR                ");
    console.log("         3 - EXCLUIR                ");
    console.log("         0 - INÍCIO                 ");
    console.log("====================================\n");
    let escolhaCliente = readline.questionInt("Digite a opção desejada: ");
    console.clear();

    switch (escolhaCliente) {
        case 1:
            cadastroCliente();
            break;
        case 2:
            alteraCliente();
            break;
        case 3:
            excluiCliente();
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

function cadastroCliente() {
    console.log("====================================");
    console.log("          CADASTRAR CLIENTE         ");
    console.log("====================================\n");

    let novoCliente = {
        nome: readline.question("Nome: "),
        sobrenome: readline.question("Sobrenome: "),
        id: readline.question("ID: "),
        cpf: readline.question("CPF: "),
        endereco: readline.question("Endereço: "),
        contato: readline.question("Contato: ")
    };
    console.log("====================================\n");
    console.clear();

    clientes.push(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaCliente();
}

function alteraCliente() {
    console.log("====================================");
    console.log("           ALTERAR CLIENTE          ");
    console.log("====================================\n");
    for (let cliente of clientes) {
        console.log(cliente.id, cliente.nome);
    }
    console.log("       0 - Voltar");
    console.log("====================================\n");
    let altera = readline.questionInt("Escolha o id do cliente: ");
    console.clear();

    for (let cliente of clientes) {
        if (cliente.id == altera) {
            console.log("====================================");
            console.log("           ALTERAR CLIENTE          ");
            console.log("====================================\n");
            console.log(`ID: ${cliente.id}\nNome: ${cliente.nome}\nSobrenome: ${cliente.sobrenome}\nCPF: ${cliente.cpf}\nEndereço: ${cliente.endereco}\nContato: ${cliente.contato}`);
            console.log("====================================\n");
            console.log("Pressione ENTER se não deseja alterar");

            let altNome = readline.question("Nome: ");
            if (altNome) cliente.nome = altNome;

            let altSobrenome = readline.question("Sobrenome: ");
            if (altSobrenome) cliente.sobrenome = altSobrenome;

            let altCpf = readline.question("CPF: ");
            if (altCpf) cliente.cpf = altCpf;

            let altEndereco = readline.question("Endereço: ");
            if (altEndereco) cliente.endereco = altEndereco;

            let altContato = readline.question("Contato: ");
            if (altContato) cliente.contato = altContato;
        }
    }

    console.log("\nCliente Alterado com sucesso!");
    readline.question("Pressione ENTER para continuar");
    console.clear();
    telaCliente();
}

function excluiCliente() {
    console.log("====================================");
    console.log("           EXCLUIR CLIENTE          ");
    console.log("====================================\n");
    for (let cliente of clientes) {
        console.log(cliente.id, cliente.nome);
    }
    console.log("       0 - Voltar");
    console.log("====================================\n");
    let excluiCli = readline.questionInt("Selecione o ID do cliente: ");
    console.clear();

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id == excluiCli) {
            clientes.splice(i, 1);
            console.log("Cliente excluído com sucesso");
            readline.question("Pressione ENTER para continuar");
            console.clear();
            telaCliente();
        } else if (excluiCli == 0) {
            telaCliente();
        } else {
            excluiCliente();
        }
    }
}

verificarLogin();
telaMenu();
