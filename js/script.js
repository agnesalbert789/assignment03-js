// Define student ID and name
const studentId = '200588943';
const studentName = 'Mary Agnes Albert';

// Add student ID and name to the page
document.getElementById('studentName').innerText = studentName;
document.getElementById('studentId').innerText = studentId;

// Handle delivery option change
const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
deliveryOptions.forEach(option => {
    option.addEventListener('change', function() {
        if (this.value === 'Delivery') {
            document.getElementById('addressSection').style.display = 'block';
        } else {
            document.getElementById('addressSection').style.display = 'none';
        }
    });
});

// Handle the form submission
const pizzaForm = document.getElementById('pizzaForm');
pizzaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
    const toppings = Array.from(document.querySelectorAll('.toppings input:checked')).map(input => input.value);
    const sides = Array.from(document.querySelectorAll('.sides input:checked')).map(input => input.value);
    const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
    const specialPizza = document.getElementById('specialPizza').value;
    const address = document.getElementById('address').value;

    // Create order summary text
    let orderSummaryText = `
        Here is your order summary:
        Size: ${size}
        Crust: ${crust}
        Toppings: ${toppings.join(', ')}
        Sides: ${sides.join(', ')}
        Delivery Method: ${deliveryMethod}
        Special Pizza: ${specialPizza}
    `;

    if (deliveryMethod === 'Delivery') {
        orderSummaryText += `
            Address: ${address}
        `;
    }

    // Display order placed popup
    const orderPlacedPopup = document.getElementById('orderPopup');
    const orderSummaryTextElement = document.getElementById('orderSummaryText');
    orderSummaryTextElement.innerText = orderSummaryText;
    orderPlacedPopup.style.display = 'flex';
});

// Close the order placed popup
const closeOrderPlacedPopup = document.getElementById('closeOrderPlacedPopup');
closeOrderPlacedPopup.addEventListener('click', function() {
    const orderPlacedPopup = document.getElementById('orderPopup');
    orderPlacedPopup.style.display = 'none';
});