# grailed-calculator

## Welcome to this grailed revenue calculator

1. run npm install

2. then you need to create your json data and setting file named grailedData.json in the current folder
the grailedData.json file expect this structure
change settings values, add your items like so:

{
  "settings": {
    "paypal": 000,
    "grailed": 000,
    "averageShippingPriceEuro": 000,
    "averageDollarToEuro": 000
  },
  "itemSold": {
    "name of the item1": {
      "soldFor" : 000,
      "boughtFor" : 000
    },
    "name of the item2": {
      "soldFor" : 000,
      "boughtFor" : 000
    }
  }
}

3. run the program with node index.js
