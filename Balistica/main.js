document.addEventListener ('DOMContentLoaded', () => {
    /* VARIABLES PARA SELECCIONAR ELEMENTOS DEL DOM */
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('cuadranteCm');
    const emailInput = document.getElementById('cuadranteM');
    const passwordInput = document.getElementById('distanciaCm');
    const resultadoOutput = document.getElementById('outResult')
    const paisSelect = document.getElementById('mapas');
    const terminosInput = document.getElementById('mapasRegistrados');
    const mensajeExito = document.getElementById('mensajeExito');
    const etiquetaResultado = document.getElementById('resultado')
    const divResultado = document.getElementById('distanciaResultado')

    /* FUNCION PARA REALIZAR EL CÁCULO*/
   
     function calculoBalistico (cuadranteCm, cuadranteM, distanciaMedidaCM) {

    const metrosaCm = cuadranteM*100
    
    const escala = metrosaCm/cuadranteCm

    const distanciaCalculadaCM = distanciaMedidaCM*escala

    const distanciaCalculadaM = distanciaCalculadaCM/100
     
    return distanciaCalculadaM
}

    /* MANEJAR EL ENVIO DEL FORMULARIO */
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir que por defecto, el formulario recargue la página.

    // Validar todos los campos una última vez antes de enviar
    
    cuadranteCm = parseFloat(nombreInput.value)
    cuadranteM = parseFloat(emailInput.value)
    distanciaMedidaCM = parseFloat(passwordInput.value)


     const resultadoTotal = calculoBalistico(cuadranteCm, cuadranteM, distanciaMedidaCM)
     
     etiquetaResultado.style.display = 'block'
     divResultado.style.display = 'block'
     resultadoOutput.textContent = `${resultadoTotal.toFixed(1)} m. `;
     
    })

})

