function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length==4){
        return pin;
    }
}


function generatePin(){

    console.log('generating')
}