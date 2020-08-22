// Functional-Shared Instantiation Pattern -> Requires ._extend({}, methods)

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // {'value' : input}

  // your code here
  newTree.children = [];  // Should be [] instead of null

  // [{'value': 5}] => children[0].value = 5;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let addTree = new Tree(value);
  this.children.push(addTree);
};// { 'addChild' : func() }

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    let child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};



// Complexity: What is the time complexity of the above functions?
// 1. insertion - 0(1) => constant time complexity
// 2. search - O(n) => linear time operations based on "n"

