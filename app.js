let a = document.querySelector("#num-1");
let b = document.querySelector("#num-2");
const btn = document.querySelector("#btn");
const heading = document.querySelector("#heading");
const select = document.querySelector("#select");
const option = document.querySelector("option")

btn.addEventListener('click' , () => {
    if(option.value == "+"){
        heading.innerHTML = `${a.value - 0} + ${b.value - 0 } = ${a.value + b.value - 0}`
        console.log(`${a.value * 1} + ${b.value * 1 } = ${a.value + b.value * 1}`)   
    }

    else if(option.value == "-"){
        heading.innerHTML = `${a.value } - ${b.value  } = ${a.value - b.value }`
    }

    else if(option.value == "*"){
        heading.innerHTML = `${a.value} * ${b.value } = ${a.value * b.value}`
    }

    else if(option.value == "/"){
        heading.innerHTML = `${a.value} / ${b.value } = ${a.value / b.value}`
    }

    else if(option.value == "**"){
        heading.innerHTML = `${a.value} ** ${b.value } = ${a.value ** b.value}`
    }
})


function plus(a , b){
    let plusEl =  (a + b) ;
    return plusEl;
}

function minus(a , b){
    let minusEl = (a - b);
    return minusEl;
}

function increase(a , b){
    let increaseEl = (a * b);
    return increaseEl;
}

function division(a , b){
    let divisionEl = (a / b);
    return divisionEl;
}

function degree(a , b){
    let degreeEl = (a ** b);
    return degreeEl;
}

let plusEl = plus(a, b);
let minusEl =  minus(a, b);
let increaseEl = increase(a, b);
let divisionEl = division(a, b);
let degreeEl =  degree(a, b);


