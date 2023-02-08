let number;
let isprimenum = true; 

number = Math.floor(Math.random()*100)

function isPrime(number){
    if(number < 3 ||number > 500){
        if (number < 3) console.error(`a random szam: ${number} < 3, probald ujra`);
        else if (number > 500)console.error(`a random szam: ${number} > 500, probald ujra`);
         isprimenum = undefined

    } 
    
     else  if (number > 3 &&number < 500) {
        for(let i = 2; i< number; i++){
            if (number % i == 0) isprimenum= false
        }
     }

  
    switch (isprimenum){
        case false:
            console.log(`is ${number} a prime number: ${isprimenum}`)
            break;
        case true:
            console.log(`is ${number} a prime number: ${isprimenum}`)
            break
    }


}

isPrime(number)
