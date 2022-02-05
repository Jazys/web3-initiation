from web3 import Web3

infura_url = 'http://185.189.157.205:9933'
web3 = Web3(Web3.HTTPProvider(infura_url))



isConnected = web3.isConnected()
blocknumber = web3.eth.blockNumber

balance = web3.eth.getBalance('0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac')

print('Connected: ', isConnected, 'BlockNumber: ', blocknumber, 'Account Balance: ', (web3.fromWei(balance, 'Ether')))


account_1 = '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac'
private_key1 = '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133'
account_2 = '0x7DAE9660463e2673CcFC397225D7BD9af7CC2A70'

#
#  -- Balance Call Function --
#
balance_from = web3.fromWei(web3.eth.getBalance(account_1), "ether")
balance_to = web3.fromWei(web3.eth.getBalance(account_2), "ether")

print(f"The balance of { account_1 } is: { balance_from } ETH")
print(f"The balance of { account_2 } is: { balance_to } ETH")

#
#  -- Transaction Call Function --
#

#get the nonce.  Prevents one from sending the transaction twice
nonce = web3.eth.getTransactionCount(account_1)

#build a transaction in a dictionary
tx = {
    'nonce': nonce,
    'to': account_2,
    'value': web3.toWei(1, 'ether'),
    'gas': 2000000,
    'gasPrice': web3.toWei('50', 'gwei')
}

#sign the transaction
signed_tx = web3.eth.account.sign_transaction(tx, private_key1)

#send transaction
tx_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)

#get transaction hash
print(web3.toHex(tx_hash))

tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)

print(f"Transaction successful with hash: { tx_receipt.transactionHash.hex() }")