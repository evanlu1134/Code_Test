function primeChecker(num){
    let sq = Math.sqrt(num);
    for(let i = 2; i <= sq;i++){
        if(num % i === 0) return false
    }
    return num > 1;
}

module.exports = primeChecker