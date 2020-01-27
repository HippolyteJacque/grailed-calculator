// getting data from json, create your own ! check the read me for instructions
const fs = require('fs');
let rawdata = fs.readFileSync('grailedData.json');
let grailedData = JSON.parse(rawdata);

// item sales calc
function getTotalSold(grailedData){
  let totalEuro = 0;
  const shippingPrice = grailedData["settings"]["averageShippingPrice"];
  const fees = (grailedData["settings"]["grailed"]+grailedData["settings"]["paypal"])/100;
  const convert = grailedData["settings"]["convert"];

  const grailedSales = grailedData["itemSold"];
  // get brut gain from grailedSales
  for (let item in grailedSales){
    const totalPaypalDollar = grailedSales[item]["soldFor"] - grailedSales[item]["soldFor"]*fees;
    const totalPaypalEuro = totalPaypalDollar*convert;
    totalEuro += Math.floor(totalPaypalEuro -shippingPrice);
  }
  console.log(totalEuro);
  return totalEuro;
}

getTotalSold(grailedData);


// function exports for tests
module.exports = getTotalSold;
