var valores = [true, 5, false, "Hola", "Adiós", 2];
//Cuál de los dos elementos de texto es mayor
//Si el resultado es true, el primer texto es mayor
    var resultado = valores[3] > valores[4];
    alert(valores[3]+" > "+valores[4]+" --> "+resultado);

//Combina valores booleanos
//Obtener un resultado TRUE
    var resultado = valores[0] || valores[2]
    alert(valores[0]+" || "+valores[2]+" --> "+resultado);

//Obtener un resultado FALSE
    var resultado = valores[0] && valores[2]
    alert(valores[0]+" && "+valores[2]+" --> "+resultado);

//Operaciones matemáticas
//1. Suma
    var resultado = valores[1] + valores[5]
    alert(valores[1]+" + "+valores[5]+" --> "+resultado);

//2. Resta
    var resultado = valores[1] - valores[5]
    alert(valores[1]+" - "+valores[5]+" --> "+resultado);

//3. Multiplicación
    var resultado = valores[1] * valores[5]
    alert(valores[1]+" x "+valores[5]+" --> "+resultado);

//4. División
    var resultado = valores[1] / valores[5]
    alert(valores[1]+" / "+valores[5]+" --> "+resultado);

//5. Resto
    var resultado = valores[1] % valores[5]
    alert(valores[1]+" % "+valores[5]+" --> "+resultado);