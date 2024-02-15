<script>
document.addEventListener('DOMContentLoaded', function () {
    disableSubmit(); // Call disableSubmit when the document is loaded

    // Add event listener for the "Calculate Bag Total" button
    document.getElementById('calculateButton').addEventListener('click', function () {
        calculateBagTotal();
    });

    // Add event listener for the checkbox to activate the submit button
    document.getElementById('termsCheckbox').addEventListener('change', function () {
        activateButton(this);
    });

    // Add event listener for the "Clear" button to disable submit button
    document.getElementById('clearButton').addEventListener('click', function () {
        disableSubmit();
    });
});

// Function to calculate Bag Total
function calculateBagTotal() {
    // Retrieve values from form inputs
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;
    var paymentMode = document.getElementById('Mode').value;

    // Define the cost of each product
    var productCost = {
        '1': 30000,   // TV
        '2': 50000,   // Refrigerator
        '3': 20000    // Mobile
    };

    // Calculate the total amount payable
    var amountPayable = productCost[product] * quantity;

    // Apply discounts based on payment mode
    if (paymentMode === '2') { // Debit Card
        var discount = amountPayable * 0.05; // 5% discount
        amountPayable -= discount;
    }

    // Display the Bag Total
    var bagTotalMessage = `Bag Total = Rs ${amountPayable.toFixed(2)}/-`;
    document.getElementById('bagTotal').innerHTML = bagTotalMessage;

    // Call calculateCoupon() after calculating Bag Total
    calculateCoupon(amountPayable);
}

// Function to calculate Coupon Code
function calculateCoupon(bagTotal) {
    var couponCode;

    if (bagTotal >= 100000) {
        // Coupon Code ADI followed by first 4 digits of BagTotal
        couponCode = 'ADI' + bagTotal.toFixed(0).slice(0, 4);
    } else {
        // COUPON CODE ADI0000
        couponCode = 'ADI0000';
    }

    // Display the generated Coupon Code
    document.getElementById('coupon').value = couponCode;
}

// Function to activate submit button when checkbox is checked
function activateButton(checkbox) {
    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = !checkbox.checked;
}

// Function to disable submit button when form is cleared
function disableSubmit() {
    var submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
}
</script>