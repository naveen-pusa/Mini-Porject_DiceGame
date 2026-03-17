let turn = 1
let num1 = 0
let num2 = 0

function diceGame(){

    let dice1 = document.getElementById('dice1')
    let dice2 = document.getElementById('dice2')
    let h2 = document.getElementById('h2')
    let h3 = document.getElementById('h3')
    let result = document.getElementById('result')
    let sound = document.getElementById('sound')

    result.innerHTML = ""

    // play sound
    sound.currentTime = 0
    sound.play()

    if(turn === 1){

        // 🎲 Player 1 turn
        dice1.classList.add('addRotate')

        setTimeout(()=>{
            num1 = Math.floor(Math.random()*6) + 1
            h2.innerHTML = num1

            dice1.classList.remove('addRotate')
            sound.pause()

            result.innerHTML = "Player 2 Turn"

            turn = 2   // switch turn

        },2000)

    } else {

        // 🎲 Player 2 turn
        dice2.classList.add('addRotate')

        setTimeout(()=>{
            num2 = Math.floor(Math.random()*6) + 1
            h3.innerHTML = num2

            dice2.classList.remove('addRotate')
            sound.pause()

            // 🎯 Compare result
            if(num1 > num2){
                result.innerHTML = "Player 1 Wins 🤩"
            } else if(num2 > num1){
                result.innerHTML = "Player 2 Wins ✨"
            } else {
                result.innerHTML = "It's a Draw 😊"
            }

            turn = 1   // reset game for next round

        },2000)
    }
}