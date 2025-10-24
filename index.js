
var cc = 0 

function mostrar(){
    var head = document.getElementById("head")
    cc++
    if (cc==1){
        head.style.height="200px"
        head.style.transition="0.5s"
        
    }else {
        head.style.height="0px"
        head.style.transition="0.5s"
        cc=0

    }

}

function flutuar(){
    var hero = document.getElementById("hero1")
    hero.style.marginTop="200px"
    alert("teste")
    


}