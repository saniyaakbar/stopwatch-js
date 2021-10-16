var start = document.querySelector("#pause");
var pause = document.querySelector("#stop");
    var count = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var saveTime1 = 0;
    var saveTime2 = 0;
    var saveTime3 = 0;
    var saveTime4 = 0;
    var flag = 0;

    function startTime(){

        var myTimer = setInterval(time, 100)
        
        function time(){
            if(flag === 0){
                if(count >= 60){
                    count = 0; 
                    if(count2 >= 60){
                        count2 = 0;
                        if(count3 >= 60){
                            count3 = 0;
                            count4++;
                        }
                        count3++;
                        
                    }
                    count2++;
                }
                count++;
              
            
                document.querySelector("#time").textContent = `${count4} :${count3} : ${count2} : ${count}`;
               
                saveTime1 = count;
                saveTime2 = count2;
                saveTime3 = count3;
                saveTime4 = count4;
               
            }
            else{
                clearInterval(myTimer)
                
            }
           

        }
      
    }
   
   
function restartTime(){
    var restart = document.querySelector("#restart");

    restart.addEventListener("click", function(){
        count = 0;
        count2 = 0;
        count3 = 0;
        count4 = 0;
        flag = 0;
        document.querySelector("#time").textContent = `${count4} :${count3} : ${count2} : ${count}`;
        // startTime();
    })
    
}

function splitTime(){
    var split = document.querySelector("#split");

    split.addEventListener("click", function(){
        console.log(split.textContent)
        var node = document.createElement("LI")
        var textnode = document.createTextNode(`${time.textContent}`)
        node.appendChild(textnode);
        document.querySelector("#demo").appendChild(node);
    })
    
}

start.addEventListener("click", function(){
        flag = 0;
   pause.style.display = "initial"
   start.style.display = "none"
   startTime();
})

pause.addEventListener("click", function(){
    pause.style.display = "none"
    start.style.display = "initial"
    flag = 1;
})



// startTime();
restartTime();
splitTime();