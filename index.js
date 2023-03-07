let homeScoreBoardText = document.getElementById ("home-score")
let guestScoreBoardText = document.getElementById ("guest-score")
let homeScore = 0
let guestScore = 0


function addHome1 (){
    homeScore ++
    homeScoreBoardText.textContent = homeScore
}

function addHome2 () {
    homeScore += 2
    homeScoreBoardText.textContent = homeScore
}

function addHome3 () {
    homeScore += 3
    homeScoreBoardText.textContent = homeScore
}


function addGuest1 (){
    guestScore ++
    guestScoreBoardText.textContent = guestScore
}

function addGuest2 () {
    guestScore += 2
    guestScoreBoardText.textContent = guestScore
}

function addGuest3 () {
    guestScore += 3
    guestScoreBoardText.textContent = guestScore
}


function Reset (){
    homeScoreBoardText.textContent = 0
    guestScoreBoardText.textContent = 0
    homeScore = 0
    guestScore = 0
}
