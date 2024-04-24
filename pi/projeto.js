var readline = require("readline-sync")

var loginok = "1234"
var login

var senhaok = "1234"
var senha

console.log("====================================")
console.log("               ENTRAR               ")
console.log("====================================")
console.log("                                    ")
login = readline.question("      Login:          ");
senha = readline.question("      Senha:          ");
console.log("                                    ")
console.log("                                    ")
console.log("====================================\n")

while (login != loginok) {


    if (login == loginok) {
        console.log("login correto.")
        break;
    } else {
        console.log("Tente novamente.");
    }
}


while (senha != senhaok) {

    if (senha == senhaok) {
        console.log("Senha correta.")
        break;
    } else {
        console.log("Tente novamente.");
    }
}

var escolha;

do {
    console.log("====================================")
    console.log("               MENU                 ")
    console.log("====================================")
    console.log("          1 - PRODUTO               ")
    console.log("          2 - PDV                   ")
    console.log("          3 - CLIENTE               ")
    console.log("          0 - SAIR                  ")
    escolha = readline.questionInt("Digite a opção desejada:");
    console.log("====================================\n")


    switch (escolha) {
        case 1:
            var escolhaProduto;
            do {
                console.log("====================================")
                console.log("              PRODUTO               ")
                console.log("====================================")
                console.log("           1 - CADASTRAR            ")
                console.log("           2 - ALTERAR              ")
                console.log("           3 - EXCLUIR              ")
                console.log("           4 - ESTOQUE              ")
                console.log("           0 - INÍCIO               ")
                escolhaProduto = readline.questionInt("Digite a opção desejada: ");
                console.log("====================================\n")



                switch (escolhaProduto) {
                    case 1:
                        console.log("CADASTRAR PRODUTO");
                        // Lógica para cadastrar um produto
                        // Quais serão os atributos dos produtos para poder inserir as opções aqui????
                        break;
                    case 2:
                        console.log("ALTERAR PRODUTO");
                        // Lógica para alterar um produto
                        // Depois que um produto for criado, as informações dele deverão ser armazenadas para que esse sub menu possa identificá-lo no histórico a partir do nome ou tipo
                        break;
                    case 3:
                        console.log("EXCLUIR PRODUTO");
                        // Lógica para excluir um produto
                        // Depois que um produto for criado, as informações dele deverão ser armazenadas para que esse sub menu possa identificá-lo no histórico a partir do nome ou tipo
                        break;
                    case 4:
                        console.log("ESTOQUE PRODUTO");
                        // Lógica para verificar estoque
                        break;
                    case 0:
                        console.log("Retornando a PRODUTO...");
                        break;
                    default:
                        console.log("Opção inválida. Por favor, digite uma opção válida.");
                        break;
                }
            } while (escolhaProduto !== 0);
            break;

        case 2:
            var escolhaPDV;
            do {

                console.log("====================================")
                console.log("               PDV                  ")
                console.log("====================================")
                console.log("          1 - PEDIDOS               ")
                console.log("          2 - HISTÓRICO             ")
                console.log("          3 - PAGAMENTO             ")
                console.log("          0 - INÍCIO                ")
                escolhaPDV = readline.questionInt("Digite a opção desejada:");
                console.log("====================================\n")


                switch (escolhaPDV) {
                    case 1:
                        console.log("Executando a opção PEDIDOS do sub menu PDV");
                        // Lógica para registrar pedidos
                        break;
                    case 2:
                        console.log("Executando a opção HISTORICO do sub menu PDV");
                        // Lógica para exibir histórico de vendas
                        break;
                    case 3:
                        console.log("Executando a opção FORMA PGMT do sub menu PDV");
                        // Lógica para configurar formas de pagamento
                        break;
                    case 0:
                        console.log("Retornando ao menu inicial do sub menu PDV...");
                        break;
                    default:
                        console.log("Opção inválida. Por favor, digite uma opção válida.");
                        break;
                }
            } while (escolhaPDV !== 0);
            break;

        case 3:
            var escolhaCliente;
            do {

                console.log("====================================")
                console.log("              CLIENTE               ")
                console.log("====================================")
                console.log("          1 - NOVO                  ")
                console.log("          2 - ALTERAR               ")
                console.log("          3 - EXCLUIR               ")
                console.log("          0 - INÍCIO                ")
                escolhaCliente = readline.questionInt("Digite a opção desejada: ");
                console.log("====================================\n")


                switch (escolhaCliente) {
                    case 1:
                        var novoCliente = {
                            nome: "",
                            sobrenome: "",
                            cpf: "",
                            endereco: "",
                            contato: 0
                        };

                        console.log("====================================")
                        console.log("           NOVO CLIENTE             ")
                        console.log("====================================")
                        novoCliente.nome = readline.question("Qual o nome do cliente? ");
                        novoCliente.sobrenome = readline.question("Qual o sobrenome do cliente? ");
                        novoCliente.cpf = readline.question("Digite o CPF do cliente: ");
                        novoCliente.endereco = readline.question("Digite o endereço do cliente: ");
                        novoCliente.contato = readline.questionInt("Digite o contato do cliente: ");
                        console.log("====================================\n")


                        console.log("Confirme os dados do novo cliente:");
                        console.log("Nome:", novoCliente.nome);
                        console.log("Sobrenome:", novoCliente.sobrenome);
                        console.log("CPF:", novoCliente.cpf);
                        console.log("Endereço:", novoCliente.endereco);
                        console.log("Contato:", novoCliente.contato);

                        var confirmacao = readline.question("Os dados estão corretos? (sim ou não):");
                        if (confirmacao.toLowerCase() === "sim") {
                            console.log("Novo cliente cadastrado com sucesso!\n");
                            readline.question("pressione pra continuar...")
                            console.clear();
                        } else {
                            console.log("Os dados não foram confirmados. Volte ao menu CLIENTE para fazer alterações.\n");
                        }

                        break;

                    case 2:
                        var escolhaAlterar;
                        do {
                            console.log("SUB MENU ALTERAR DADOS CLIENTE");
                            console.log("1 - PESQUISAR POR NOME");
                            console.log("2 - LISTAR TODOS");
                            console.log("3 - RETORNAR");

                            escolhaAlterar = readline.questionInt("Digite a opção desejada:");

                            switch (escolhaAlterar) {
                                case 1:
                                    var nomeCliente = readline.question("Digite o nome e sobrenome do cliente: ");

                                    // Código para pesquisar e exibir informações do cliente
                                    // Exibindo informações teste até aprender a fazer essa bagaça!!!
                                    console.log("   Dados do Cliente:");
                                    console.log("1 - Nome: Marcelo");
                                    console.log("2 - Sobrenome: Cavalcanti");
                                    console.log("3 - CPF: 081.727.864-84");
                                    console.log("4 - Endereço: Rua tal, numero tal, bairro tal");
                                    console.log("5 - Contato: 81 98690-3607");
                                    // ...
                                    console.log("")
                                    console.log("Opções de alteração para o cliente:");
                                    console.log("1 - Nome");
                                    console.log("2 - Sobrenome");
                                    console.log("3 - CPF");
                                    console.log("4 - Endereço");
                                    console.log("5 - Contato");

                                    var opcaoAlteracao = readline.questionInt("Digite a opção de alteração desejada: ");

                                    // Código para realizar a alteração no cliente
                                    // ...

                                    console.log("Confirme os dados alterados:");
                                    // Exibir dados alterados (dá pra grifar o que foi alterado????)
                                    console.log("1 - Nome: Marcelo");
                                    console.log("2 - Sobrenome: Cavalcanti");
                                    console.log("3 - CPF: 081.727.864-84");
                                    console.log("4 - Endereço: Rua tal, numero tal, bairro tal");
                                    console.log("5 - Contato: 81 98690-3607")
                                    // ...

                                    var confirmacaoAlteracao = readline.question("Os dados estão corretos? (sim ou não): ");
                                    if (confirmacaoAlteracao.toLowerCase() === "sim") {
                                        console.log("Alteração realizada com sucesso!");
                                    } else {
                                        console.log("Os dados não foram confirmados. Volte ao menu inicial do sub menu CLIENTE para fazer alterações.");
                                    }

                                    break;

                                case 2:
                                    // Código para listar todos os clientes e realizar a alteração
                                    // QUANDO O USUÁRIO CADASTRAR UM CLIENTE NOVO, CADA CLIENTE DEVE TER UMA ID AUXILIAR CRIADA PELO SISTEMA QUE DEVE AGREGAR TODAS AS INFORMAÇÕES PREENCHIDAS (acredito que deva ser um array)
                                    // ...
                                    break;

                                case 3:
                                    console.log("Retornando ao menu inicial...");
                                    break;

                                default:
                                    console.log("Opção inválida. Por favor, digite uma opção válida.");
                                    break;
                            }
                        } while (escolhaAlterar !== 3);

                        break;

                    case 3:
                        // Sub menu EXCLUIR
                        // ...
                        break;

                    case 0:
                        console.log("Retornando ao menu inicial...");
                        break;

                    default:
                        console.log("Opção inválida. Por favor, digite uma opção válida.");
                        break;
                }
            } while (escolhaCliente !== 0);

            break;

        case 0:
            console.log("Saindo do sistema...");
            break;

        default:
            console.log("Opção inválida. Por favor, digite uma opção válida.");
            break;
    }
} while (escolha !== 0);