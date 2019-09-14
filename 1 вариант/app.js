const purchaseAmount = 3300;

const bonuses = (purchaseAmount - (purchaseAmount % 1000)) / 10;

console.log(`C ${purchaseAmount} вы получите ${bonus} бонусов`);