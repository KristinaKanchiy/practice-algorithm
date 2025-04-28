class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

   
    sumElements(node) {
        if (node === null) return 0;    
        return node.value + this.sumElements(node.left) + this.sumElements(node.right);
    }

    printLeaves(node) {
        if (node === null) return;
        if (node.left === null && node.right === null) {
            console.log("Листок: " + node.value);
        }
        this.printLeaves(node.left);
        this.printLeaves(node.right);
    }
}


const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.right = new Node(18);


const sum = tree.sumElements(tree.root);
console.log("Сума всіх елементів дерева:", sum);

tree.printLeaves(tree.root);
