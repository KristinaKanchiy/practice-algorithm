class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Додавання елемента в кінець списку
    add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Видалення елемента перед кожним елементом зі значенням 3
    removeBeforeThree() {
      let current = this.head;
      while (current && current.next) {
        if (current.next.data === 3 && current.prev) {
          let nodeToRemove = current.prev;
          if (nodeToRemove.prev) {
            nodeToRemove.prev.next = current;
            current.prev = nodeToRemove.prev;
          } else {
            this.head = current;
            current.prev = null;
          }
          this.size--;
        }
        current = current.next;
      }
    }
  
    // Виведення списку через кому
    printList() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(", "));
    }
  }
  
  // Основна функція
  function main() {
    const list = new DoublyLinkedList();
    let inputData = [1, 2, 3, 4, 3, 5, 3, 6];
    inputData.forEach(i => list.add(i));
    console.log("Початковий список:");
    list.printList();
    list.removeBeforeThree();
    console.log("Список після видалення елементів перед 3:");
    list.printList();
  }
  
  main();
  