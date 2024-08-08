function soma() {
    const inputOneValue = parseInt(document.querySelector(".inputOne").value)
    const inputTwoValue = parseInt(document.querySelector(".inputTwo").value)
    const result = (inputOneValue + inputTwoValue);
    console.log(result);
    const paragrafo = parseInt(document.getElementById('paragrafo').innerHTML = "Resultado: " + result)
}