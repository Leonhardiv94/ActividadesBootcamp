console.log("Estoy contectado a mi HTML");

let ejercicio = prompt("Marque: \n 1 -> Para saber si puedes votar. \n 2 -> Para que calcules tu descuento. \n 3 -> Para ver como se imprimen 10 nuemros en la consola.")
switch (ejercicio) {
    case "1":
                /*
        1.) Verificación de elegibilidad para votar:
        Escribe un programa que solicite la edad de un 
        usuario y verifique si es elegible para votar en 
        las elecciones. Debe ser mayor de 18 años y ser 
        ciudadano colombiano.
        */

        let edad = parseInt(prompt("Por favor diganos su edad"));
        let esCiudadano = confirm("Confirme si es ciudadano colombiano");

        console.log(edad, esCiudadano);

        if (edad >= 18 && esCiudadano == true) {
            console.log("Usted cumple la mayoria de edad!");
            console.log("Eres ciudadano colombiano!");
            console.log("Felicidades! Puedes votar");
            alert("Felicidades! Puedes votar");
        }else{
            console.log("No puedes votar :(");
            alert("Que mal! No puedes votar")
        }
        break;
    case "2":
        /*
        2.) Calculadora de descuento:
        Crea un programa que solicite al usuario el precio original
        de un producto y el porcentaje de descuento que se aplicará.
        Luego, calcula y muestra el precio final después del descuento. 

            1. Descuento 20%
            2. Descuento 50%
            3. Descuento 70%
        */

        let valorOriginal = parseFloat(prompt("Ingrese valor base de producto"));
        const descuento = prompt("Defina el descuento que quiere aplicar: \n 1 -> Descuento del 20% \n 2 -> Descuento del 50% \n 3 -> Descuento del 70% ");
        let valorFinal = 0;
        switch(descuento){
            case "1":
                valorFinal = valorOriginal - (valorOriginal * 0.2)
                alert("Precio con descuento es : " + valorFinal);
                break;
            case "2":
                valorFinal = valorOriginal - (valorOriginal * 0.5)
                alert("Precio con descuento es : " + valorFinal);
                break;
            case "3":
                valorFinal = valorOriginal - (valorOriginal * 0.7)
                alert("Precio con descuento es : " + valorFinal);
                break;
            default:
                alert("Valor introducido: ERRADO")
                break;
        }
    case "3":
        /*
        3.) Mostrar números:
        Escribe un programa que use un bucle for para imprimir los números del 1 al 10 en la consola.
        */
        
        for(let i = 1; i <= 10; i++){
            console.log(i);
        }
        break
}
