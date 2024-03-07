
var output;
var error;
function load(){
    output = document.getElementById("result");
    error = document.getElementById("error_message");
}
function handleBlur(){
    var input = document.getElementById("input").value;
    var length =input.length; 
    
    if(length==0){
        error.innerHTML=`<p style="color:red">count is empty</p>`
        error.style.textShadow = "4px 5px 3px black";
        
        

    }
    
    else{
        var condtion;
        for(i=0;i<length;i++){
            var char = input.charAt(i);
            if(char>='0' && char<='9'){
                condtion = true;
                break;
                condtion=false;
                            
            }
            
        }
        
        
    
   
     if(condtion){
        error.innerHTML = `<p style="color:red">Enter only character and symbols</p>`;
        error.style.textShadow = "4px 5px 3px black";

     }
     else{
        error.innerHTML=`${length}`;
        error.style.textShadow = "4px 5px 3px whites";
     }
    }

    }
    
   


   
