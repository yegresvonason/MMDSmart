window.onload = function(){
    document.getElementById("create-recipient-button").onclick = clickHandler;
    var w;
    function clickHandler(){
        w = window.open("create-recipient-list.html", "Create Recipient List");
    }
}