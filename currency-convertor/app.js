
const input_amount = document.getElementById("original-currency-amount");
const from_currency = document.getElementById("from_currency");
const to_currency = document.getElementById("to_currency");
const exchange_rate = document.getElementById("exchange-rate");
const exchange = document.getElementById("exchange");
const output_amount = document.getElementById("output-text");
const output_from = document.getElementById("from");
const output_to = document.getElementById("to");


exchange.addEventListener("click", () => {
    [from_currency.value, to_currency.value] = [to_currency.value, from_currency.value];
    calculate();
})

let to_amount = 0;
function calculate() {
    const from_currency_value = from_currency.value;
    const to_currency_value = to_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
        .then(res => res.json())
        .then(res => {
            const rate = res.rates[to_currency_value];
            exchange_rate.value = `${rate}`
            to_amount = (input_amount.value * rate).toFixed(3);
            output_from.innerText = `${input_amount.value} ${from_currency_value}`;
            output_to.innerText = `${to_amount} ${to_currency_value}`;
            output_amount.style.display = "block";
        })
}

input_amount.addEventListener("change", () => {
    calculate();
});

document.getElementById("exchange_button").addEventListener("click", () => {
    calculate();
});

window.onload = () => {
    const url = window.location.href;
    const href = ` https://twitter.com/intent/tweet?text=Awesome Currency Converter 🤑%0a    by @verreauxblack%0a${url}`
    document.getElementById("share").setAttribute("href", href);
}