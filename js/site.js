const cards = [5, 6, 7, 8];

appendCard = (h, card) => {
    var hand = h == "d" ? "#txtDealer" : "#txtPlayer";
    var temp = $(hand).val();
    $(hand).val(temp + " " + card);
    doSum(h, card);
};

doSum = (h, card) => {
    var hand = h == "d" ? "#txtDealerTotal" : "#txtPlayerTotal";
    var sum = $(hand).val();
    sum += card;
    $(hand).val(sum);
};

deal = () => {
    var sum = 0;

    for (var i = 0; i < 4; i++) {
        var hand = i == 1 || i == 3 ? "p" : "d";
        appendCard(hand, cards[i]);
    }
};
