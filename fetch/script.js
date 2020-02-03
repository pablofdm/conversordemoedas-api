let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";
let change = true;
var botao = document.getElementById("troca");

// FUNÇÕES QUE TROCAM ATRIBUTOS PRA REALIZAR A TROCA DE MOEDAS A CONVERTER

function trocaMoeda() {
  document.getElementById("label").innerHTML = `<label id="label" for="exampleInputEmail1">Valor em reais:</label>`;
  document.getElementById("troca").innerHTML = "U$ PARA R$";
  document.getElementById("troca").value = "U$ PARA R$";
  botao.setAttribute("onclick", "retrocaMoeda()")
}

function retrocaMoeda(){
    document.getElementById("label").innerHTML = `<label id="label" for="exampleInputEmail1">Valor em dólares:</label>`;
    document.getElementById("troca").innerHTML = "R$ PARA U$";
    document.getElementById("troca").value = "R$ PARA U$";
    botao.setAttribute("onclick", "trocaMoeda()");
}

// FUNÇÃO QUE PEGA O VALOR DA COTAÇÃO DENTRO DA API E REALIZA O CALCULO / MANDA IMPRIMIR NA TELA A RESPOSTA

function converter() {
  let valor = document.getElementById("valor").value;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let valorRate = data.rates.BRL;
      valorNovo = valorRate.toFixed(2);

      if (botao.value = "U$ PARA R$") {
        valorCalc = valor / valorNovo;
        let resultado = `R$${valor} é igual $${valorCalc} na cotação atual.`;
        document.getElementById("resposta").innerHTML = resultado;
      } else if (botao.value = "R$ PARA U$") {
        valorCalc = valor * valorNovo;
        let resultado = `$${valor} é igual R$${valorCalc} na cotação atual.`;
        document.getElementById("resposta").innerHTML = resultado;
      } else {
          alert("Adicione um valor.");
      }
    });
}

