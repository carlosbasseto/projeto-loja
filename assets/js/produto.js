document.addEventListener("DOMContentLoaded", function() {
    const selectCategoria = document.getElementById("categorias");
    const inputTaxa = document.getElementById("taxa");
    const spanValor = document.getElementById("valor");
  
    selectCategoria.addEventListener("change", calcularValor);
    inputTaxa.addEventListener("input", calcularValor);
  
    function calcularValor() {
      const categoriaSelecionada = selectCategoria.value;
      const taxa = parseFloat(inputTaxa.value) || 0; // Valor padrão de 0 se o campo estiver vazio
      let valor = 0;
  
      if (categoriaSelecionada === "1") {
        valor = 70 * (1 + taxa / 100);
      }

      if (categoriaSelecionada === "2") {
        valor = 80 * (1 + taxa / 100);
      }

      if (categoriaSelecionada === "3") {
        valor = 25 * (1 + taxa / 100);
      }

      if (categoriaSelecionada === "4") {
        valor = 90 * (1 + taxa / 100);
      }

      spanValor.textContent = `R$ ${valor.toFixed(2)}`;
    }
  });


 // Adicionar evento de clique para a imagem do produto
 document.addEventListener('DOMContentLoaded', function () {
  const produtoImgs = document.querySelectorAll('.produto-img');
  produtoImgs.forEach(function (produtoImg) {
      produtoImg.addEventListener('click', function () {
          // Envie as informações para a página carrinho.html via localStorage
          const imagemProduto = produtoImg.src;
          localStorage.setItem('imagemProduto', imagemProduto);
          window.location.href = 'carrinho.html'; // Redirecione para a página carrinho.html
      });
  });
});