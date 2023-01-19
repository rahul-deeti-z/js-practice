
function outsideFun(field) {
    return ((value) => {
        if(field == 'if') {
            console.debug('inside if')
            console.debug('value inside if block is', value)
        }
        else {
            console.debug('inside else')
            console.debug('value inside else block is', value)
        }
    })
}

let test = outsideFun('if')
test('abc')
// console.debug(test)

// this is what happening in the background
// for above scenario "field" is getting replaced with "if"
// test = (value) => {
//         if(field == 'if') {
//             console.debug('inside if')
//             console.debug('value inside if', value)
//         }
//         else {
//             console.debug('inside else')
//             console.debug('value inside else', value)
//         }
//     }


// test = outsideFun('else')
// test('abc')