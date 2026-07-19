// 1. Seleção de Elementos (Adicionamos o select)
const convertButton = document.querySelector(".convert-button")
const inputCurrency = document.querySelector(".input-currency")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")
const currencySelect = document.querySelector(".currency-select") // Novo!

// 2. Formatadores
const formatadorReal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
const formatadorDolar = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }) // Formato BR para o Dólar
const formatadorEuro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })   // Formato para o Euro
const formatadorLibra = new Intl.NumberFormat("en-UK", {style: "currency", currency: "GBP"})
const formatadorBitcoin = new Intl.NumberFormat("en-US", {style: "currency", currency:"BTC", 
    minimumFractionDigits: 2,maximumFractionDigits: 8})// Bitcoin supports up to 8 decimal places})

// 3. Função de Conversão com Tomada de Decisão (IF)
function convertValues() {
    let inputCurrencyValue = parseFloat(inputCurrency.value)
    
    if (isNaN(inputCurrencyValue)) {
        inputCurrencyValue = 0
    }

    // Cotações fixas para o exemplo em relação ao Real (BRL)
        const dolarToday = 5.10;
        const euroToday = 5.50;
        const libraToday = 6.87;
        const bitcoinToday = 330136.49;// SE FOR R$ 330.136,49 (Trezentos e trinta mil...):

    // 4. A ESTRUTURA CONDICIONAL (IF)
    // Se o valor do select for igual a "dolar"
    if (currencySelect.value === "dolar") {
        const convertedValue = inputCurrencyValue / dolarToday
        currencyValueConverted.textContent = formatadorDolar.format(convertedValue)
    } 
    // Senão, se o valor do select for igual a "euro"
        else if (currencySelect.value === "euro") {
        const convertedValue = inputCurrencyValue / euroToday
        currencyValueConverted.textContent = formatadorEuro.format(convertedValue)
    }

       // Senão, se o valor do select for igual a "euro"
        else if (currencySelect.value === "bitcoin") {
        const convertedValue = inputCurrencyValue / bitcoinToday
        currencyValueConverted.textContent = formatadorBitcoin.format(convertedValue)
    }

       // Senão, se o valor do select for igual a "euro"
        else if (currencySelect.value === "libra") {
        const convertedValue = inputCurrencyValue / libraToday
        currencyValueConverted.textContent = formatadorLibra.format(convertedValue)
    }

    // O valor em Real sempre se mantém formatado igual
    currencyValueToConvert.textContent = formatadorReal.format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencySimbolo = document.querySelector("#resultado")

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "../19.conversorDeMoedas/19assets/dolar.png"
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "../19.conversorDeMoedas/19assets/euro.png"
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencySimbolo.innerHTML = "₿ BTC"
        currencyImage.src = "../19.conversorDeMoedas/19assets/btc.png"
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libras"
        currencySimbolo.innerHTML = "£ GBP"
        currencyImage.src = "../19.conversorDeMoedas/19assets/libra.png"
    }
}

// 5. Ouvinte de Eventos - Troca o nome: Dolar ou Euro - Todas vez que muda o select
currencySelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)