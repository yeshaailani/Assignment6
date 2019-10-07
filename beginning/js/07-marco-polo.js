for(var i = 1; i <= 100; i++) {
    var marcopolo = "";

    if(i % 3 == 0){
        marcopolo += "Marco! ";
    }
    if(i % 5 == 0){
        marcopolo += "Polo!";
    }
    if(marcopolo == "")
        document.write("The number is : " + i + "<br>");
    else
        document.write(marcopolo + "<br>");
}