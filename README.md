# Daccredible

Prove your expertise on the Metaverse

## Contract Address Tracker

Sample 1 Kovan:
> router: 0xefDc8C07d6D4C5C0A9Ce90dd40139299A3Da47f7
> factory: 0x5b786Eb7E275A6FeC3EF1B3C237276c0e9c40254

Sample 2: Kovan
> router: 0x195c499669Ed02E9313e94836A2dCf9500322532

Sample Payload `createContractForClient`

```json

{
  "blockHash": "0xe51e83d644606f65cccf2a2bb159966471ba7842956f98f524327db991151349",
  "blockNumber": 28604090,
  "contractAddress": null,
  "cumulativeGasUsed": 3350533,
  "effectiveGasPrice": "0x9502f908",
  "from": "0xb72430b16657a7463a9dbb5d4645b3dc539b6e6b",
  "gasUsed": 2674297,
  "logsBloom": "0x00000000001000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000001000000000010000000000000000200000000020000000000000000000800000000000000800000000000000000400000000000000000000000000000000000000000000000000000000001000000000002000000000800000000000000000400000000000000000000002000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000008000000000000000000000002000000000000000000",
  "status": true,
  "to": "0x195c499669ed02e9313e94836a2dcf9500322532",
  "transactionHash": "0xf2ff6e6ea6e145bcce60025b83d55277726637dee275719a84b20b1400893d25",
  "transactionIndex": 5,
  "type": "0x2",
  "events": {
    "0": {
      "address": "0x09B18Dd3dd4527B37204BE1F967eb9BAD6b58CFc",
      "blockHash": "0xe51e83d644606f65cccf2a2bb159966471ba7842956f98f524327db991151349",
      "blockNumber": 28604090,
      "logIndex": 9,
      "removed": false,
      "transactionHash": "0xf2ff6e6ea6e145bcce60025b83d55277726637dee275719a84b20b1400893d25",
      "transactionIndex": 5,
      "transactionLogIndex": "0x0",
      "type": "mined",
      "id": "log_53c72b20",
      "returnValues": {},
      "signature": null,
      "raw": {
        "data": "0x",
        "topics": [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000195c499669ed02e9313e94836a2dcf9500322532"
        ]
      }
    },
    "NewContractCreated": {
      "address": "0x195c499669Ed02E9313e94836A2dCf9500322532",
      "blockHash": "0xe51e83d644606f65cccf2a2bb159966471ba7842956f98f524327db991151349",
      "blockNumber": 28604090,
      "logIndex": 10,
      "removed": false,
      "transactionHash": "0xf2ff6e6ea6e145bcce60025b83d55277726637dee275719a84b20b1400893d25",
      "transactionIndex": 5,
      "transactionLogIndex": "0x1",
      "type": "mined",
      "id": "log_8329d127",
      "returnValues": {
        "0": "0x09B18Dd3dd4527B37204BE1F967eb9BAD6b58CFc",
        "1": "1638419536",
        "contractAddress": "0x09B18Dd3dd4527B37204BE1F967eb9BAD6b58CFc",
        "createdAt": "1638419536"
      },
      "event": "NewContractCreated",
      "signature": "0x1118269319064b841205f4635dfcac2dda808dedaadedbbdd30d6b0077f3d1ae",
      "raw": {
        "data": "0x00000000000000000000000009b18dd3dd4527b37204be1f967eb9bad6b58cfc0000000000000000000000000000000000000000000000000000000061a84c50",
        "topics": [
          "0x1118269319064b841205f4635dfcac2dda808dedaadedbbdd30d6b0077f3d1ae"
        ]
      }
    }
  }
  ```