let name  = prompt ("What's your name") .toLowerCase() .trim()

if(name === 'Alex') {
    alert('Welcome ' + name)
} 
else {
    alert ('пользователь не найден дасвидули')
}

let accaunt = prompt ('номер счета ?') .toLowerCase() .trim()
if(accaunt === '7777') {
    alert('next')
}
else {
    alert ('ошибка ')
}

let money = prompt ('Сколько обналичить') .toLowerCase() .trim()

if(money <= 10000) {
    alert ('Все отлично ')
} 
else{
    alert (' Недостаточно средств  ')
}















