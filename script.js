// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function array255(){
    var array = [];
    for(var i = 1; i < 256; i++){
        array.push(i);
    }
    return array;
}

// console.log(array255());

// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function array1000(){
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    return sum;
}

// console.log(array1000());

// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function array5000(){
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if (i%2 != 0){
            sum += i;
        }
    }
    return sum;
}

// console.log(array5000())

// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14).

array14 = [-5,2,5,12]

function sumArray(array){
    var sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
};

// console.log(sumArray(array14))

// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

// var myArray = [-3,3,5,7,20];
// var m = Math.max(...myArray);
// // console.log(m)

// var myArray = [1, 5, 6, 2, 3];
// var x = Math.max.apply(null, myArray);
// // console.log(x)

function NumMax(arrayM){
    var al = arrayM.length;
    maximum = arrayM[al-1];
    while (al--){
        if(arrayM[al] > maximum){
            maximum = arrayM[al]
        }
    }
            return maximum;
};
var arrayM = [-3,3,5,7];
var max = NumMax(arrayM);

//console.log(max)


// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

arrayprom = [1,3,5,7,20]
function promedio(array){
    return array.reduce((sum, current) => sum + current, 0) / array.length;
}

//console.log(promedio(arrayprom))

//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function arrayImpares(){
    var array = []
    for(var i = 0; i <= 50; i++){
        if(i%2 != 0){
            array.push(i);
        }
    }
    return array;
}

// console.log(arrayImpares())

//8.-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

var arr = [1,3,5,7]

function mayorQue(array){
    var Y = 3
    var vacio = []
    array.forEach(element => {
        if(element > Y){
            vacio.push(element)
        };
    });
    return vacio
};

//console.log(mayorQue(arr))


// 9.-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

var array = [1,5,10,-2]

function cuadrado_de(array){
    var new_array = []
    array.forEach(element => {
        new_array.push(Math.pow(element,2))
    });
    return new_array
}
//console.log(cuadrado_de(array))


//function raizcuadrada(base,exponente){
//     return Math.pow(base,exponente)
// }


// 10.-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

var array_replace = [1,5,10,-2,7,-24]

function remplace_neg(array){
    var new_array = []
    array.forEach(element => {
        if(element < 0){
            new_array.push(0)
        }else{
            new_array.push(element)
        }
    });
    return new_array
}

// console.log(remplace_neg(array_replace))

// 11.-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

arrayprom = [1,5,10,-2]

function max_min_prom(array){
    var array_vacio = []
    array_vacio.push(Math.max(...array))
    array_vacio.push(Math.min(...array))
    array_vacio.push(array.reduce((sum, current) => sum + current, 0) / array.length)
    return array_vacio
}

//console.log(max_min_prom(arrayprom))


// 12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

array = [1,5,10,-2]

function intercambia(array){
    var primero = array.shift()
    var ultimo = array.pop()
    array.push(primero)
    array.unshift(ultimo)
    console.log(array)
}

//intercambia(array)


// 13.-De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

var array_replace = [-1,-3,2]

function remplace_string(array){
    var new_array = []
    array.forEach(element => {
        if(element < 0){
            new_array.push("Dojo")
        }else{
            new_array.push(element)
        }
    });
    return new_array
}

console.log(remplace_string(array_replace))




