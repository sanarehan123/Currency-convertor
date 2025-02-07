const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

document.getElementById('converter_form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!amount || amount <= 0) {
        document.getElementById('result').textContent = "Please enter a valid amount.";
        return;
    }

    // Perform conversion
    const fromRate = currency[fromCurrency];
    const toRate = currency[toCurrency];
    const baseAmount = amount / fromRate;
    const convertedAmount = baseAmount * toRate;

    // Display result
    document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});



