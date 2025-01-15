const cart = [];
document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = document.querySelectorAll('.product')[index];
        const name = product.querySelector('h3').innerText;
        const price = product.querySelector('p').innerText;
        cart.push({ name, price });
        alert(`${name} has been added to your cart!`);
    });
});