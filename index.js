const a = prompt ("Введите -а-");
const b = prompt ("Введите -b-");
const c = prompt ("Введите -c-");
const equality = alert (`Получили уравнение: ${a}x² + ${b}x + ${c} = 0`);
const discriminant = Math.pow(b,2) - 4*a*c;
isRoot(discriminant); 

function isRoot (value){
    switch(true){
        case value > 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 2 корня`);
            const x1 = (-b + Math.sqrt(discriminant))/2*a
            const x2 = (-b - Math.sqrt(discriminant))/2*a
            alert (`Решения уравнения:
            x1 = ${x1}
            x2 = ${x2}`)
            break
        case value === 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и имеет 1 корень`)
            const x = -b/2*a
            alert (`Решениe уравнения:
            x = ${x}`)
            break
        case value < 0:
            alert (`Дискриминант данного уравнения равен ${discriminant} и не имеет решений`)
            break
        default: 
        alert("Нет таких значений")
    }
}