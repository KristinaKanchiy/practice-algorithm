class Stack {
    constructor() {
      this.items = [];
    }
  
    // Додавання елемента у стек
   addToStack(element) {
      this.items.push(element);
    }
  
 // Видалення елемента зі стеку
 pop() {
  if (this.items.length==0) {
      console.log("Стек порожній! Неможливо видалити елемент.");
  }
  return this.items.pop();
}

    // Перегляд даних стеку
    displayStack() {
      console.log("Елементи стеку:", this.items.join(", "));
    }
  // Очищення стеку
  clearStack() {
    this.items = [];
}
    // Обчислення добутку непарних елементів стеку
   productelements() {
    return this.items
    .filter(num => num % 2 !== 0)
    .reduce((product, number) => product * number, 1);
}
}
  function main() {
    //Створення стеку
    const stack = new Stack();
  
    // Додавання елементів у стек
    stack.addToStack(1);
    stack.addToStack(3);
    stack.addToStack(4);
    stack.addToStack(5);
    stack.addToStack(6);
    stack.addToStack(7);

    
    // Перегляд стеку
    stack.displayStack();
  
    // Обчислення добутку непарних елементів
    console.log("Добуток непарних елементів:", stack.productelements());
  
  }
  
  main();
  