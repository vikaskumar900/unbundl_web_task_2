document.addEventListener('DOMContentLoaded', function () {
    const chocolates = document.querySelectorAll('.chocolate');
    const selectedList = document.querySelector('.selected-list');
    const totalPrice = document.querySelector('.total-price');

    let selectedChocolates = [];

    chocolates.forEach(chocolate => {
        chocolate.addEventListener('click', () => {
            const name = chocolate.dataset.name;
            const price = parseFloat(chocolate.dataset.price);

            // Check if the chocolate is already selected
            const index = selectedChocolates.findIndex(item => item.name === name);

            if (index !== -1) {
                selectedChocolates[index].quantity += 1;
            } else {
                selectedChocolates.push({ name, price, quantity: 1 });
            }

            updateSelectedList();
            updateTotalPrice();
        });
    });

    function updateSelectedList() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.quantity}`;
            selectedList.appendChild(li);
        });
    }

    function updateTotalPrice() {
        const total = selectedChocolates.reduce((acc, item) => acc + item.price * item.quantity, 0);
        totalPrice.textContent = total.toFixed(2);
    }
});
