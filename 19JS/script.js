// 1. Corrigido: Agora estamos chamando a função e passando a classe com o ponto (.)
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.1
    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = inputCurrencyValue
    // currencyValueConverted.innerHTML = convertedValue
    // Exemplo de como deve estar sua linha 14:
    document.getElementById("resultado").innerHTML = convertedValue;
    console.log(convertedValue)

    console.log(inputCurrencyValue)
}

convertButton.addEventListener("click", convertValues)