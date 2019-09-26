const purchaseAmount = 1000;

const thousandsAmount = (purchaseAmount - (purchaseAmount % 1000))/1000;

const bonusesPerThousand = 100;

const totalBonuses = thousandsAmount * bonusesPerThousand;

console.log(`C ${purchaseAmount} вы получите ${totalBonuses} бонусов`);