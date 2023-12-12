let car = {
    brand: "BMW",
    model: "new",
    year: "2005",
    color: "blue",
};

//1
for(key in car){
    alert(key);
    alert(car[key]);
}

//2
console.log(car['brand'] + " " + car['year'])

//3
let startEngine = "Запущен двигатель автомобиля " + car['brand'] + " " + car['model']


//4
alert(startEngine)