  
var x = document.querySelector("#options h2")
x.addEventListener("click",ListOp)



function ListOp() {
    var x = document.querySelector("#options div");
    x.classList.toggle("hidden")

  }




    var fselc = document.querySelectorAll(".fill")


    for(let i=0; i<player.length; i++)
    
    {

    fselc[i].addEventListener("input",ColorChange)


    
    function ColorChange(e){
      console.log(e.target)
      player[i].fill = e.target.value
      pad[i].fill = e.target.value 
      e.target.nextElementSibling.innerHTML=e.target.value
    }


  }


    var stroke = document.querySelectorAll(".stroke")

    for(let i=0; i<player.length; i++){
    stroke[i].addEventListener("input", StrokeChange)

    function StrokeChange(e){
      player[i].stroke = e.target.value
      pad[i].stroke = e.target.value
      e.target.nextElementSibling.innerHTML=e.target.value
    }
  }







    

    console.log(fselc)









/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
