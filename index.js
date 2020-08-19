let a = data ("Введите -a-", validationNumber);
let b = data ("Введите -b-", validationNumber);
let c = data ("Введите -c-", validationNumber);
let equality = alert (`Получили уравнение: ${a}x^2 + ${b}x + ${c} = 0`);
let discriminant = Math.pow(b,2) - 4*a*c;
isRoot(discriminant)

function isRoot (value){
    if (value > 0) {
        alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 2 корня`)
    } 

    if (value = 0) {
        alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 1 корень`)
    }

    if (value < 0) {
        alert (`Дискриминант данного уравнения равен ${discriminant} и не имеет решений`)
    } else {
        return false
    }
}

function data (text, valid) {
    let info = prompt (text)
    if (valid === false) {
        alert ("Введено не числовое значение!")
    }
}

function validationNumber (value) {
    if (Number(value)){
        return true
    } else {
        return false}
}