let input = prompt ("Выберите страну доставки!")
let country
let cost

if (input !== null) {
    switch (input.toLowerCase()) {
        case "китай": 
            country = "Китай"
            cost = 100
            console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
            break;

        case "чили":
            country = "Чили"
            cost = 250
            console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
            break;

        case "австралия":
            country = "Австралия"
            cost = 170
            console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
            break;

        case "индия": 
            country = "Индия"
            cost = 80
            console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
            break;
        
        case "ямайка": 
            country = "Ямайка"
            cost = 120
            console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
            break;
        
        default: 
            console.log( alert ('В вашей стране доставка не доступна'));
            break;
    }

} else console.log(input= "Отменено пользователем!");