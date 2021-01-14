const currentOne = document.getElementById('c_one');
const currentTwo = document.getElementById('c_two');
const transferFrom = document.getElementById('transfer-from');
const transferto = document.getElementById("transfer-to");

const amount = document.getElementById('amount');
const exchange = document.getElementById('exchange');

function Calculate() {
    let currentOneValue = currentOne.value;
    let currentTwoValue = currentTwo.value;
    let amountValue = amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currentOneValue}`)
        .then((res) => res.json())
        .then(data => {
            let rate = data.rates[currentTwoValue];
            let resultsFrom = `${currentOneValue} - ${amountValue}`;
            let resultsTo = `${currentTwoValue} - ${(rate * amountValue).toFixed(2)}`;

            transferFrom.innerText = resultsFrom;
            transferto.innerText = resultsTo;
    })
}

Calculate();

currentOne.addEventListener('change', Calculate);
currentTwo.addEventListener("change", Calculate);
amount.addEventListener('input', Calculate);

exchange.addEventListener('click', () => {
    let temp = currentOne.value;
    currentOne.value = currentTwo.value;
    currentTwo.value = temp;
    Calculate();
})
