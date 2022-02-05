from web3 import Web3
import json

#
# -- Define Provider & Variables --
#
# Provider
infura_url = 'http://185.189.157.205:9933'
web3 = Web3(Web3.HTTPProvider(infura_url))

# Variables
contract_address = '0x38762083399e60af42e6fD694e7d430a170c9Caf'

account_from = {
    'private_key': '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133',
    'address': '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac',
}

#
#  -- Call Function --
#
print(f'Making a call to contract at address: { contract_address }')
compiled_contract_path = '../artifacts/contracts/Box.sol/Box.json'

with open(compiled_contract_path) as file:
    contract_json = json.load(file)  # load contract info as JSON
    contract_abi = contract_json['abi']  # fetch contract's abi - necessary to call its functions

# Fetch deployed contract reference
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

number = contract.functions.retrieve().call()

print(f'The current number stored is: { number } ')

print(web3.eth.getTransactionCount(account_from['address']))


# Build Increment Tx
increment_tx = contract.functions.store(1).buildTransaction(
    {
        'from': account_from['address'],
        'nonce': web3.eth.getTransactionCount(account_from['address']),
    }
)

# Sign Tx with PK
tx_create = web3.eth.account.signTransaction(increment_tx, account_from['private_key'])

# Send Tx and Wait for Receipt
tx_hash = web3.eth.sendRawTransaction(tx_create.rawTransaction)
tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)

print(f'Tx successful with hash: { tx_receipt.transactionHash.hex() }')