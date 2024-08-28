// cookies are small strings stored by wesbites on browser
// do alert(document.cookie) in console of any website to see cookies as key-value pairs seperated by a semicolon


/*
Adding cookie

document.cookie = "key=value"

{will add cookie and never remove any}
{will be added permanently to the webserver}
{if has already this key will update the value}

*/

document.cookie = 'creator=Amrit'
document.cookie = 'host=web1123'

let cookies = document.cookie.split(';')
console.log(cookies)

// try turning off and relaunching 

// Very useful for storing data of a specific client