// Retornar um função a partir de outra
function returnFunc () {
    let aux = new Date();
    let hr = aux.getHours();
    function saudação() {
        return hr < 12 ? "Bom Dia!" : hr >= 12 && hr < 18 ? "Boa Tarde!" : "Boa Noite!";
    }
    return saudação;
}
const aux = returnFunc();
console.log(aux());
console.log(returnFunc()());

