'use strict';
// Fetch
// Create fetch request
// By default fetch sends GET request
// You can specify request method if needed
// let res = await fetch(url, {
//      method: 'POST',
//      body: <data[JSON, string]>,
//      headers: {
//          'Content-Type': 'application/json'
//      }
// })
const path = 'https://api.coindesk.com/v1/bpi/currentprice/RUB.json';
const getData = async () => {
    try {
        let res = await fetch(path);
        // Transform request data to needed format
        // res.text()
        // res.json()
        // res.blob()
        // res.arrayBuffer()
        console.log(await res.json());
    } catch (e) {
        console.log(e);
    }
}
getData();
