const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? bill*(15/100) : bill*(20/100);

console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${(bill+tip).toFixed(2)}`);