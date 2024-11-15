
document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produto');
    const noProductsMessage = document.querySelector('.no-products');
    if (produtos.length === 0) {
        noProductsMessage.style.display = 'block';
    }
});
                               