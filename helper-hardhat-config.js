const { ethers } = require("hardhat");

const networkConfig = {
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    callbackGasLimit: "500000",
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  developmentChains,
  networkConfig,
};
