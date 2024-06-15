document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const products = document.querySelectorAll('.product');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart`);
}
