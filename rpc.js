let choice = ["r", "p", "s"]
let random = Math.floor(Math.random() * choice.length)

function play() {
    let user = prompt("pick 'r' for rock, 'p' for paper or 's' for scissors: ")
    const comp = choice[Math.floor(Math.random() * choice.length )]
    if(user != 'r' && user != 'p' && user != 's'){
        return("That is not a valid input")
    }else if (user === 'r' && comp === 's') {
        return ("Player picked " + user + " and computer picked " + comp + " Rock beats Paper! players wins.")
    } else if (user === 'p' && comp === 'r') {
        return ("Player picked " + user + " and computer picked " + comp + " Paper beats rock! player wins.")
    } else if (user === 's' && comp === 'p') {
        return ("Player picked " + user + " and computer picked " + comp + " Scissors beats paper! player wins.")
    } else if (user === comp) {
        return ("Player picked " + user + " and computer picked " + comp + " It's a Draw!")
    } else {
        return ("Player picked " + user + " and computer picked " + comp + " Computer wins!")
    }
}

const comp = choice[random]

function game(){
    for(let i = 0; i < 5; i++){
        console.log(play())
    }
}

game()
