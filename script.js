const convertButton = document.querySelector(".button-Roxo")
const CurrencyDestination = document.querySelector(".MoedaDestino")


function convertValues() {

  const valueInput = document.querySelector(".valor").value
  const currencyValueToConvert = document.querySelector(".moedaRealvalor") //valor da moeda de origem R$0,00
  const currencyValueToConverted = document.querySelector(".moedaconvertidavalor") // valor moeda convertida ex:US$0,00


  // console.log(CurrencyDestination.value)

  const dolarToday = 4.86
  const euroToday = 5.24
  const btcToday = 127.080
  const realToday = 1.0




  if (CurrencyDestination.value == "BRL") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(valueInput / realToday)
    
  }


  if (CurrencyDestination.value == "US$") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(valueInput / dolarToday)
    
  }

  if (CurrencyDestination.value == "EUR") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(valueInput / euroToday)

  }

  if (CurrencyDestination.value == "BTC") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("bitcoin", {
      style: "currency",
      currency: "BTC"
    }).format(valueInput / btcToday)

  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"

  }).format(valueInput) //pegar o valor R$0,00 e trocar pelo valor digitado no input



  console.log(convertValues)

}

function changeCurrency() {
  const currencyname = document.querySelector(".moedaConvertida") // nome da moeda convertida
  const currencyImg = document.querySelector(".eua")

  if (CurrencyDestination.value == "US$") {
    currencyname.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/estados-unidos (1) 1.png"
  }

  if (CurrencyDestination.value == "EUR") {
    currencyname.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }

  if (CurrencyDestination.value == "BTC") {
    currencyname.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin 1.png"

  }


  if (CurrencyDestination.value == "BRL") {
    currencyname.innerHTML = "Real"
    currencyImg.src = "./assets/brasil 2.png"
  }


  convertValues()


}


CurrencyDestination.addEventListener("change", changeCurrency) //ação de mudar o nome da moeda de destino
convertButton.addEventListener("click", convertValues) //ação de click no butão
