const randomCol = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let IntID;

const startChangeColor = function(){
    if(!IntID){
        // Change color immediately
        ChangeByColor();
        // Then set up interval to change color every 2 seconds
        IntID = setInterval(ChangeByColor, 500);
    }
}

function ChangeByColor(){
    document.body.style.backgroundColor = randomCol();
}

const stopChangeColor = function(){
    clearInterval(IntID);
    IntID = null;
}

document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
