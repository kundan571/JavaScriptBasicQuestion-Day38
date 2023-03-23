function flipCoin(){
    const random = Math.floor(Math.random() * (2 - 1 + 1));
if(random < 0.5){
    return "Heads";
}else{
    return "Tails";
}
}
console.log(flipCoin());