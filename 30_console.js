console.clear()                   // clears console

console.assert(7>4)
console.assert(4>7)                // produces error if false

console.log('Logged message')
console.info('This is information')
console.warn('This is a warning')
console.error('This is an error')

const obj = {a:1,b:2,c:3}
console.table(obj)                  // very useful

console.time('starttag1')            // Tells the time taken from time to timeEnd for the same tag
console.timeEnd('starttag1')

console.dir('HTML Element')         // used with DOM, shows html element with its properties   