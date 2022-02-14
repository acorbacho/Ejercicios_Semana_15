/**
 * Función que genera un número aleatorio.
 * @returns {number} - Devuelve el número.
 */
function numero_random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}