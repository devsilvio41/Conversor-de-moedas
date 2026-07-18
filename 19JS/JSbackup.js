const convertButton = document.querySelector(".convert-button")

function convertValues() {
    // 1. Pegamos o valor do input e convertemos para número
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor em Dólar

    // Validação simples: se o usuário não digitar nada, paramos aqui
    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        alert("Por favor, digite um valor válido.")
        return
    }

    const dolarToday = 5.10
    const convertedValue = inputCurrencyValue / dolarToday

    // 4. Aplicação da formatação usando textContent (Melhor prática de segurança)
    currencyValueToConvert.textContent = formatadorReal.format(inputCurrencyValue)
    currencyValueConverted.textContent = formatadorDolar.format(convertedValue)
}

// 5. Ouvinte de Eventos
convertButton.addEventListener("click", convertValues)