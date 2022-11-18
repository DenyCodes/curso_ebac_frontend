const form = document.getElementById('form-num');

function validaNumero(numero) {
    const numeroComoArray = numero;
    return numeroComoArray;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const campob = document.getElementById('campo-b');
    const campoa = document.getElementById('campo-a');
    if (!validaNumero(campoa.value >= campob.value)) {
        alert('Formulario Valido');
    } else {
        alert('Formulario Invalido');
    }
})

console.log(form);