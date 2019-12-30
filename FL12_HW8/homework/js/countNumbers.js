function countNumbers(number) {
    for (let i = 1; i < arguments.length; i++) {
        arguments[i + 1](result) {
            arguments[i](number) {
                console.log(result)
                return result
            }
        }
    }
    
}
function addOne (x) {
    return x + 1;
}

counterNumbers(3,addOne, addOne, addOne)