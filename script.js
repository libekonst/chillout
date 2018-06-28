// Try to add support for mobile: onmouseover == tap, onmousedown == second tap.

//@ts-check

class Highlighter {
    constructor(radio){
        radio = document.getElementById(radio);
        function changeToHover(){
            if(radio.className != "radioItemTest radioItemActive"){
                radio.className = "radioItemTest radioItemHover";
            }
        }
        
        function changeToActive(){
            if(radio.className != "radioItemTest radioItemActive"){
                radio.className = "radioItemTest radioItemActive";
            } else {
                radio.className = "radioItemTest radioItemHover";
            }
        }
        
        function resetClassName(){
            if(radio.className != "radioItemTest radioItemActive"){
                radio.className = "radioItemTest";
            }
        }
        radio.onmousedown = changeToActive;
        radio.onmouseover = changeToHover;
        radio.onmouseout = resetClassName;
    }
}

// let offradio = document.getElementById('offradio');

new Highlighter('offradio');
new Highlighter('best');
new Highlighter('enlefko');
new Highlighter('imagine');
new Highlighter('pepper');
