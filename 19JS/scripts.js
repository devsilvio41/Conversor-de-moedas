// 1. Seleção de Elementos do DOM
const convertButton = document.querySelector(".convert-button")
const inputCurrency = document.querySelector(".input-currency")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

// 2. Instanciação única dos formatadores
const formatadorReal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
})

const formatadorDolar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})

// 3. Função Principal de Conversão
function convertValues() {
    // Captura o valor e se ele não for um número válido (vazio), assume 0
    let inputCurrencyValue = parseFloat(inputCurrency.value)
    
    if (isNaN(inputCurrencyValue)) {
        inputCurrencyValue = 0
    }

    const dolarToday = 5.10
    const convertedValue = inputCurrencyValue / dolarToday

    // 4. Aplicação da formatação usando textContent (Melhor prática de segurança)
    currencyValueToConvert.textContent = formatadorReal.format(inputCurrencyValue)
    currencyValueConverted.textContent = formatadorDolar.format(convertedValue)
}

// 5. Ouvinte de Eventos
convertButton.addEventListener("click", convertValues)