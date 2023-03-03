const balance = document.getElementById("balance");



const money_plus = document.getElementById("money_plus");
const money_minus = document.getElementById("money_minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");




let transactions = [];



function addtransaction(e){
    e.preventDefault();
    if(
        text.ariaValueMax.trim( === "" || amount.ariaValueMax.trim() ==="")
    ){
        alert("Please Enter Text And Value");
    }else{
        const transaction ={
            id:genrateID(),
            text:text.Value,
            amount: +amount.value,


        };

        transactions.push(transaction);
        addtransactionDOM(transaction);
        updatevalues();
        text.value="";
        amount.value="";
    }
}

function genrateID(){
    return Math.floor(Math.random()*100000000)
}

function addtransactionDOM(transaction){
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    )

    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="">x</button>
    `;

    list.appentchild(item);

}

function updatevalues(){
    const amount = transactions.map(transactions=> transactions.amount)
    const total = amounts.reduce((acc.item) => (acc += item),0).tofixed(2)
    const income = amounts.filter(item => item > 0).reduce(acc,item)=>(acc =+ item),0.tofixed(2)
    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)* -1
    ).toFixed(2);

    balance.innerText=`${total}`;
    money_plus.innerText=`$${income}`;
    money_minus.innerText=`$${expence}`;
}

function Init(){
    list.innerHTML="";
    transactions.forEach(addtransactionDOM)
}


Init()

form.addEventListener("submit",addtransaction);
