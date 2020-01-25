// getting data from json, create your own ! check the read me for instructions
const grailedData = require('../grailedData.json');

// item sales calc
function getTotalSold(){
  let totalEuro = 0;

  const shippingPrice = 30;
  const fees = 10/100;
  const dollarToEuro = 0.9;

  const grailedSales = grailedData["itemSold"];
  // get brut gain from grailedSales
  for (let item in grailedSales){
    const totalPaypalDollar = grailedSales[item]["soldFor"] - grailedSales[item]["soldFor"]*fees;
    const totalPaypalEuro = totalPaypalDollar*dollarToEuro;
    totalEuro += (totalPaypalEuro-shippingPrice);
  }
  console.log(totalEuro);
  return totalEuro;
}

getTotalSold();


// function exports
module.exports = getTotalSold;
