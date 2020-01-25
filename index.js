// getting data from json, create your own ! check the read me for instructions
const grailedData = require('../grailedData.json');

// item sales calc
function getTotalSold(grailedData){
  let totalEuro = 0;
  const shippingPrice = grailedData["settings"]["averageShippingPriceEuro"];
  const fees = (grailedData["settings"]["grailed"]+grailedData["settings"]["paypal"])/100;
  const dollarToEuro = grailedData["settings"]["averageDollarToEuro"];

  const grailedSales = grailedData["itemSold"];
  // get brut gain from grailedSales
  for (let item in grailedSales){
    const totalPaypalDollar = grailedSales[item]["soldFor"] - grailedSales[item]["soldFor"]*fees;
    const totalPaypalEuro = totalPaypalDollar*dollarToEuro;
    totalEuro += Math.floor(totalPaypalEuro -shippingPrice);
  }
  console.log(totalEuro);
  return totalEuro;
}

getTotalSold(grailedData);


// function exports
module.exports = getTotalSold;
