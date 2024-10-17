let display = document.getElementById('display');
let value = "";

function handler(a){
    if(a >= 0 && a <= 9){
        value += a;
    }
    else if(a === "divide"){
        value += "/";
    }
    else if(a === "times"){
        value += "*";
    }
    else if(a === "minus"){
        value += "-";
    }
    else if(a === "plus"){
        value += "+";
    }
    else if(a === 'period'){
        value += ".";
    }
    display.innerHTML = value;
}


function handlingopr(a){
    if(a === "ac"){
        value = ""
        display.innerHTML = "0";
    }
    else if(a === 'del'){
        value = value.slice(0, -1);
        display.innerHTML = value || "0";
    }else if(a === 'equals'){
        try {
            let ans = eval(value);
            value = ans.toString();
            display.innerHTML = value;
        } catch (error) {
            display.innerHTML = "Error";
        }
    }
}



