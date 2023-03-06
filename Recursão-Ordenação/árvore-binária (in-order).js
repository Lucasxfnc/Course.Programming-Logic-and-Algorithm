let arvoreBin = {
    left: {
        left: {
            value: 3
        },
        right: {
            value: 14
        },
        value: 7
    },
    right: {
        value: 77
    }, 
    value: 21
}

function inOrder(tree) {
    tree.left && inOrder(tree.left);
  
    console.log(tree.value);
  
    tree.right && inOrder(tree.right);
}

console.log('inOrder:');
  
inOrder(arvoreBin);