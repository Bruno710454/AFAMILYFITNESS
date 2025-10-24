
var cc = 0 

function mostrar(){
    var img = document.getElementById("img")
    var img2 = document.getElementById("img2")
    var head = document.getElementById("head")
    cc++
    img2.style.display="none"
    img.style.display="block"
    if (cc==1){
        head.style.height="200px"
        head.style.transition="0.5s"
        
    }else {
        head.style.height="0px"
        head.style.transition="0.5s"
        cc=0
         img2.style.display="block"
        img.style.display="none"

    }

}

function flutuar(){
    var hero = document.getElementById("hero1")
    hero.style.marginTop="200px"
    alert("teste")
    


}