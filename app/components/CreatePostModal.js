import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAppContext } from '../context/context'
import { Web3Storage } from 'web3.storage'
import Link from 'next/link'
import { useCreateAsset } from '@livepeer/react'

// import { uploadAsset } from '../pages/uploadVideos';

// let ethereum = null

// if (typeof window !== 'undefined') {
//   ethereum = window.ethereum
// }

// const createWeb3Client = (async () => {
//       const web3 = new Web3(window.ethereum)
//       setWeb3Instance(web3)

//       const accounts = await web3.eth.getAccounts()
//       console.log(accounts)
//       setCurrentWalletAddress(accounts[0])

//       const contract = await blogInstance(web3)
//       setContractInstance(contract)

//       // getUploadedPostAddresses(contract);
// })

// createWeb3Client();
// const addresses = await contract.methods.postData(imageUrl: _imageUrl, imageName: _imageName, title: _title,
// text: _text)

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [error, setError] = useState('')
  const [files, setFile] = useState([])
  const [filename, setfilename] = useState('')
  const [url, setURL] = useState('')
  const [generatedurl, setGenertedurl] = useState('')
  const [cid, setCid] = useState('')
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU1NzIyNzNFMkUyOTJDMzVGMGVCRDgyQjhDZEM1MTE5N0M3ODQ0ODUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYwMTc1NDMxNjQsIm5hbWUiOiJmaXJzdCJ9.rdkBSEp2vZs3W_9mj7eZaDJqjizOwbq3nlsGr-_sUXM'
  )
  const router = useRouter()
  const [name, setName] = useState('')
  const [video, setVideo] = useState('')
  const { createBlog } = useAppContext()

  const handlesubmit = async (e) => {
    if (!tag || !title || !blogContent) {
      setError('Please fill in both fields')
      return
    }
    e.preventDefault()
    const client = new Web3Storage({ token })
    const getcid = await client.put(files, {})
    setCid(getcid)
    const generatedurl = `https://dweb.link/ipfs/${getcid}`
    setGenertedurl(getcid)
    const fetchimgUrl = `https://${getcid}.ipfs.dweb.link/${filename}`
    setURL(fetchimgUrl)

    //   useCreateAsset(
    //     video? {
    //         sources : [{
    //             name
    //             file : video
    //         }]
    //     }
    //     : null
    // );
    console.log('testing')
    // console.log(name, video);
    console.log(fetchimgUrl)
    console.log(filename)

    console.log('before call')
    await createBlog(getcid, filename, name, video, title, blogContent, [tag])
    console.log('after call')
  }

  // const handleUpload = async() => {
  //   console.log(name,video);
  //   uploadAsset();
  // };
  // const createBlog = async (title, tag, blogContent) => {}
  // const { createBlog } = useAppContext()

  // const handleSubmit = async () => {
  //   if (!tag || !title || !blogContent) {
  //     setError('Please fill in both fields')
  //     return
  //   }

  //   await createBlog(title, tag, blogContent)

  //   setTag('')
  //   setTitle('')
  //   setBlogContent('')

  //   router.push('/')
  // }

  return (
    <div className='mint-modal-wrapper'>
      <span className='error'>{error}</span>
      <div className='modal-title'>Add a new Post</div>
      <div className='modal-field'>
        <div className='modal-property'>Title</div>
        <input
          type='text'
          className='modal-input'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
            setError('')
          }}
        />
      </div>
      <div className='modal-field'>
        <div className='modal-property'>Tag</div>
        <input
          type='text'
          className='modal-input'
          value={tag}
          onChange={(event) => {
            setTag(event.target.value)
            setError('')
          }}
        />
      </div>
      <div className='modal-field'>
        <div className='modal-property'>Post Content</div>
        <textarea
          type='text'
          rows='16'
          cols='40'
          className='modal-input'
          value={blogContent}
          onChange={(event) => {
            setBlogContent(event.target.value)
            setError('')
          }}
        />
        Select Image
        <input
          type='file'
          id='filepicker'
          name='fileList'
          onChange={(e) => {
            setFile(e.target.files)
            setfilename(e.target.files[0].name)
          }}
          multiple
          required
        />
        {/* <button className='modal-submit link-text'>
          <Link href="/uploadVideos">Upload Video</Link>
        </button> */}
        {/* Select Video
          <input
                  id="image" type={"file"} accept={"video/*"} style={{marginLeft:10,}}
                  onChange={(e)=>{
                      const file = e.target.files[0];
                      setVideo(file);
                  }}
              />
         */}
        <button className='modal-submit' onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default CreatePost