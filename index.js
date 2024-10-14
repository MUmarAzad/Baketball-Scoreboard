let hm_score = document.getElementById("home-score").textContent;
let hm_title = document.getElementById("hm-title").textContent;
var x = Number(hm_score)

let gs_score = document.getElementById("guest-score").textContent;
let gs_title = document.getElementById("gs-title").textContent;
var y = Number(hm_score)

function check(){
    if(x > y){
        document.getElementById("hm-title").style.color = "yellow";
        document.getElementById("hm-title").style.borderLeft = "5px solid yellow";
        document.getElementById("hm-title").style.borderRight = "5px solid yellow";
        document.getElementById("gs-title").style.border = "none";
        document.getElementById("gs-title").style.color = "white";
    }
    else if(y > x){
        document.getElementById("hm-title").style.color = "white";
        document.getElementById("hm-title").style.border = "none";
        document.getElementById("gs-title").style.borderLeft = "5px solid yellow";
        document.getElementById("gs-title").style.borderRight = "5px solid yellow";
        document.getElementById("gs-title").style.color = "yellow";
    }
    else{
        document.getElementById("hm-title").style.color = "lightgrey";
        document.getElementById("hm-title").style.borderLeft = "5px solid lightgrey";
        document.getElementById("hm-title").style.borderRight = "5px solid lightgrey";
        document.getElementById("gs-title").style.borderLeft = "5px solid lightgrey";
        document.getElementById("gs-title").style.borderRight = "5px solid lightgrey";
        document.getElementById("gs-title").style.color = "lightgrey";
    }
}

function hm_add1(){
    x += 1;
    document.getElementById("home-score").textContent = x;
    check();
}

function hm_add2(){
    x += 2;
    document.getElementById("home-score").textContent = x;
    check();
}

function hm_add3(){
    x += 3;
    document.getElementById("home-score").textContent = x;
    check();
}

function gs_add1(){
    y += 1;
    document.getElementById("guest-score").textContent = y;
    check();
}

function gs_add2(){
    y += 2;
    document.getElementById("guest-score").textContent = y;
    check();
}

function gs_add3(){
    y += 3;
    document.getElementById("guest-score").textContent = y;
    check();
}

function reset(){
    x = 0;
    y = 0;
    document.getElementById("home-score").textContent = x;
    document.getElementById("guest-score").textContent = y;
    check();
}