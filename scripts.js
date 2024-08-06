
document.getElementById('sortear').addEventListener('click', function() {

    const numSorteios = parseInt(document.getElementById('numSorteios').value);
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(numSorteios) || isNaN(minValue) || isNaN(maxValue)) {

        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    const resultados = [];

    for (let i = 0; i < numSorteios; i++) {
        
        resultados.push(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
    }

    alert('Números sorteados: ' + resultados.join(', '));
});
