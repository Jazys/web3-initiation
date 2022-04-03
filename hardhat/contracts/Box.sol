// contracts/Box.sol
pragma solidity ^0.8.1;

contract Box {
    uint256 private value;
    address owner;

    constructor() {
         owner = msg.sender;
    }

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function reset() public {     
        if (msg.sender == address(owner))
            value= 0;
            emit ValueChanged(value);

    }
}