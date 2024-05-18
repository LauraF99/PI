/* Sistema de Cadastro de clientes */
/*const readline = require("readline-sync");

var op;
var nome = "";
var sobrenome = "";

do {
  console.clear();
  console.log("=========================================");
  console.log("|    Sistema de Cadastro de Clientes    |");
  console.log("=========================================");
  console.log("|\t\t\t\t\t|");
  console.log("|\t1. Cadastrar novo cliente\t|");
  console.log("|\t2. Listar todos os clientes\t|");
  console.log("|\t3. Alterar um cliente\t\t|");
  console.log("|\t4. Remover um cliente\t\t|");
  console.log("|\t0. Sair do sistema\t\t|");
  console.log("|\t\t\t\t\t|");
  console.log("|=======================================|");

  op =readline.questionInt("Escolha uma opcao: ");

  switch (op) {
    case 1:
      console.log("Cadastrando novo cliente...");
      nome = readline.question("Nome: ");
      sobrenome = readline.question("Sobrenome: ");
      console.log(`Cliente ${nome} ${sobrenome} cadastrado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 2:
      console.log("Listando todos os clientes...");
      console.log(`${nome} ${sobrenome}`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 3:
      console.log("Alterando um cliente...");
      nome = readline.question("Nome: ");
      sobrenome = readline.question("Sobrenome: ");
      console.log(`Cliente atualizado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 4:
      console.log("Digite o nome do cliente que deseja remover:");
      var clienteRemovido = readline.question("Nome: ");
      nome = "";
      sobrenome = "";
      console.log(`Cliente ${nome} ${sobrenome} removido com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 0:
      console.log("Saindo do sistema...");
      readline.question("Pressione ENTER para continuar...");
      break;
    default:
      console.log("Opção inválida.");
      readline.question("Pressione ENTER para continuar...");
  }
} while (op !== 0); */

produtos = [];

let readline = require("readline-sync")
let novoProduto = {
  nome: "",
  categoria: "",
  tamanho: "",
  valor: ""
};

console.log("====================================")
console.log("           NOVO PRODUTO             ")
console.log("====================================")
novoProduto.nome = readline.question("Qual o nome do produto? ");
novoProduto.categoria = readline.question("Qual a categoria do produto? ");
novoProduto.tamanho = readline.question("Digite o tamanho do produto: ");
novoProduto.valor = readline.question("Digite o preço do produto: ");
console.log("====================================\n")

console.log(novoProduto);


produtos.push(novoProduto);

console.log(produtos);
