//Exerc 1
function minutosASegundos(minutos) {
    // Multiplicar los minutos por 60
    let segundos = minutos * 60;
    return segundos;
  }

let minutos = 2;
let segundosTotal = minutosASegundos(minutos);

document.write(minutos+ " minutos son " + segundosTotal + " segundos.");

//Exerc2
function incrementNumber(number) {
    let result = number + 1;
    return result;
  }
  let originalNumber = 5;
  let incrementedNumber = incrementNumber(originalNumber);
  
  document.write("Original number: " + originalNumber +", Incremented number: " + incrementedNumber);
