function withReturn() {
    return 7;
}

let valuee = withReturn();
console.log(valuee);

function textOrNumber(returnText) {  
    return returnText ? "text!" : 21;

    // if (returnText) {
    //  return "text!";
    // } else {
    //    return 21;
    // }

}
let returnn =  textOrNumber(true);
console.log(returnn);

console.log(textOrNumber(false));
