let arvoreBin = {
    left: {
        left: {
            value: 23
        },
        right: undefined,

        value: 24
    },
    right: {
        left: {
            value: 26
        },
        right: {
            left: undefined,
            right: {
                value: 29
            },
            value: 28
        },
        value: 27
    }, 
    value: 25
}

function inOrder(tree) {
    tree.left && inOrder(tree.left);
  
    console.log(tree.value);
  
    tree.right && inOrder(tree.right);
}

console.log('inOrder:');
  
inOrder(arvoreBin);