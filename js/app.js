function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else {
         console.log('got 3 digit and calling again',pin);
        return pin;
    }
}


function generatePin(){
    const pin =getPin();
    document.getElementById('display-pin').value =pin;
} 


document.getElementById('key-pad').addEventListener('click',function(event){

    const number = event.target.innerText;
    // console.log("any key clicked")
    const calc =document.getElementById('typed-numbers');
    calc.value = number;
    


    

})