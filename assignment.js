// ////// FIRST PROBLEM 

// function kilometerToMeter(meter){
//     if (meter != 0 && meter > 0){
//         var result = meter * 1000;
//     }
//     else{
//         console.log("You must be input valid number for check this function!!!!!!!!")
//     }
//     return result;
// }

// var userInput = kilometerToMeter(3);
// console.log(userInput)

// ////// SECOND PROBLEM 

// function budgetCalculator(watch, phone, laptop){
    
//     if (watch, phone, laptop != 0 && watch, phone, laptop >0){
//         var watch = 50 * watch;
//         var phone = 100 * phone;
//         var laptop = 500 * laptop;
//         var result = watch + phone + laptop;
//     }
//     // if any one enter single value
//     else if(watch == 0){
//         console.log("You can't enter any single or double value!!")
//     }
//     else{
//         console.log("You must be input valid number for calculate your price!!!!!!!!")
//     }
//     return result;
// }

// var budgetInput = budgetCalculator();
// console.log(budgetInput)


// ////// Third PROBLEM 

function hotelCost(rent){
    if(rent > 0){
        if (rent <= 10){
            var newTotalCost = rent * 100;
        }
        else if (rent < 10 || 21 > rent){
            var afterTenDays = rent - 10;
            var totalCost = afterTenDays * 80;
            var newTotalCost = totalCost + 1000;

        }
        else if(20 < rent){
            var aftertwentydays = rent - 20;
            var totalCost = aftertwentydays * 50;
            var newTotalCost = totalCost + 1800;
        }
        else{
            console.log("You can't stay here without money or you must be pay for stay!!!!!!");
        }
        return newTotalCost;
    }
    else{
        console.log("You must be stay here one day!!!!")
    }
}

var payMoneyForHotel = hotelCost(22);
console.log(payMoneyForHotel)


// ////// FOURTH PROBLEM 

// function megaFriend(friendList){
//     if (friendList != ""){
//         var bigName = "";
//         for(var i = 0; i < friendList.length; i++){
//         if(bigName.length < friendList[i].length){
//             bigName = friendList[i];
//             }
//         }
//         return bigName;
//     }
//     else{
//         console.log('Enter your friends name for find your magefriend')
//     }
// }

// var allFriend = ['sagor', 'rafi', 'mosadek', 'robul', 'sahajalal'];

// var result = megaFriend(allFriend);
// console.log(result);






















