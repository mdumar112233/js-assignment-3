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

// var userInput = kilometerToMeter(1);
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

// var budgetInput = budgetCalculator(3,2,3);
// console.log(budgetInput)


// ////// Third PROBLEM 

// function hotelCost(rent){
//     if(rent > 0){
//         var hotelRent = 100;
//         if (rent <= 10){
//             var totalCost = rent * 100;
//         }
//         else if (rent < 10 || 21 > rent){
//             var totalCost = rent * (100-20);
//         }
//         else if(20 < rent){
//             var totalCost = rent * (100-50);
//         }
//         else{
//             console.log("You can't stay here without money or you must be pay for stay!!!!!!");
//         }
//         return totalCost;
//     }
//     else{
//         console.log("You must be stay here one day!!!!")
//     }
// }

// var payMoneyForHotel = hotelCost(0);
// console.log(payMoneyForHotel)


// ////// FOURTH PROBLEM 

function megaFriend(friendList){
    if (friendList != ""){
        var bigName = "";
    for(var i = 0; i < friendList.length; i++){
        if(bigName.length < friendList[i].length){
            bigName = friendList[i];
        }
    }
    return bigName;
    }
    else{
        console.log('Enter your friends name for find your magefriend')
    }
}

var allFriend = ['sagor', 'rafi', 'mosadek', 'robul', 'sahajalal'];

var result = megaFriend(allFriend);
console.log(result);






















