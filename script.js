const buttons = document.querySelectorAll('.button')
const player1Container = document.getElementById('player1-container')
const player2Container = document.getElementById('player2-container')
const playerContainer = document.getElementById('player-container')
// const randomBtn = document.getElementById('random')
let P1Icon
let P2Icon
let Arr = ['rock','paper','scissors']
let n =Arr.length
let random = (Arr[Math.floor(Math.random()*Arr.length)])

// creating P2 li
function creatingP2Li(){
    P2Icon = document.createElement('i')
    P2Icon.classList.add('fas')
    player2Container.appendChild(P2Icon)
    // addToP2Dom(randomArr())
}

addToP2Dom(random)

// adding to P2 DOM
function addToP2Dom(e){
        if(e === 'rock'){
            creatingP2Li()
            P2Icon.classList.add('fa-hand-rock')
            
        }
        if(e === 'paper'){
            creatingP2Li()
            P2Icon.classList.add('fa-hand-paper')
        }
        if(e === 'scissors'){
            creatingP2Li()
            P2Icon.classList.add('fa-hand-scissors')
        }
}

// creating P1 li
function creatingP1Li(){
    P1Icon = document.createElement('i')
    P1Icon.classList.add('fas')
    player1Container.appendChild(P1Icon)
}

function ifRock(){
    if(random === 'rock'){
        console.log("It's a Draw")
    }
    else if(random === 'paper'){
        console.log('Player-2 Wins')
    }
    else if(random === 'scissors'){
        console.log('Player-1 Wins');
    }
}

function ifPaper(){
    if(random === 'rock'){
        console.log("player-1 Wins")
    }
    else if(random === 'paper'){
        console.log('its a draw')
    }
    else if(random === 'scissors'){
        console.log('player-2 Wins');
    }
}

function ifScissors(){
    if(random === 'rock'){
        console.log("player-2 Wins")
    }
    else if(random === 'paper'){
        console.log('player-1 Wins')
    }
    else if(random === 'scissors'){
        console.log('its a draw');
    }
}

// adding to P1 li
function addToP1Dom(e){
    if(e === 'rock'){
        creatingP1Li()
        P1Icon.classList.add('fa-hand-rock')
        ifRock()
    }
    if(e === 'paper'){
        creatingP1Li()
        P1Icon.classList.add('fa-hand-paper')
        ifPaper()
    }
    if(e === 'scissors'){
        creatingP1Li()
        P1Icon.classList.add('fa-hand-scissors')
        ifScissors()
    }
}

//EventListener on the buttons
buttons.forEach(item=>{
    item.addEventListener('click',(e)=>{
        let Btn = e.target.value
        addToP1Dom(Btn)
        // let nonItem = item.filter(e => )
        
    })
})

