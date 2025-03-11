class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Додавання елемента в кінець списку
    add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Видалення елемента після кожного від'ємного значення
    remove() {
      let current = this.head;
      while (current !== null && current.next !== null) {
        if (current.data < 0) {
          current.next = current.next.next;
          this.size--;
        } else {
          current = current.next;
        }
      }
    }
  
    // Виведення вмісту списку
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.data + ' ';
        current = current.next;
      }
      return result.trim();
    }
  }
  
  function main() {
    const list = new LinkedList();
    let inputData = [4, -5, 6, -1, 5, -3, 7];
    inputData.forEach(i => list.add(i));
  
    console.log('Початковий список елементів: ', list.printList());
    list.remove();
    console.log('Список після видалення елементів після від’ємних значень: ', list.printList());
  }
  
  main();
  