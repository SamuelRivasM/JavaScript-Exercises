function calcular() {
    let precioOriginal = document.getElementById('precioOriginal').value;
    let descuento = document.getElementById('descuento').value;

    // Verificar si los campos están vacíos.
    if (precioOriginal.trim() === "" || descuento.trim() === "") {
        alert("Ingrese valores válidos en ambos campos.");
        return;
    }

    // Convertir a número después de validar que no están vacíos.
    precioOriginal = Number(precioOriginal);
    descuento = Number(descuento);

    // Validar los números.
    if (isNaN(precioOriginal) || isNaN(descuento) || precioOriginal <= 0 || descuento < 0 || descuento > 100) {
        alert("Ingrese un número válido.");
        return;
    }

    let precioFinal = precioOriginal - (precioOriginal * (descuento / 100));

    document.getElementById('resultado').value = `S/ ${precioFinal.toFixed(2)}`;
}

function borrar() {
    document.getElementById('precioOriginal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('resultado').value = '';
}
