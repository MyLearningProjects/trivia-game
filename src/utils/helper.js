export const shuffleArray = (array) => {
    let pos,temp;
    for(let i=array.length-1 ;i >0 ;i--){
        pos = Math.floor(Math.random() * (i + 1))
        temp = array[i];
        array[i] = array[pos];
        array[pos] = temp
    }
    return array
}