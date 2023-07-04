// Dados de agendamentos
var agendamentos = [];

// Função para adicionar um agendamento
function adicionarAgendamento(cliente, data, hora) {
  var agendamento = {
    cliente: cliente,
    data: data,
    hora: hora
  };

  agendamentos.push(agendamento);
  exibirAgendamentos();
}

// Função para exibir os agendamentos na lista
function exibirAgendamentos() {
  var listaAgendamentos = document.getElementById("listaAgendamentos");
  listaAgendamentos.innerHTML = "";

  for (var i = 0; i < agendamentos.length; i++) {
    var agendamento = agendamentos[i];

    var li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.textContent = agendamento.cliente + " - " + agendamento.data + " - " + agendamento.hora;

    li.addEventListener("click", function() {
      selecionarAgendamento(this);
    });

    listaAgendamentos.appendChild(li);
  }
}

// Função para selecionar um agendamento da lista
function selecionarAgendamento(element) {
  var index = element.getAttribute("data-index");
  var agendamento = agendamentos[index];

  document.getElementById("edicaoCliente").value = agendamento.cliente;
  document.getElementById("edicaoData").value = agendamento.data;
  document.getElementById("edicaoHora").value = agendamento.hora;

  document.getElementById("agendamentos").style.display = "none";
  document.getElementById("edicaoAgendamento").style.display = "block";
}

// Função para salvar a edição de agendamento
function salvarEdicao() {
  var index = document.getElementById("listaAgendamentos").querySelector("li.selected").getAttribute("data-index");
  var agendamento = agendamentos[index];

  agendamento.cliente = document.getElementById("edicaoCliente").value;
  agendamento.data = document.getElementById("edicaoData").value;
  agendamento.hora = document.getElementById("edicaoHora").value;

  document.getElementById("edicaoCliente").value = "";
  document.getElementById("edicaoData").value = "";
  document.getElementById("edicaoHora").value = "";

  document.getElementById("agendamentos").style.display = "block";
  document.getElementById("edicaoAgendamento").style.display = "none";

  exibirAgendamentos();
}

// Função para cancelar a edição de agendamento
function cancelarEdicao() {
  document.getElementById("edicaoCliente").value = "";
  document.getElementById("edicaoData").value = "";
  document.getElementById("edicaoHora").value = "";

  document.getElementById("agendamentos").style.display = "block";
  document.getElementById("edicaoAgendamento").style.display = "none";
}

// Função para excluir um agendamento
function excluirAgendamento() {
  var index = document.getElementById("listaAgendamentos").querySelector("li.selected").getAttribute("data-index");
  agendamentos.splice(index, 1);

  document.getElementById("edicaoCliente").value = "";
  document.getElementById("edicaoData").value = "";
  document.getElementById("edicaoHora").value = "";

  document.getElementById("agendamentos").style.display = "block";
  document.getElementById("edicaoAgendamento").style.display = "none";

  exibirAgendamentos();
}

// Manipulador de evento para o agendamento de novos agendamentos
document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos do formulário
  var cliente = document.getElementById("cliente").value;
  var data = document.getElementById("data").value;
  var hora = document.getElementById("hora").value;

  // Realiza o processamento do agendamento
  adicionarAgendamento(cliente, data, hora);

  // Limpa os campos do formulário
  document.getElementById("cliente").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
});

// Inicialização da lista de agendamentos
exibirAgendamentos();
