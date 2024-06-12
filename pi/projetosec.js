const readline = require("readline-sync");

let loginok = "admin";
let login;

let senhaok = "1234";
let senha;

let produto1 = {
    nome: "Coelho Sansão",
    id: "1",
    categoria: "Personagens",
    tamanho: "30cm",
    valor: "70.00",
};

let produto2 = {
    nome: "Astronauta",
    id: "2",
    categoria: "Profissões",
    tamanho: "25cm",
    valor: "130.00",
};

let produtos = [produto1, produto2];

let cliente1 = {
    nome: "Marcelo",
    sobrenome: "Cavalcanti",
    id: "1",
    cpf: "115.585.024-58",
    endereco: "Avenida Caxangá",
    contato: 81995662312
}

let cliente2 = {
    nome: "Laura",
    sobrenome: "Ferreira",
    id: "2",
    cpf: "110.925.334-55",
    endereco: "Avenida Chagas Ferreira",
    contato: 81996069031
}

let clientes = [cliente1, cliente2]

let pedido1 = {
    cliente: "Marcelo",
    id: "1",
    idProduto: "1",
    tamanho: "30",
    quantidade: 2,
    valor: 70,
    pagamento: "crédito",
    status: "pendente",
}

let pedidos = [pedido1]

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
telaMenu();

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
    for(let i in produtos){
        console.log(produtos[i].id, produtos[i].nome);
    }
    console.log("      0 - Voltar                    \n");
    console.log("====================================\n");
    altera = readline.questionInt("Escolha o id do produto: ");
    console.clear();

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == altera) {
            console.log("====================================");
            console.log("           ALTERAR PRODUTO          ");
            console.log("====================================\n");
            console.log(`\tId: ${produtos[i].id}\n\tProduto: ${produtos[i].nome}\n\tCategoria: ${produtos[i].categoria}\n\tTamanho: ${produtos[i].tamanho}\n\tValor: ${produtos[i].valor}\n`);
            console.log("====================================\n"); 
            console.log("Pressione ENTER se não deseja alterar");
            
            let altNome = readline.question("Nome: ")
            if (altNome != "") {
                produtos[i].nome = altNome
            }
            
            let altCategoria= readline.question("Categoria: ")
            if (altCategoria != "") {
                produtos[i].categoria = altCategoria
            }
            
            let altTamanho = readline.question("Tamanho: ")
            if (altTamanho!= "") {
                produtos[i].tamanho = altTamanho
            }
            
            let altValor = readline.question("Valor: ")
            if (altValor != "") {
                produtos[i].valor = altValor
            }
        }
    }
    
console.log("\nProduto Alterado com sucesso!");
readline.question("Pressione para continuar");
console.clear();
telaProduto();
}

function excluiProduto() {
    console.log("====================================")
    console.log("           EXCLUIR PRODUTO          ")
    console.log("====================================")
    for(let i in produtos){
        console.log(produtos[i].id, produtos[i].nome);
    }
    console.log("       0 - Voltar");
    console.log("====================================\n")
    let excluiProd = readline.question("Selecione o ID do produto: ");
    console.clear();

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == excluiProd) {
            produtos.splice(i,1)
            console.log("Produto excluido com sucesso")
            readline.question("pressione ENTER para continuar")
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
    console.log("====================================")
    console.log("              ESTOQUE               ")
    console.log("====================================")
    console.table(produtos.map(prod => ({
        ID: prod.id,
        Nome: prod.nome,
        Categoria: prod.categoria,
        Tamanho: prod.tamanho,
        Valor: `R$ ${prod.valor}`
    })));
    console.log("====================================\n")
    readline.question("pressione pra continuar...")
    console.clear();
    telaProduto ();
    
}

function telaPdv() {
    
    console.log("====================================");
    console.log("                PDV                 ");
    console.log("====================================");
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
        nome: "",
        id: "",
        idProduto: "",
        tamanho: "",
        quantidade: "",
        valor: "",
        pagamento: "",
        status: "",
    }

    console.log("====================================");
    console.log("              PEDIDOS              ");
    console.log("==================================== \n");
    novoPedido.nome= readline.question("Nome do cliente: ");
    novoPedido.id = readline.question("ID do pedido: ");
    novoPedido.idProduto = readline.question("ID do produto: ");
    novoPedido.tamanho = readline.question("Tamanho do produto: ");
    novoPedido.quantidade = readline.questionInt("Quantidade do produto: ");
    novoPedido.valor = readline.questionInt("Preço do produto: R$");
    console.log("====================================\n");

    let totalPedido = novoPedido.quantidade * novoPedido.valor;
    console.log(`valor total: R$ ${totalPedido}`);
    novoPedido.pagamento = readline.question("Qual a forma de pagamento: ");
    console.log("====================================\n");

    console.log("====================================");
    console.log("Confirme os dados do pedido:");
    console.log(`cliente: ${novoPedido.nome}`);
    console.log(`ID do produto: ${novoPedido.id}`);
    console.log(`ID do produto: ${novoPedido.idProduto}`);
    console.log(`Tamanho: ${novoPedido.tamanho}`);
    console.log(`Quantidade: ${novoPedido.quantidade} unid`);
    console.log(`Valor total: R$ ${totalPedido}`);
    console.log(`Forma de pagamento: ${novoPedido.pagamento}`);
    console.log("====================================\n");

    let confirmacaoPedido = readline.question("Os dados estão corretos? (sim ou não): ");
    if (confirmacaoPedido.toLowerCase() === "sim") {
        novoPedido.status = readline.question("Status do pedido (pendente, em andamento, concluído): ");
        console.log("Novo pedido cadastrado com sucesso!\n");
        pedidos.push(novoPedido);
        readline.question("Pressione ENTER para continuar...");
        console.clear();
        telaPdv();
    } else {
        console.log("Os dados não foram confirmados. Volte ao menu CLIENTE para fazer alterações.\n");
    }
    console.clear();
    telaPdv();
}

function telaHistorico() {
    console.log("====================================");
    console.log("              HISTÓRICO             ");
    console.log("==================================== \n");
    console.table(pedidos.map(ped => ({
        Cliente: ped.cliente,
        ID: ped.id,
        idProduto: ped.idProduto,
        Quantidade: ped.quantidade,
        ValorUnid: ped.valor,
    })));
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar...");
    console.clear();
    telaPdv();
}

function telaStatus() {
    console.log("====================================");
    console.log("          STATUS DO PEDIDO          ");
    console.log("==================================== \n");

    let idPedido = readline.question("Digite o ID do pedido que deseja atualizar: ");
    let pedido = pedidos.find(p => p.id === idPedido);

    if (pedido) {
        console.log(`Pedido encontrado: Cliente: ${pedido.cliente}, Pedido ID: ${pedido.id}, Status atual: ${pedido.status}`);
        let novoStatus = readline.question("Digite o novo status do pedido (pendente, em andamento, concluído): ");
        pedido.status = novoStatus;
        console.log("Status do pedido atualizado com sucesso!\n");
    } else {
        console.log("Pedido não encontrado.\n");
        telaStatus();
    }

    readline.question("Pressione ENTER para continuar...");
    console.clear();
    telaPdv();

}

function telaRelatorio() {
    console.log("====================================");
    console.log("         RELATÓRIO DE VENDAS       ");
    console.log("==================================== \n");
    let totalVendas = 0;
    let quantidadeTotal = 0;

    pedidos.forEach(pedido => {
        let valorPedido = pedido.quantidade * pedido.valor;
        totalVendas += valorPedido;                                                                           
        quantidadeTotal += pedido.quantidade;
        console.log(`Cliente: ${pedido.cliente}\n Produto ID: ${pedido.id}\n Tamanho: ${pedido.tamanho}\n Quantidade: ${pedido.quantidade}\n Valor Unitário: R$${pedido.valor}\n Valor Total: R$${valorPedido}\n Forma de Pagamento: ${pedido.pagamento}`);
    });

    console.log("\n====================================");
    console.log(`Total de Vendas: R$ ${totalVendas}`);
    console.log(`Total de Itens Vendidos: ${quantidadeTotal}`);
    console.log("====================================\n");

    readline.question("Pressione ENTER para continuar...");
    console.clear();
    telaPdv();
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
        id: "",
        cpf: "",
        endereco: "",
        contato: 0
    };

    console.log("====================================");
    console.log("           NOVO CLIENTE             ");
    console.log("====================================");
    adcCliente.nome = readline.question("Qual o nome do cliente? ");
    adcCliente.sobrenome = readline.question("Qual o sobrenome do cliente? ");
    adcCliente.id = readline.question("Digite o id: ")
    adcCliente.cpf = readline.question("Digite o CPF do cliente: ");
    adcCliente.endereco = readline.question("Digite o endereço do cliente: ");
    adcCliente.contato = readline.questionInt("Digite o contato do cliente: ");
    console.log("====================================\n");
    console.clear();

    console.log("====================================");
    console.log("Confirme os dados do novo cliente:");
    console.log("Nome:", adcCliente.nome);
    console.log("Sobrenome:", adcCliente.sobrenome);
    console.log("id:", adcCliente.id);
    console.log("CPF:", adcCliente.cpf);
    console.log("Endereço:", adcCliente.endereco);
    console.log("Contato:", adcCliente.contato);
    console.log("====================================\n");

    let confirmacao = readline.question("Os dados estão corretos? (sim ou não): ");
    if (confirmacao.toLowerCase() === "sim") {
        console.log("Novo cliente cadastrado com sucesso!\n");
        clientes.push(adcCliente);
        readline.question("Pressione ENTER para continuar...");
        console.clear();
        telaCliente();
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
            pesquisaCliente();
            break;
        case 2:
            listaCliente();
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
function pesquisaCliente() {
    let altera;

    console.log("====================================");
    console.log("           ALTERAR CLIENTE          ");
    console.log("====================================\n");
    for(let i in clientes){
        console.log(clientes[i].id, clientes[i].nome);
    }
    console.log("      0 - Voltar                    \n");
    console.log("====================================\n");
    altera = readline.question("Digite o nome do cliente: ");
    console.clear();

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].nome == altera) {
            console.log("====================================");
            console.log("           ALTERAR CLIENTE          ");
            console.log("====================================\n");
            console.log(`\tId: ${clientes[i].id}\n\tNome: ${clientes[i].nome}\n\tSobrenome: ${clientes[i].sobrenome}\n\tCPF: ${clientes[i].cpf}\n\tEndereço: ${clientes[i].endereco}\n\tContato: ${clientes[i].contato}\n`);
            console.log("====================================\n"); 
            console.log("Pressione ENTER se não deseja alterar");
            
            let altNome = readline.question("Nome: ")
            if (altNome != "") {
                clientes[i].nome = altNome
            }
            
            let altSobrenome= readline.question("Sobrenome: ")
            if (altSobrenome != "") {
                clientes[i].sobrenome = altSobrenome
            }
            
            let altCpf = readline.question("CPF: ")
            if (altCpf!= "") {
                clientes[i].cpf = altCpf
            }
            
            let altEndereço = readline.question("Endereço: ")
            if (altEndereço != "") {
                clientes[i].endereco = altEndereço
            }

            let altContato = readline.question("Contato: ")
            if (altContato != "") {
                clientes[i].contato = altContato
            }
        }
    }
    
console.log("\nCliente Alterado com sucesso!");
readline.question("Pressione para continuar");
console.clear();
telaCliente();
    
}

function listaCliente() {
    
    console.log("====================================");
    console.log("              LISTA                 ");
    console.log("==================================== \n");
    console.table(clientes.map(client => ({
        ID: client.id,
        Nome: client.nome,
        Sobrenome: client.sobrenome,
        CPF: client.cpf,
        Endereço: client.endereco,
        Contato: client.contato,
    })));
    console.log("====================================\n");
    readline.question("Pressione ENTER para continuar...");
    console.clear();
    telaCliente();
    
}            
    function excluirCliente() {
                console.log("====================================");
                console.log("               EXCLUIR               ");
                console.log("==================================== \n");
                for(let i in clientes){
                    console.log(clientes[i].id, clientes[i].nome);
                }
                console.log("       0 - Voltar");
                console.log("====================================\n");
                let excluiId = readline.question("Selecione o ID do cliente: ");
                console.clear();
                
                for (let i = 0; i < clientes.length; i++) {
                    if (clientes[i].id == excluiId) {
                        clientes.splice(i,1)
                        console.log("cliente excluido com sucesso")
                        readline.question("pressione ENTER para continuar")
                        console.clear();
                        telaCliente();
                        
                    } else if (excluiId == 0) {
                        telaCliente();
                    } else {
                        excluirCliente();
                    }
                }
                
            }
            
