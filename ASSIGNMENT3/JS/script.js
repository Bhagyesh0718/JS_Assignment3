document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('pizzaForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const crust = document.querySelector('input[name="crust"]:checked').value;
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;
        const sauce = document.getElementById('sauce').value;
        const cheese = document.getElementById('cheese').value;
        const meats = getSelectedCheckboxValues('meat');
        const veggies = getSelectedCheckboxValues('veggie');

        const pizza = new Pizza(crust, size, quantity, sauce, cheese, meats, veggies);

        const pizzaOutput = document.getElementById('pizzaOutput');
        pizzaOutput.innerHTML = `
            <p>You ordered ${quantity} ${size} pizza(s) with ${crust} crust, ${sauce} sauce, ${cheese} cheese, ${meats.join(', ')} and ${veggies.join(', ')}.</p>
        <br>
        <p> THANK YOU & HAVE A GREAT DAY`;

    });

    function getSelectedCheckboxValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        const values = Array.from(checkboxes).map(cb => cb.value);
        return values;
    }

    class Pizza {
        constructor(crust, size, quantity, sauce, cheese, meats, veggies) {
            this.crust = crust;
            this.size = size;
            this.quantity = quantity;
            this.sauce = sauce;
            this.cheese = cheese;
            this.meats = meats;
            this.veggies = veggies;
        }
    }
});
