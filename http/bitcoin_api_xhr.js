'use strict';
// XMLHttpRequest
// Создать объект класа XMLHttpRequest
let xhr = new XMLHttpRequest();

// Initialize request
// xhr.open(<request type>, <URL>, [async and other options])
const path = 'https://api.coindesk.com/v1/bpi/currentprice/RUB.json';

// If you wish to add some quesry params you can use
// 1. Create URL object
//    const url = new URL(<basepath>)
// 2. Set query params
//    url.searchParams.set('name', 'dove', ...)
// 3. Send xhr request with urlencoded query params
//    xhr.open('GET', url)
xhr.open('GET', path);

// xhr set response type
// xhr.responseType = 'json'

// Send XMLHttpRequest
// xhr.send(<body>)
xhr.send()

// xhr.onload is called when response has arrived
xhr.onload = () => {
    console.log('Status: ',xhr.status)
    console.log('Response: ',xhr.response)
}

//xhr.onerror is called when there's any error
xhr.onerror = () => {
    console.log('ERROR:')
    console.log('Status: ',xhr.status)
    console.log('Response: ',xhr.response)
}

