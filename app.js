var cards = [];
var playerCard= [];
var dealerCard = [];
var cardCount = 0;

var suits = ["spades", "hearts", "clubs", "diams"];
var numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var output = document.getElementById("output");
var dealerHolder = document.getElementById("dealerHolder");
var dealerHolder = document.getElementById("playerHolder");

for (s in suits) {
    var suit = suits[s][0].toUpperCase();
    var bgcolor = (suit == "S" || suit == "C") ? "black" : "red";
    for (n in numb) {
        //output.innerHTML += "<span style='color:" + bgcolor + "'>&" + suits[s] + ";" + numb[n] + "</span> ";
        var cardValue = (n > 9) ? 10 : parseInt(n) + 1
        var card = {
            suit: suit,
            icon: suits[s],
            bgcolor: bgcolor,
            cardnum: numb[n],
            cardvalue: cardValue
        }
        cards.push(card);
    }
}



function Start() {
    
    shuffleDeck(cards);
    dealNew();
    outputCard();
}

function dealNew(){
    playerCard = [];
    dealerCard = [];
    dealerHolder.innerHTML = "";
    playerHolder.innerHTML = "";
    
}


function shuffleDeck(array){
    for(var i = array.length -1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}

function outputCard(){
    output.innerHTML += "<span style='color:" + cards[cardCount].bgcolor + "'>" + cards[cardCount].cardnum + "&" + cards[cardCount].icon + ";</span>  ";
}

ranCard();