function processEntries() {
    var cents = document.getElementById("cents").value;
    makeChange(cents);
}

function makeChange(cents) {
    const checkfivehundred = document.getElementById("500check");
    const checkonehundred = document.getElementById("100check");
    const checkfifty = document.getElementById("50check");
    const checkten = document.getElementById("10check");
    const checkfive = document.getElementById("5check");
    const checkone = document.getElementById("1check");
    if (!checkfivehundred.checked) {
        var fivehundred = parseInt(cents / 500);
        cents = cents % 500;
    }
    if (!checkonehundred.checked) {
        var onehundred = parseInt(cents / 100);
        cents = cents % 100;
    }
    if (!checkfifty.checked) {
        var fifty = parseInt(cents / 50);
        cents = cents % 50;
    }
    if (!checkten.checked) {
        var ten = parseInt(cents / 10);
        cents = cents % 10;
    }
    if (!checkfive.checked) {
        var five = parseInt(cents / 5);
        cents = cents % 5;
    }
    if (!checkone.checked) {
        var one = parseInt(cents / 1);
        cents = cents % 1;
    }
    document.getElementById("500yen").value = fivehundred;
    document.getElementById("100yen").value = onehundred;
    document.getElementById("50yen").value = fifty;
    document.getElementById("10yen").value = ten;
    document.getElementById("5yen").value = five;
    document.getElementById("1yen").value = one;
}