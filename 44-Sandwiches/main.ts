// Define a function with a rest parameter that accept items arguments representing our sandwich

function makeSandwich(...item: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    item.forEach(singleItem => console.log("-" + singleItem));
    
    console.log("\nNow Enjoy Sandwich");
    }
    
    // Call the function 3 times with 3 different number of arguments
    
    makeSandwich("Egg","Cheese","Chicken","Mayo");
    
    makeSandwich("Bread","Butter","Sauce");
    
    makeSandwich("Bread","Egg","Lettuce","Ketchup","Cheese","Mayo","Tomato","Mayo");