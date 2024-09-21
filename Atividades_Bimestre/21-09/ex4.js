function PRIMO(n){

    let contador = 2

    if(n > 1){
        if(contador < n){
            while(contador <= Math.sqrt(n)){
                if(n % contador == 0){
                    return false
                }
                else{
                    contador += 1
                }
            }
            return true
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}

console.log(PRIMO(41))