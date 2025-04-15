class DoublyLinkedListNode {
    constructor(data) {
      this.data = data;
      this.previous = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addLast(data) {
      const newNode = new DoublyLinkedListNode(data);
  
      if (!this.tail) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  
    displayForward() {
      let current = this.head;
      let output = "";
      while (current) {
        output += current.data + (current.next ? " " : "");
        current = current.next;
      }
      console.log(output);
    }
  
    removeBeforeValue(targetValue) {
      let current = this.head;
  
      while (current) {
        if (Math.abs(current.data - targetValue) < Number.EPSILON) {
          if (current.previous) {
            const nodeToRemove = current.previous;
            const beforeToRemove = nodeToRemove.previous;
  
            current.previous = beforeToRemove;
            if (beforeToRemove) {
              beforeToRemove.next = current;
            } else {
              this.head = current;
            }
  
            nodeToRemove.previous = null;
            nodeToRemove.next = null;
          } else {
            console.log(`Елемент зі значенням ${targetValue} є першим у списку, тому перед ним нічого видаляти.`);
            current = current.next;
          }
        }
        current = current.next;
      }
    }
  }
  
 
  const list = new DoublyLinkedList();
  
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
  list.addLast(4);
  list.addLast(3);
  list.addLast(5);
  list.addLast(6);
  list.addLast(3);
  
  console.log("Двоспрямований список:");
  list.displayForward();
  
  list.removeBeforeValue(3.0);
  
  console.log("\nСписок після видалення елементів перед кожним '3':");
  list.displayForward();