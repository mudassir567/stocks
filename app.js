var intialPrice =document.querySelector('#intialPrice')
var stockQuantity =document.querySelector('#stockQuantity')
var currentPrice= document.querySelector('#currentPrice')

var button =  document.querySelector('#submitbtn')
var output = document.querySelector('#output')


button.addEventListener('click',submitHandler)
function submitHandler() {
    var int =(intialPrice.value);
    var qty=stockQuantity.value;
    var cur=currentPrice.value;
    calculate(int,qty,cur)
}
function calculate (intialPrice,stockQuantity,currentPrice){

if (intialPrice>currentPrice) {
    
    loss =(intialPrice-currentPrice)*stockQuantity;
    lossPercentage=(loss/intialPrice)*100;
    showoutput( `we have the loss of ${loss} and loss percentage is ${lossPercentage}%`)
    
} else if (currentPrice>intialPrice) {
    profit=(currentPrice-intialPrice)*stockQuantity;
    profitPercentage=(profit/intialPrice)*100;
    showoutput( `the stock has profit of ${profit} and profit percentage is ${profitPercentage}`)

} else {
    showoutput('no pain no gain')
}
}

function showoutput(msg) {

    output.innerHTML=msg
    
}

//calculate(100,10,10)