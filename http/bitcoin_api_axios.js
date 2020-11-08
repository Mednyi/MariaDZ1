'use strict'
const bitcoinAPI = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/currentprice/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
// If you wish to send POST
// await bitcoinAPI.post(<url>,<body>)
const getData = async () => {
    try {
        let res = await bitcoinAPI.get('/RUB');
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}
getData();
const timer = setInterval(getData, 1000 * 60);
