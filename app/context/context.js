import { createContext, useState, useEffect, useContext } from 'react'
import { blogInstance } from '../utils/instances'
import Web3 from 'web3'

import { createClient } from 'urql'

const APIURL =
  'https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5'

const tokensQuery = `
  query {
    postAddeds(first: 5) {
      id
      postId
      author
      imageUrl
      imageName
      assetId
      playbackId
      title
      text
      blockTimestamp
    }
  }
`

const client = createClient({
  url: APIURL,
})

export const appContext = createContext()

let ethereum = null

if (typeof window !== 'undefined') {
  ethereum = window.ethereum
}

export const AppProvider = ({ children }) => {
  const [contractInstance, setContractInstance] = useState(null)
  const [web3Instance, setWeb3Instance] = useState(null)
  const [currentWalletAddress, setCurrentWalletAddress] = useState(null)
  const [blogAddresses, setBlogAddresses] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!ethereum) return

    const createWeb3Client = (async () => {
      const web3 = new Web3(window.ethereum)
      setWeb3Instance(web3)

      const accounts = await web3.eth.getAccounts()
      console.log(accounts)
      setCurrentWalletAddress(accounts[0])

      const contract = await blogInstance(web3)
      setContractInstance(contract)

      // getUploadedPostAddresses(contract);
    })()
  }, [ethereum])

  useEffect(() => {
    getPostContent()
    greet()
  }, [blogAddresses])

  const greet = async (contract = contractInstance) => {
    try {
      const addresses = await contract.methods.greet().call()

      // post(addresses)
      console.log(addresses)
    } catch (error) {
      console.error(error)
    }
  }

  const getUploadedPostAddresses = async (contract = contractInstance) => {
    try {
      const addresses = await contract.methods.getMyPosts().call()

      post(addresses)
    } catch (error) {
      console.error(error)
    }
  }

  const getPostContent = async () => {
    const fetchedPosts = await client.query(tokensQuery).toPromise()
    console.log('Fetching posts')
    console.log(fetchedPosts)
    console.log('Fetched posts')

    setPosts(fetchedPosts)
  }

  const createBlog = async (
    _imageUrl,
    _imageName,
    _assetId,
    _playbackId,
    _title,
    _text,
    _tags
  ) => {
    if (!currentWalletAddress) return

    try {
      await blogInstance(web3Instance)
        .methods.post(
          _imageUrl,
          _imageName,
          _assetId,
          _playbackId,
          _title,
          _text,
          _tags
        )
        .send({
          from: currentWalletAddress,
          value: Web3.utils.toWei('0.0001', 'ether'),
        })
    } catch (error) {
      console.error(error)
    }
  }

  const likePost = async (postIndex) => {
    if (!currentWalletAddress) return

    try {
      await blogInstance(web3Instance, blogAddresses[postIndex])
        .methods.likePost()
        .send({ from: currentWalletAddress })

      getPostContent()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <appContext.Provider
      value={{
        greet,
        posts,
        currentWalletAddress,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(appContext)
}