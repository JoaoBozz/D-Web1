function PRIMEIROSprimos(n) {

    let contador = 0;
    let num = 2;
    
    while (contador < n) {
        let elprimo = true;
        for (let contador = 2; contador <= Math.sqrt(num); contador += 1) {
            if (num % contador === 0) {
                elprimo = false;
                break;
            }
        }
        if (elprimo) {
            console.log(num);
            contador += 1;
        }
        num += 1;
    }
}

PRIMEIROSprimos(15);