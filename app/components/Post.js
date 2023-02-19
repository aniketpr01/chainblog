import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { useAppContext } from '../context/context'
import { Posts } from '../data/Post.seed'
import { createClient } from 'urql';
import Link from 'next/link'
// import { Link } from 'react-router-dom';

const APIURL = "https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5"

const query = `
query {
  postAddeds(first: 20) {
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
const querypostData = `
query {
  postAddeds(where: {postId: ID}) {
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
  url : APIURL
})

const Post = ({
  // postId,
  // author,
  // text,
  // tags,
  // value,
  // imageUrl,
  // imageName,
  // assetId,
  // playbackId,
  // title,
}) => {
  // const { likePost, currentWalletAddress } = useAppContext()
  // const [liked, setLiked] = useState(likers.includes(currentWalletAddress))

  // const postDate = new Date(parseInt(timestamp)).toLocaleString('en-US', {
  //   month: 'short',
  //   day: 'numeric',
  // })

  // const handleLikeClick = async () => {
  //   await likePost(index)

  //   setLiked(true)
  // }

  const [postAddeds, setpostAddeds] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  
  async function fetchData() {
    const response = await client.query(query).toPromise()
    console.log('response : ', response)
    //setaddedVoters(response.data.addedVoters)
    setpostAddeds(response.data.postAddeds)
    console.log("Author name", response.data.postAddeds[0]["author"])
    console.log("Posts: ", postAddeds)
  }
  // console.log("POSTID")
  // postAddeds.map((post, index) => { console.log(post.postId) })
  
  // async function fetchpostId() {
  //   const response = await client.query(querypostData).toPromise()
  //     return response
  //   }
  return (
    <>
      {
      postAddeds.map((posts, index) => (
        <div key={posts.postId}>
          <div className='card d-flex'>
            <div className='card-body'>
              <div className='card-intro'>
                { <span className='text-weight-500 grey-tab pr-5'>{posts.author}</span> }
              </div>
              <div className='card-content mt-15'>
                <div className='postHeader'>{posts.title}</div>
                <div className='description'>{posts.text}</div>
              </div>
              <button className='modal-submit link-text' /*onClick={fetchpostId({posts.postId})}*/>
                <Link href={{ pathname: '/postDetail', query: {ID: posts.postId}  }}>Read more</Link>
              </button>
            </div>
          </div>

        </div>
    //       {/* <a href={posts.author} target="_blank">Post Author</a> */}
    //       <div className='card-intro'>Coming from
    //       <span className='text-weight-500 grey-tab pr-5'>{posts.author}</span>
    //       </div>
    //       <div>Post Id:  {posts.postId}</div>
    //       <div className='postHeader'>{posts.title}</div>
    //       <div className='description'>{posts.text}</div>
    //       <img src={`https://${posts.imageUrl}.ipfs.dweb.link/${posts.imageName}`} alt="txt" />
    //       <Player
    //           playbackId={posts.playbackId}
    //       />
    //       </div>
              
            ))
     }
 
  
    </>
  )
}

export default Post
