import Link from 'next/link';
import { Player } from '@livepeer/react';
import { createClient } from 'urql';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// import { Posts } from '../data/Post.seed';
// @refresh reset


const APIURL = "https://api.studio.thegraph.com/query/42411/blogging-dapp/v0.0.5"

const query = `
query {
  postAddeds(where: {postId: 2}) {
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
  url : APIURL
})

export default function FirstPost() {
  const [postAddeds, setpostAddeds] = useState([])
  const router = useRouter();
  const postId = router.query;
  const query2 = `
  query {
  postAddeds(where: {postId: ${postId.ID}}) {
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
  // console.log("THIS IS POSTID FROM POST DETAILS PAGE", postId)
  useEffect(() => {
    fetchData()
  }, [])
  
  async function fetchData(){
    const response = await client.query(query2).toPromise()
    console.log('response : ', response)
    //setaddedVoters(response.data.addedVoters)
    setpostAddeds(response.data.postAddeds)
    console.log("Author name", response.data.postAddeds[0]["author"] )
  }

  return (
    
    <>
      {/* {console.log("Author name", postAddeds[0]["author"])}
      {postAddeds[0]["author"]} */}
      {
        postAddeds.map((posts, index) => (
          <div key={index}>
            {/* <a href={posts.author} target="_blank">Post Author</a> */}
            <div className='card-intro'>Coming from
            <span className='text-weight-500 grey-tab pr-5'>{posts.author}</span>
            </div>
            <div>Post Id: {postId.ID}</div>
            <div className='postHeader'>{posts.title}</div>
            <div className='description'>{posts.text}</div>
            <img src={`https://${posts.imageUrl}.ipfs.dweb.link/${posts.imageName}`} alt="txt" />
            <Player
                playbackId={posts.playbackId}
            />
            </div>
                
              ))

            }
      <div className='card d-flex'>
      <div className='card-body'>
          {/* <div className='card-intro'>Coming from
            <span className='text-weight-500 grey-tab pr-5'>author</span>
        </div> */}
        <div className='card-intro mt-2 '>
          <span className='text-weight-medium grey-tab pr-5 text-9'>
            {/* {Posts.postDate} */}
          </span>
        </div>

        <div className='card-content mt-15'>
            {/* <div className='postHeader'>title</div> */}
            {/* <div className='description'>text</div> */}
        </div>
        <div className='tags mt-9'>
          <div className='ml-5 inline popular-tag'>
            #<span className='hash-tag'>tags required here</span>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer__button-group'>
            {/* <div
              className='button-wrap--medium reaction-icon'
              onClick={handleLikeClick}
            >
              {liked ? (
                <AiFillHeart className='red-heart' />
              ) : (
                <AiOutlineHeart />
              )}
              <span className='button-count'>{likes}</span>
            </div> */}
            <div>
              {/* <FaRegComment />
              <span className='button-count'>
                {Math.floor(Math.random() * 200)}
              </span> */}
                {/* <Link to="/postDetail">post detail</Link> */}
                 {/* <img src={`https://${postAddeds[0]["imageUrl"]}.ipfs.dweb.link/${postAddeds[0]["imageName"]}`} alt="txt" />
              <Player
                playbackId={postAddeds[0]["playbackId"]}
            />    */}
              {/* <button className='modal-submit link-text'>
                <Link href="/livepeer">Play Video</Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      
    </>
  );
}