'use strict'
const bitcoinAPI = axios.create({
    baseURL: 'https://api.coindesk.com/v1/bpi/currentprice/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});
// If you wish to send POST
// await bitcoinAPI.post(<url>,<body>)
const history = []
let counter = 0;
const getData = async () => {
    try {
        let res = await bitcoinAPI.get('/RUB');
        const svgCanvas = document.getElementsByTagName('svg')[0];
        svgCanvas.setAttribute('viewBox', `0 0 ${100*window.innerWidth} 50000`)
        const newMarker = document.createElementNS('http://www.w3.org/2000/svg','circle');
        const calcedBitcoin = {
            cx: (counter+1)*2000,
            cy: 50000 - Math.round(res.data.bpi.RUB.rate_float / 100),
            r: 350,
        }
        newMarker.setAttribute('cx', `${calcedBitcoin.cx}`);
        newMarker.setAttribute('cy' , `${calcedBitcoin.cy}`);
        newMarker.setAttribute('r', `${calcedBitcoin.r}`);
        newMarker.setAttribute('fill', 'green');
        svgCanvas.appendChild(newMarker);
        if (counter > 0) {
            const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            newLine.setAttribute('x1', history[counter - 1].cx);
            newLine.setAttribute('y1', history[counter - 1].cy);
            newLine.setAttribute('x2', calcedBitcoin.cx);
            newLine.setAttribute('y2', calcedBitcoin.cy);
            newLine.setAttribute('stroke-width', 250);
            newLine.setAttribute('stroke', 'green');
            svgCanvas.appendChild(newLine);
        }
        history.push(calcedBitcoin)
        counter++;
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}
let timer
// Start long polling
const startPolling = () => {
    getData();
    timer = setInterval(getData, 1000 * 60);
    return timer;
}
const stopPolling = () => {
    clearInterval(timer);
    timer.stop();
}
startPolling();
