 // Verifique se há uma imagem de produto no armazenamento local
 const imagemProduto = localStorage.getItem('imagemProduto');
        
 // Atualize a imagem do produto na página carrinho.html
 if (imagemProduto) {
     document.getElementById('imagemProduto').src = imagemProduto;
 }