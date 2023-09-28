// WORK IN PROGRESS

let itemAmount = document.getElementById("item-amount");
let decQtyBtn = document.getElementById("dec-qty");
let incQtyBtn = document.getElementById("inc-qty");
let currPrice = document.getElementById("curr-price");
let basePrice = Number(currPrice.innerText);

const decQty = () =>{
    if(Number(itemAmount.innerText)>1)
        itemAmount.innerText = Number(itemAmount.innerText)-1;
    currPrice.innerText = ((basePrice*Number(itemAmount.innerText).toLocaleString()).toFixed(2));
}

const incQty = () =>{
    itemAmount.innerText = Number(itemAmount.innerText)+1;
    currPrice.innerText = ((basePrice*Number(itemAmount.innerText).toLocaleString()).toFixed(2));
}

decQtyBtn.addEventListener("click",decQty);
incQtyBtn.addEventListener("click",incQty);
