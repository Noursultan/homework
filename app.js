var Starbucks = {
    coffee: {
        latte: {
            description: 'A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top',
            preparation: 'A latte is made by combining a shot of espresso with steamed milk, topped with a small amount of foam',
            origin: 'Italy',
            price: '$6'
        },
        americano: {
            description: 'An americano is just water and espresso',
            preparation: 'An Americano is made by mixing a shot of espresso with hot water to create a longer, milder coffee drink',
            origin: 'Italy',
            price: '$8'
        },
        cappuccino: {
            description: 'A cappuccino is the perfect balance of espresso, steamed milk and foam',
            preparation: 'A classic cappuccino calls for 1/3 espresso, 1/3 steamed milk, and 1/3 foam',
            origin: 'Italy',
            price: '$9'
        }
    },
    tea: {
        black: {
            description: 'A type of tea that is fully fermented, producing a strong and robust flavor',
            preparation: 'Black tea is made by steeping tea leaves in hot water for several minutes',
            origin: 'China',
            price: '$5'
        },
        green: {
            description: 'A type of tea that is unfermented and has a mild, delicate flavor',
            preparation: 'Green tea is made by steeping tea leaves in hot water for several minutes',
            origin: 'China',
            price: '$4'
        },
        herbal: {
            description: 'A type of tea made from a variety of herbs, flowers, and spices',
            preparation: 'Herbal tea is made by steeping dried herbs, flowers, and spices in hot water',
            origin: 'Various',
            price: '$4'
        }
    }
};

var order = prompt("Welcome to Starbucks, do you want coffee or tea to order?");
var drink = prompt('Which ' + order + ' would you like to order');
var found = false;

for (var item in Starbucks[order]) {
    if (item === drink) {
        found = true;
        console.log("Your order for " + drink + ' ' + order + " has been accepted.");
        console.log(Starbucks[order][item]);
        break;
    }
}

if (!found) {
    console.log("Sorry, we do not have " + drink + ' ' + order + " in our menu. Please enter something another.");
}