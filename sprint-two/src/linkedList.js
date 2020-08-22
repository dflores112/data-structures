var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    let formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
    var currentHead = this.head;
    while(currentHead) {
      if(target === currentHead.value) {
        return true;
      } else {
        currentHead = currentHead.next;
      }
    }
    return false;
  };

  return list;
};

// Create Node

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 1. insertion - 0(1) => constant time complexity
 2. removal - 0(1) => constant time complexity because we remove from head
 3. search - O(n) => linear time operations based on "n"
 */
