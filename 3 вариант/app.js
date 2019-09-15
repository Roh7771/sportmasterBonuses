let purchaseAmount;
let amountIsNumber = false;

while (!amountIsNumber) {
    purchaseAmount = prompt("Введите сумму покупки:");
    if (isNaN(+purchaseAmount)) {  
        alert("Неверно введено число!");
    } else {
        amountIsNumber = true;
    }
}

// Округление в меньшую сторону также даст необходимое целое число
const bonuses = Math.floor(purchaseAmount / 1000) * 100;

alert(`C ${purchaseAmount} вы получите ${bonuses} бонусов`);