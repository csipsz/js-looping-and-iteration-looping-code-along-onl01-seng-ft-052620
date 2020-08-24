function writeCards(array, event){
    let my_array = []
    for (let i = 0; i < array.length; i++) {
        my_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return my_array
}

function countDown(number){
    while (number >= 0){
        console.log(number)
        number--
    }

}