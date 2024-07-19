window.onload = function(){
    document.getElementById("blue").addEventListener("mouseover", function(){
        document.getElementById("title").style.color = "blue"
        document.getElementById("blue").style.backgroundColor = "green"
    });

    document.getElementById("yellow").addEventListener("mouseout", function(){
        document.getElementById("title").style.color = "yellow"
        document.getElementById("yellow").style.backgroundColor = "pink"
    });

    document.getElementById("red").addEventListener("mouseup", function(){
        document.getElementById("title").style.color = "red";
        
    });
}