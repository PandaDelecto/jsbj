const cards = [5, 6, 7, 8];
var playerCards = [];
var dealerCards = [];

deal = () => {
    clear();
    for (var i = 0; i < 4; i++) {
        if (i == 1 || i == 3) {
            dealerCards.push(cards[i]);
        } else {
            playerCards.push(cards[i]);
        }
    }

    display();
};

display = () => {
    var temp = "";
    for (var i = 0; i < dealerCards.length; i++) {
        temp += dealerCards[i] + " ";
    }
    $("#txtDealer").val(temp);
    temp = "";

    for (var i = 0; i < playerCards.length; i++) {
        temp += playerCards[i] + " ";
    }
    $("#txtPlayer").val(temp);

    doSum();
};

doSum = () => {
    var d = dealerCards.reduce(function (a, b) {
        return a + b;
    });
    $("#txtDealerTotal").val(d);

    var p = playerCards.reduce(function (a, b) {
        return a + b;
    });
    $("#txtPlayerTotal").val(p);
};

clear = () => {
    dealerCards.length = 0;
    playerCards.length = 0;
    $("txtDealer").val("");
    $("txtPlayer").val("");
};
