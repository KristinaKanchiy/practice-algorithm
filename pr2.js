class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  } }
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;    }
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;     }
      current.next = newNode;     }
    this.size++;
  }
  
  remove() {
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.data < 0) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }   }    }
     
   printList() {
        let current = this.head;
        let result = '';
        while (current) {
          result += current.data + ' ';
          current = current.next;   }
        return result.trim();
      } 
    }
function main() {
  const list = new LinkedList();
  list.add(4)
  list.add(-5)
  list.add(6)
  list.add(-1)
  list.add(5)
  list.add(-3)
  list.add(7)

  console.log(`Список елементів:`,  list.printList());
  list.remove();
  console.log('Список після видалення елементів після від’ємних значень: ', list.printList());  }
main();
