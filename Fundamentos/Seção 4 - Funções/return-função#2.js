// Retornar um função a partir de outra (Encadeamento de funcs anônimas)
function returnFunc () {
    return function () {
        return function () {
            return 'RVCA';
        }
    }
}

console.log(returnFunc()()());