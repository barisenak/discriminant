let a = prompt ("Введите -а-");
let b = prompt ("Введите -b-");
let c = prompt ("Введите -c-");
let equality = alert (`Получили уравнение: ${a}x^2 + ${b}x + ${c} = 0`);
let discriminant = Math.pow(b,2) - 4*a*c;
isRoot(discriminant); 

function isRoot (value){
    // if (value > 0) {
    //     alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 2 корня`)
    // } 
    // if (value = 0) {
    //     alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 1 корень`)
    // }

    // if (value < 0) {
    //     alert (`Дискриминант данного уравнения равен ${discriminant} и не имеет решений`)
    // } else {
    //     return false
    // }

    switch(value){
        case value > 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 2 корня`)
            break
        case value === 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 1 корень`)
            break
        case value < 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и не имеет решений`)
            break
        default: 
        alert( "Нет таких значений" )
    }
}