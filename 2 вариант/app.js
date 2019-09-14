const purchaseAmount = 3300;

// Округление в меньшую сторону также даст необходимое целое число
const bonuses = Math.floor(purchaseAmount / 1000) * 100;

console.log(`C ${purchaseAmount} вы получите ${bonuses} бонусов`);