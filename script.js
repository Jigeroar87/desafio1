//Eres un agente de cobranzas y necesitas llegar a una meta de recaudación de XXX soles por dia
//El programa te brinda ayuda a saber si llegaste a la meta o cuanto te falta para llegar.
//Además si superas la meta tienes un rango de comisión por superar la meta:
// 5% de comisión sobre lo recaudado si alcanzas la meta || 10% si superas la meta en 10% || 15% si superas la meta en 15% o más  
// el usuario ingresa: Monto a recaudar, monto de efectividad(% sobre lo recaudado) 
// el programa le pide ingresar lo recaudado
// el programa devuelve el cumplimiento del objetivo y la comisión

alert("Bienvenido a la calculadora de Efectividad de campañas y comisiones" + "\n" +":)");


let montoArecaudar = 0;
let valmontoArecaudar = "false";
do{
    montoArecaudar = prompt("Ingrese monto que el cliente nos asignó a recaudar:"+"\n"+"(sólo se permiten montos desde 0 a 1,000,000 dólares)");
    console.log(montoArecaudar);

    if( (parseFloat(montoArecaudar)>0 ) && (parseFloat(montoArecaudar)<=1000000)){
    valmontoArecaudar="true"
    }
    else{
    valmontoArecaudar="false"
    alert("Por favor ingrese monto correcto")
    }
}while(valmontoArecaudar=="false");

alert("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar));
console.log("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar));

let efectividadArecaudar = 0;
let valefectividadArecaudar = "false";
do{
    efectividadArecaudar = prompt("Ingrese % de efectividad que el cliente nos asignó a recaudar:"+"\n"+"(sólo se permiten valores del 0 al 100)");
    console.log(efectividadArecaudar);

    if( (parseFloat(efectividadArecaudar)>0 ) && (parseFloat(efectividadArecaudar)<=100)){
    valefectividadArecaudar="true"
    }
    else{
    valefectividadArecaudar="false"
    alert("Por favor ingrese % efectividad correcto")
    }
}while(valefectividadArecaudar=="false");

let metaDerecaudacion = parseFloat(montoArecaudar)*parseFloat(efectividadArecaudar)/100;
console.log(metaDerecaudacion);

alert("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar) + "\n" + 
      "Y el % de efectividad es: " + parseFloat(efectividadArecaudar) + "%" + "\n" +
      "Por lo tanto, la meta a recaudar es: $" + metaDerecaudacion);

console.log("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar));
console.log("Y el % de efectividad es: " + parseFloat(efectividadArecaudar));
console.log("Por lo tanto, la meta a recaudar es: $" + metaDerecaudacion);

let avanceDerecaudacion = 0;
let valavanceDerecaudacion = "false";
let porcComision=0;
let montoComision=0;
do{
    avanceDerecaudacion = prompt("Ingrese el monto recaudado hasta hoy:"+"\n"+"(sólo se permiten valores del 0 al "+ parseFloat(montoArecaudar) + ")" + "\n" +
                                 "Recuerda:" +"\n" +
                                 "El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar) + "\n" + 
                                 "Y el % de efectividad es: " + parseFloat(efectividadArecaudar) + "%" + "\n" +
                                 "Por lo tanto, la meta a recaudar es: $" + metaDerecaudacion);
    console.log(avanceDerecaudacion);

    if( (parseFloat(avanceDerecaudacion)>0 ) && (parseFloat(avanceDerecaudacion)<=parseFloat(montoArecaudar))){
    
        //
        if (parseFloat(avanceDerecaudacion) < parseFloat(metaDerecaudacion)) {
            alert("Continua gestionando la cartera para llegar a la meta");
            valavanceDerecaudacion="false"
        }
        else if (parseFloat(avanceDerecaudacion) < 1.1*parseFloat(metaDerecaudacion)){
            alert("Felicidades, llegaste a obtener 5% de comisión sobre el monto recaudado.");
            porcComision=5;
            montoComision= parseFloat(porcComision)* parseFloat(avanceDerecaudacion)/100;
            valavanceDerecaudacion="true";
        }
        else if (parseFloat(avanceDerecaudacion) < 1.2*parseFloat(metaDerecaudacion)){
            alert("Felicidades, llegaste a obtener 10% de comisión sobre el monto recaudado.");
            porcComision=10;
            montoComision= parseFloat(porcComision)* parseFloat(avanceDerecaudacion)/100;
            valavanceDerecaudacion="true";
        }
        else {
            alert("Felicidades, llegaste a obtener 20% de comisión sobre el monto recaudado.");
            porcComision=20;
            montoComision= parseFloat(porcComision)* parseFloat(avanceDerecaudacion)/100;
            valavanceDerecaudacion="true";
        }

        //
        
    }
    else{
    valavanceDerecaudacion="false"
    alert("Por favor ingrese monto recaudado correcto")
    }
}while(valavanceDerecaudacion=="false");

alert("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar) + "\n" + 
      "Y el % de efectividad es: " + parseFloat(efectividadArecaudar) + "%" + "\n" +
      "Por lo tanto, la meta a recaudar es: $" + parseFloat(metaDerecaudacion) + "\n" +
      "Se logró recaudar a la fecha: $" + parseFloat(avanceDerecaudacion) + "\n" +
      "Se obtuvo el: "+ parseFloat(porcComision)+"%" +" de comisión del monto recaudado" + "\n" + 
      "En total, $" + parseFloat(montoComision));

console.log("El monto a recaudar en esta campaña es: $" + parseFloat(montoArecaudar));
console.log("Y el % de efectividad es: " + parseFloat(efectividadArecaudar));
console.log("Por lo tanto, la meta a recaudar es: $" + parseFloat(metaDerecaudacion));
console.log("Se logró recaudar a la fecha: $" + parseFloat(avanceDerecaudacion));
console.log("Se obtuvo el: "+ parseFloat(porcComision)+"%" +" de comisión del monto recaudado");
console.log("En total, $" + parseFloat(montoComision));

