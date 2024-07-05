window.onload = function(){

    const images = document.getElementsByClassName("productsImg")
    const total = document.getElementById("total")

    const sMais = document.getElementsByClassName("sMais")


    for(let i = 0; i < images.length; i++){
        images[i].addEventListener("click", function(){
            document.getElementById("imgAmpli").src = images[i].src
            total.style.display = "block"
        })
    }

    total.addEventListener("click", function(){
        total.style.display = "none"
    })

    for(let i = 0; i < sMais.length; i++){
        sMais[i].addEventListener("mouseover", function(){
            sMais[i].style.fontSize = "120%"
        })

        sMais[i].addEventListener("mouseout", function(){
            sMais[i].style.fontSize = "initial"
        })
    }
}   