const grailedData = {
  "itemSold": {
    "playboi carti - Devil's Trill tee": {
      "soldFor" : 224,
      "boughtFor" : 40
    },
    "HYSTERIC GLAMOUR Studded cardigan": {
      "soldFor" : 80,
      "boughtFor" : 110
    },
    "Reebok X Kendrick Lamar Club C": {
      "soldFor" : 110,
      "boughtFor" : 120
    },
    "Supreme Seven Samurai T-Shirt": {
      "soldFor" : 200,
      "boughtFor" : 215
    },
    "Prada Bucket Hat": {
      "soldFor" : 290,
      "boughtFor" : 260
    },
    "Pleasuresnow Monster hoodie": {
      "soldFor" : 170,
      "boughtFor" : 120
    },
    "Pleasuresnow Purple 666 Long Sleeves": {
      "soldFor" : 95,
      "boughtFor" : 40
    },
    "From The First Luca Side Zip Boots": {
      "soldFor" : 369,
      "boughtFor" : 400
    },
    "Saint laurent chelsea boots": {
      "soldFor" : 401,
      "boughtFor" : 300
    },
    "Marino Morwood Travis Scott Rodeo Tee": {
      "soldFor" : 187,
      "boughtFor" : 80
    },
    "MASTERMIND RTA JEANS": {
      "soldFor" : 305,
      "boughtFor" : 330
    },
    "Air Jordan 1 High OG Royal": {
      "soldFor" : 280,
      "boughtFor" : 250
    },
    "Prada Nylon Day Pack Backpack": {
      "soldFor" : 321,
      "boughtFor" : 300
    },
    "pleasuresnow tee": {
      "soldFor" : 50,
      "boughtFor" : 40
    },
    "The Kooples flying V Jumper": {
      "soldFor" : 110,
      "boughtFor" : 115
    },
    "Off-White X Four Amsterdam gradient belt": {
      "soldFor" : 385,
      "boughtFor" : 280
    },
    "M+RC Wind Breaker": {
      "soldFor" : 180,
      "boughtFor" : 135
    },
    "Supreme blue Shoulder bag": {
      "soldFor" : 150,
      "boughtFor" : 80
    },
    "M+RC black camo cap": {
      "soldFor" : 120,
      "boughtFor" : 70
    },
    "M+RC tee FW 17/18": {
      "soldFor" : 110,
      "boughtFor" : 70
    }
  }
}

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


// console.log(grailedData);
// console.log(grailedData["fees"]["grailed"]);
