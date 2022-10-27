let homeScoreNum = 0
let guestScoreNum = 0
let homeScoreTxt = document.getElementById("homeScore")
console.log(homeScoreTxt.textContent)
let guestScoreTxt=document.getElementById("guestScore")


function home1(){
homeScoreNum +=1
homeScoreTxt.textContent = homeScoreNum    
}

function home2(){
homeScoreNum +=2
homeScoreTxt.textContent = homeScoreNum    
}

function home3(){
homeScoreNum +=3
homeScoreTxt.textContent = homeScoreNum    
}

function guest1(){
guestScoreNum +=1
guestScoreTxt.textContent = guestScoreNum    
}


function guest2(){
guestScoreNum +=2
guestScoreTxt.textContent = guestScoreNum    
}


function guest3(){
guestScoreNum +=3
guestScoreTxt.textContent = guestScoreNum    
}

function reset(){
    homeScoreNum = 0
    homeScoreTxt.textContent = homeScoreNum
    guestScoreNum = 0
    guestScoreTxt.textContent = guestScoreNum
}