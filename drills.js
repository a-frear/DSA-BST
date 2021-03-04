const BST = require('./BST.js')

/* 
4. Returns all the values of the tree recursively?
Runtime of the algorithm is O(log n)
*/

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

function main() {
    const testTree = new BST();
    testTree.insert(4)
    testTree.insert(3)
    testTree.insert(5)
    testTree.insert(12)
    testTree.insert(1)
    testTree.insert(2)
    testTree.insert(6)
    testTree.insert(10)
    return testTree
}

const testTree = main()

console.log(tree(testTree))

//5. Return height
const findHeight = (tree) => {
    // if the tree is empty, return 0
    if (tree === null) return 0;
    else {
      // find L and R depths
      let leftDepth = findHeight(tree.left);
      let rightDepth = findHeight(tree.right);
  
      //return the greater value (depth) + 1 for the root node
      if (leftDepth > rightDepth) {
        return leftDepth + 1;
      } else {
        // if right is greater or they are the same, return the right
        return rightDepth + 1;
      }
    }
  };

  console.log(findHeight(testTree))


//6. Is it a BST?
const isBST = (tree) => {
    // base case for recursion - bottom of the tree
    if (!tree.left && !tree.right) {
      return true;
    }
    // if it has a left
    if (tree.left) {
      // If the left value is greater or equal than it's not a BST
      if (tree.left.value >= tree.value) {
        return false;
      }
      // move down the tree recursively
      isBST(tree.left);
    }
    if (tree.right) {
      if (tree.right <= tree.value) {
        return false;
      }
      isBST(tree.right);
    }
    //default
    return true;
  };

  console.log(isBST(testTree))

// 7. Find the third largest
//  if there is a right
//   you have to go to the right 
//   and go as far as you can to get to the highest
//   then you reverse 

//if there is no right
// is there a left?
//if there is a left, 
// can I use height for this?

const findThirdLargest = (tree) => {
}


