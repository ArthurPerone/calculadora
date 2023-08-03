function limpaConta() {
    document.getElementById("n1").textContent = "";
    document.getElementById("op").textContent = "";
    document.getElementById("n2").textContent = "";
}

function addNumero(numero) {
    if (document.getElementById("op").textContent != "2")//se a operação não for ao quadrado
        if (document.getElementById("op").textContent != "") {//se existir uma operação passa a digitar o segundo numero
            document.getElementById("n2").innerText += numero;
        } else {
            document.getElementById("n1").innerText += numero;
        }
}

function addOperacao(operador) {
    if (document.getElementById("n2").textContent != "") {
        executaConta()
    }
    if (operador.value == "2") {
        document.getElementById("op").style.fontSize = "10pt"
    } else {
        document.getElementById("op").style.fontSize = "24pt"
    }
    document.getElementById("op").innerText = operador;
}

function executaConta() {
    n1 = parseFloat(document.getElementById("n1").textContent);
    op = document.getElementById("op").textContent;
    n2 = parseFloat(document.getElementById("n2").textContent);
    res = ""
    switch (op) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            res = n1 / n2;
            break;
        case '2':
            res = n1 * n1;
            break;
    }
    limpaConta()
    document.getElementById("n1").innerText = res;
}

const numbers = document.querySelectorAll('.num')
const operations = document.querySelectorAll('.op')
document.querySelector(".clear").addEventListener('click', () => {
    limpaConta()
})
document.querySelector(".equal").addEventListener('click', () => {
    executaConta()
})
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        addNumero(number.textContent)
    })
})

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        addOperacao(operation.textContent)
    })
})