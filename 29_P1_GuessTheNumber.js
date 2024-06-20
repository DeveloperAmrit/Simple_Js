console.log('Guess the number between 0 and 100')
let correct_num = Math.floor(Math.random()*100)
let i = 0
let input_num 

while(input_num!=correct_num){
    input_num = parseInt(prompt('Guess the number'))
    if(input_num - correct_num > 100 || correct_num - input_num > 100){
        console.log('Think between 0 and 100 only')
    }
    else if(input_num - correct_num >= 50){
        console.log('Very Very high think low')
    }    
    else if(input_num - correct_num >= 25){
        console.log('Very High Think low')
    }
    else if(input_num - correct_num >= 10){
        console.log('High Think low')
    }
    else if(input_num - correct_num > 0){
        console.log('close Thnik low')
    }
    
    else if(correct_num - input_num >= 25){
        console.log('Very Low Think low')
    }
    else if(correct_num - input_num >= 10){
        console.log('Low Think high')
    }
    else if(correct_num - input_num > 0){
        console.log('close Thnik high')
    }
    i++
    if(i>=100){
        break
    }
}
i<100? console.log(`CORRECT! You guessed the coorect number ${correct_num} in ${i} guesses`) :  console.log('You lose!')
console.log(`Your score is ${(100 - i)*3}`)
