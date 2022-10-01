function car(manufacturer, model, color, price) {
    if (color && price) {
        return {
            manufacturer: manufacturer,
            model: model,
            color: color,
            price: price
        };
    } else {
        return {
            manufacturer: manufacturer,
            model: model
        };
    }
}

console.log(car("BMW", "E92 320i"));
console.log(car("Porsche", "Panamera", "black", 100000));

