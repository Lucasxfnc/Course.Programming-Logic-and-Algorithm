let arvoreBin = {
    left: {
        left: undefined,
        right: {
            value: 3
        },
        value: 7
    },
    right: undefined,
    value: 21
}

function preOrder(tree) {

    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}


console.log('preOrder:');
preOrder(arvoreBin);