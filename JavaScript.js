// cach the Element by element



const attack_button = document.getElementById("attack")
const simon_animtion = document.getElementById("animtion")
// whatch


attack_button.addEventListener("click",function(){
    
    simon_animtion.style.display="block"
    
    attack_button.style.background = "rgb(92,9,9)"
    
    const mytimeout = setTimeout(hidde,500)
    
    
    function hidde(){
        simon_animtion.style.display="none"
       
        attack_button.style.background = "rgb(155,9,0)"
        
    }
    
    
})