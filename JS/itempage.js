// WORK IN PROGRESS

let itemAmount = document.getElementById("item-amount");
let sizeDropDown = document.getElementById("size");
let decQtyBtn = document.getElementById("dec-qty");
let incQtyBtn = document.getElementById("inc-qty");
let currPrice = document.getElementById("curr-price");
let basePrice = Number(currPrice.innerText);

const totalCost = () =>{
    return costBySize(sizeDropDown.value)*Number(itemAmount.innerText);
}

const costBySize = (size) =>{
    switch(size){
        case 'Demi':
            return basePrice;
            break;
        case 'Short':
            return basePrice+10;
            break;
        case 'Tall':
            return basePrice+20;
            break;
        case 'Grande':
            return basePrice+30;
            break;
        case 'Venti':
            return basePrice+40;
            break;
        case 'Trenta':
            return basePrice+50;
            break;
        default:
    }
}

const updateCost = () =>{
    currPrice.innerText = totalCost().toLocaleString(undefined,{minimumFractionDigits: 2, maximumFractionDigits: 2});
    // I dont know how to .toLocaleString() works!
}

const decQty = () =>{
    if(Number(itemAmount.innerText)>1)
        itemAmount.innerText = Number(itemAmount.innerText)-1;
    updateCost();
}

const incQty = () =>{
    itemAmount.innerText = Number(itemAmount.innerText)+1;
    updateCost();
}

decQtyBtn.addEventListener("click",decQty);
incQtyBtn.addEventListener("click",incQty);
sizeDropDown.addEventListener("click",updateCost)
