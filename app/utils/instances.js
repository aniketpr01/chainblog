// import postAbi from './Post.json'
// import factoryAbi from './BlogFactory.json'
//INFURA_API_KEY="652de86174b6414892b667ff28b3b0d8"
import postAbi from './Blog.json'

// const contractAddress = '0x5C61734441fe9F06Ffc7BE970D4a766B79bFcF85'
const contractAddress = '0x8605e851504D7a1130c9C3D16a15449E19568E3B'

// const blogInstance = (web3Instance, address) => {
//   return new web3Instance.eth.Contract(postAbi.abi, address)
// }

// const factoryInstance = web3Instance => {
//   return new web3Instance.eth.Contract(factoryAbi.abi, contractAddress)
// }

const blogInstance = (web3Instance) => {
  return new web3Instance.eth.Contract(postAbi.abi, contractAddress)
}

export { blogInstance }
