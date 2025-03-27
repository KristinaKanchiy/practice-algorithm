var a,b,x;
function calculateF(a, b, x) {
    let result = null;
    let error = 0;
  
    if (x >= -1 && x < 8) {
      if (x < 6) {
        if (x >= -1) {
          result = Math.sin(x);
        } else {
          error = 1; 
        }
      } else if (x === 6) {
        result = 3 * Math.pow(x, 2) + b * x;
      } else if (x > 6) {
        const logarifm = a * x - 3 * b;
        if (logarifm <= 0) {
          error = 2; 
        } else {
          result = Math.log(logarifm);
        } 
      }
    } else {
      error = 3; 
    
    
    switch (error) {
        case 0:
        console.log(`Значення функції f(${x}) = ${result}`);
        return result;
      case 1:
        console.error(`Значення х=${x} менше -1`);
        return `Значення x=${x}сменше -1`;
      case 2:
        console.error(`Логарифм не є додатним коли x = ${x}.`);
        return `Логарифм не є додатним коли x = ${x}`;
      case 3:
        console.error(`Значення x = ${x} не входить до проміжку [-1, 8).`);
        return `Значення x = ${x} не входить до проміжку [-1, 8)`;
        default:
            console.error("Невідома помилка");
            return "Невідома помилка";
    
    }
    }
  {
    console.log(`Відповідь коли f(${a,b,x}) = ${result}`);
    return result;
  }
}
    

  
  calculateF(2, 3, 0)
  calculateF(2, 3, 6)
  calculateF(2, 3, 7)
  calculateF(2, 3, -2)
  calculateF(2, 3, 6.5)
  calculateF(2, 3, 7)