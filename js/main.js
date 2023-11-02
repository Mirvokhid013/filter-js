// for(let i = 2; i <= 10; i++) {
//     for(let k = 1; k <= 10; k++) {
//         console.log(`${i} * ${k} = ${i*k}`);
//     }
//     console.log("-----------");
// }

// let elForm = document.querySelector(".js-form");
// let elInput = document.querySelector(".js-input");
// let elResult = document.querySelector(".result");

// let arr = ['olma', 'nok', 'banan'];

// console.log(arr);
// elResult.textContent = arr;

// elForm.addEventListener("submit", function(evt) {
//     evt.preventDefault();

//     if(arr.includes(elInput.value)) {
//         alert("Bunday meva ro'yhatda mavjud");
//     } else {
//         arr.push(elInput.value);
//     }
//     elResult.innerHTML = arr;
//     elInput.value = '';
// })

let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elInput2 = document.querySelector(".js-input2");
let elInput3 = document.querySelector(".js-input3");
let elResult = document.querySelector(".result");
let elSelect = document.querySelector(".js-select");

function func(list, node) {
    node.innerHTML = "";
    list.forEach(function(item, index, array) {
        let elLi = document.createElement("li");
        elLi.classList.add("item");
        let elFName = document.createElement("p");
        elFName.textContent = `First Name : ${item.first_name}`;
        let elLName = document.createElement("p");
        elLName.textContent = `Last Name : ${item.last_name}`;
        let elGender = document.createElement("p");
        elGender.textContent = `Gender : ${item.gender}`;
        let elCountry = document.createElement("p");
        elCountry.textContent = `Country : ${item.country}`;
        let elMoney = document.createElement("p");
        elMoney.textContent = `Money : ${item.money}`;
        elLi.append(elFName, elLName,elGender,elCountry,elMoney);
        elResult.appendChild(elLi);
    })
}

func(users, elResult);

elSelect.addEventListener("change", function(evt) {
    evt.preventDefault();
    if(elSelect.value) {
        let filteredMale = users.filter((item) => item.gender.toLowerCase() == elSelect.value.toLowerCase())
        func(filteredMale, elResult);
    } else {
        func(users, elResult);
    }
})

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    if(elInput) {
        let filteredCountry = users.filter((item) => item.country.toLowerCase() == elInput.value.toLowerCase())
        func(filteredCountry, elResult);
    } else {
        func(users, elResult);
    }
    elInput.value ='';
    
    if(elInput2.value || elInput3.value) {
        let filteredMoney = users.filter((item) => item.money > elInput2.value && item.money < elInput3.value)
        func(filteredMoney, elResult);
        console.log(filteredMoney);
    }
})

// elInput2.addEventListener("range", function(evt) {
//     evt.preventDefault();
//     let filteredMoney = users.filter((item) => (((item.money + 0) >= elInput2) && ((item.money + 0) <= elInput3)))
//     func(filteredMoney, elResult);
// })

// elInput3.addEventListener("range", function(evt) {
//     evt.preventDefault();
//     let filteredMoney = users.filter((item) => (((item.money + 0) >= elInput2) && ((item.money + 0) <= elInput3)))
//     func(filteredMoney, elResult);
// })