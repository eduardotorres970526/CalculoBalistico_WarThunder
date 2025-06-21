
// Función para calcular la distancia optima de tiro para el BMP3

function calculoBalistico (cuadranteCm, cuadranteM, distanciaMedidaCM) {

    let metrosaCm = cuadranteM*100
    let escala = metrosaCm/cuadranteCm

    let distanciaCalculadaCM = distanciaMedidaCM*escala

    let distanciaCalculadaM = distanciaCalculadaCM/100
     
    console.log(distanciaCalculadaM)

}


calculoBalistico(4.49, 225, 10.5)