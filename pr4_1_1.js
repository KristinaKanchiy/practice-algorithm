var a,b,x;
function calculatefunchion(a,b,x) {
    let result
      
        if (x >= -1 && x < 6) {
          result = Math.sin(x);
        } else if (x === 6) {
          result = 3 * Math.pow(x, 2) + b * x;
        } else if (x > 6 && x < 8) {
          const logarifm = a * x - 3 * b;
          if (logarifm <= 0) {
            console.log('Помилка');
          } else {
            result = Math.log(logarifm);
          }
        } 
      {
          console.log(`Відповідь коли f(${a,b,x}) = ${result}`);
          return result;
        }
    }



      calculatefunchion(2,1,3)
      calculatefunchion(5,3,7)
      calculatefunchion(8,4,6)
      calculatefunchion(2,7,-2)