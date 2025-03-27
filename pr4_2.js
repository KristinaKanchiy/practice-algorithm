let m;
function calculate(m) {
    
    if (m<1) {
        console.log("Число m має бути≥ 1.Введіть значення повторно");
        return;
    }
  
    for (let n = 1; n <= m; n++) {
        let xn = (Math.log(3 * n) + 5) / (2 * n + 5);
        console.log(`${n} ${xn}`);
    }
}
calculate(5)
calculate(-1)

