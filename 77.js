// 1 Adding cookie
document.cookie = "name=Amrit"

// 2 encodeURIcomponent  | for storing symbols as key or value we change them to encoded code

let key = prompt('Enter key')
let value = prompt('Enter Value')

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`



// 3 use decodeURIcomponent to decode it

console.log(decodeURIComponent(document.cookie))


// cannot set multiple cookies using ; in one string

// 4 options in cookie

document.cookie = 'password=hullululu; path= /a; expires= Mon, 30 August 2024 03:18:22 GMT '


//                                                 ^expires -> cookie will expire on this time        
//                                       ^path -> cookie is available only on this path


// 5 limit of size of one cookie is 4KB and number of cookies = 20(browser dependent)