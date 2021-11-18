export const IPFREE_CONTRACT = '0x03129760C8fDcf28C52E9aEde087d31236D53380';
export const IPFREE_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "ChainlinkRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "prizename",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "videoId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dateDrawn",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "winner",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "youtubeId",
          "type": "string"
        }
      ],
      "name": "PrizeDrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dateSubscribed",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "subscriber",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "plan",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "Subscribed",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "randomness",
          "type": "uint256"
        }
      ],
      "name": "rawFulfillRandomness",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_requestId",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "author",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "authorId",
          "type": "string"
        }
      ],
      "name": "fulfill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "plan",
          "type": "uint256"
        }
      ],
      "name": "subscribe",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "videoId",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "prizeName",
          "type": "string"
        }
      ],
      "name": "drawPrize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "addPlan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "plan",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "editPlan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawLink",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawMatic",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];