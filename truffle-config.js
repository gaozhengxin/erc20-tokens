module.exports = {

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
}
