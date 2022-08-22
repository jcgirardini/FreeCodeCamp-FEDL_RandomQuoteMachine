//RANDOM QUOTE MACHINE
//Coded by JC GIRARDINI for freeCodCamp certification
//Global Variables
let quotes = [];
let quote = "";
let author = "";
let colores=[
    ["#000028", "#fff"],
    ["#fff", "#000028"],
    ["#e9791a", "#0089e4"],
    ["#e9791a", "##0089e4"],
    ["#00992b", "#b32b85"],
    ["#b32b85", "#00992b"],
    ["#ffff00", "#000"],
    ["#000", "#ffff00"],
    ["#ffff00", "#0000f4"],
    ["#0000f4", "#ffff00"],
    ["#ef5ca6", "#5ff4ab"],
    ["#5ff4ab", "#ef5ca6"],
    ["#ed0000", "#fff"],
    ["#fff", "#ed0000"],
    ["#ed0000", "#00f4f5"],
    ["#00f4f5", "#ed0000"]
];

//Functions
function newQuote() {
    let quoteSel = Math.floor(Math.random() * quotes.length);
    let colorSel = Math.floor(Math.random() * colores.length);
    let clrMain = colores[colorSel][0];
    let clrText = colores[colorSel][1];
    quote = quotes[quoteSel].quote;
    author = quotes[quoteSel].author;
    $("body").css("background-color", clrMain);
    $("#wrapper").css("background-color", clrText);
    $("#tweet-quote").css("background-color", clrText);
    $("#tweet-quote i").css({"background-color": clrText, "color": clrMain});
    $("#new-quote").css({"background-color": clrText, "color": clrMain});
    $("#text").text(quote);
    $("#text").css("color", clrMain);
    $("#author").text(author);
    $("#author").css("color", clrMain);
}

//On loaded
$(function () {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    var jqxhr = $.get(url, function (data) {
        quotes = [...JSON.parse(data).quotes];
        newQuote();
    })
        .done(function(){
            console.log("done")
        })
        .fail(function (data) {
            console.log("fail" + data);
        })
        .always(function () {
            console.log("finished");
        });
})

//Events
$("#new-quote").click(newQuote);