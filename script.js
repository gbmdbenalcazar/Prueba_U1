// 1. Generar número aleatorio al cargar la página
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Obtener referencias a los elementos HTML
const guessInput = document.getElementById('guessInput');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

/**
 * Función que se ejecuta al presionar el botón "Adivinar".
 */
function checkGuess() {
    // Obtener el valor ingresado por el usuario
    const userGuess = parseInt(guessInput.value);

    // Validar que el valor sea un número entre 1 y 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return; // Salir de la función si la entrada es inválida
    }

    attempts++; // Incrementar el contador de intentos
    
    // 3. Proporcionar retroalimentación
    if (userGuess < targetNumber) {
        messageElement.textContent = "Demasiado bajo. ¡Intenta de nuevo!";
    } else if (userGuess > targetNumber) {
        messageElement.textContent = "Demasiado alto. ¡Intenta de nuevo!";
    } else {
        // ¡Adivinó!
        messageElement.textContent = `¡Correcto! Lo adivinaste en ${attempts} intentos.`;
        // Desactivar el input y el botón para finalizar el juego
        guessInput.disabled = true;
        document.querySelector('button').disabled = true;
    }

    // Mostrar el número de intentos actualizados
    attemptsElement.textContent = `Intentos realizados: ${attempts}`;
    
    // Limpiar el campo de texto para el siguiente intento
    guessInput.value = '';
}