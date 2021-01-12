 let orderText = "Large- Pepperoni, Cheese,  \n Medium - Pepperoni, Cheese \n Small - Pepperoni, Cheese";
 let total= 0;
 let prices= {
        Small: {
          Cheese: 0.5,
          Pepperoni: 0.5,
          Ham: 0.5,
          Pineapple: 0.5,
          Sausage: 2.0,
          FetaCheese: 2.0,
          Tomatoes: 2.0,
          Olives: 2.0,
          price: 12.0,
        },
        Medium: {
          Cheese: 0.75,
          Pepperoni: 0.75,
          Ham: 0.75,
          Pineapple: 0.75,
          Sausage: 3.0,
          FetaCheese: 3.0,
          Tomatoes: 3.0,
          Olives: 3.0,
          price: 14.0,
        },
        Large: {
          Cheese: 1.0,
          Pepperoni: 1.0,
          Ham: 1.0,
          Pineapple: 1.0,
          Sausage: 4.0,
          FetaCheese: 4.0,
          Tomatoes: 4.0,
          Olives: 4.0,
          price: 16.0,
        },
      }
 
 calculatePizzas();
//this functions is used to split lines and print the total
function calculatePizzas(){
    orderText = orderText.trim();
    items = orderText.split("\n");
    items.forEach(item => {
        calculatePizza(item);
    
           
    });
    console.log("\n \nSubtotal: $"+total.toFixed(2));
    console.log("GST: $"+(total*0.05).toFixed(2));
    console.log("Total: $"+ (total*1.05).toFixed(2));
}

// this function is to validate pizza size 
function calculatePizza(item){
    item = item.trim();
    itemDetails = item.split("-");
    itemSize = itemDetails[0].trim();
    if(prices[itemSize] == undefined){
        console.log("Invalid Item");
        return ;
    }
    itemPrice=prices[itemSize].price;
    if(itemDetails.length > 1){
    let itemToppings = itemDetails[1].trim();
    calculateToppings(itemToppings,itemSize,itemPrice);
    }
    else{
        total+=itemPrice;
        console.log("1 "+ itemSize + ": $" +prices[itemSize].price.toFixed(2));
    }

}
// this function is to validate and calculate item toppings, and to print the desired text for each item 
function calculateToppings(toppings, itemSize, itemPrice){
      let digits = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
      ];
      toppings = toppings.split(",");
      toppings = toppings.filter(function(topping){
          return topping !="";
      })
      let orderText =
        itemSize + ", " + digits[toppings.length] + " Topping Pizza - ";
      for (let i = 0; i < toppings.length; i++) {
        let topping = toppings[i].trim();
        if (topping.startsWith("Feta")) {
          topping = topping.split(" ").join("");
        }

        if (prices[itemSize][topping] == undefined && topping != "") {
            console.log("Invalid Item");
          return ;
        }
        itemPrice += prices[itemSize][topping];
        if (i == toppings.length - 1 && toppings.length != 1) {
          orderText += " and " + topping;
        } else if (i == 0) {
          orderText += topping;
        } else {
          orderText += ", " + topping;
        }
        
    }
    total+=itemPrice;

        console.log("1 " +orderText + ": $" + itemPrice.toFixed(2));
}
