const Web3 = require('web3');
//const web3 = new Web3('ws://185.189.156.201:9944');
const web3 = new Web3('wss://moon-ws.nuage.omvpb.ovh');

web3.eth.subscribe('pendingTransactions')
.on("connected", function (subscriptionId) {
    console.log(subscriptionId);
})
.on("data", function (log) {
    console.log(log);
});