const Web3 = require('web3');
const web3 = new Web3('ws://127.0.0.1:9944');

web3.eth.subscribe('pendingTransactions')
.on("connected", function (subscriptionId) {
    console.log(subscriptionId);
})
.on("data", function (log) {
    console.log(log);
});