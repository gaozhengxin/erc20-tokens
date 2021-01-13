/*module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 627,
      gas: 8000000,
      gasPrice: 1000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.4.24",
      evmVersion: "byzantium",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500,
        }
      }
    }
  }
}*/

// HT testnet
/*module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 256,
      gas: 5000000,
      gasPrice: 2000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.4.24",
      evmVersion: "byzantium",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    }
  }
}*/

// OK
module.exports = {

  networks: {
    development: {
      host: "13.230.73.12",
      port: 8545,
      network_id: 2,
      gas: 5000000,
      gasPrice: 2000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.4.24",
      evmVersion: "byzantium",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    }
  }
}

/*module.exports = {

  networks: {
    development: {
      host: "5.189.139.168",
      port: 8018,
      network_id: 4,
      gas: 5000000,
      gasPrice: 1000000000,
    },
  },

  compilers: {
    solc: {
      version: "0.4.24",
      evmVersion: "byzantium",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500,
        }
      }
    }
  }
}*/
