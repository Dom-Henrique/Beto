function verificar() {
    const numero = document.getElementById("senha").value; // Use .value para obter o valor do input
    if (numero == 222324) {
        window.location.href = "simvoce.html"; // Redireciona para a página
    } else {
        alert("Por favor, insira um número válido.");
    }
}
