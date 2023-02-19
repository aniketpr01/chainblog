import { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import Link from 'next/link';

export default function Upload(){
    const[files,setFile] = useState([])
    const [filename,setfilename] = useState('')
    const [url,setURL] = useState('')
    const [generatedurl,setGenertedurl] = useState('')
    const [cid,setCid] = useState('')
    const[token,setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU1NzIyNzNFMkUyOTJDMzVGMGVCRDgyQjhDZEM1MTE5N0M3ODQ0ODUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYwMTc1NDMxNjQsIm5hbWUiOiJmaXJzdCJ9.rdkBSEp2vZs3W_9mj7eZaDJqjizOwbq3nlsGr-_sUXM')
    const handlesubmit = async(e)=>{
        e.preventDefault()
        const client = new Web3Storage({token})
        const getcid = await client.put(files,{
        })
        setCid(getcid)
        const generatedurl = `https://dweb.link/ipfs/${getcid}`
        setGenertedurl(generatedurl)
        console.log(generatedurl)
        const fetchimgUrl = `https://${getcid}.ipfs.dweb.link/${filename}`
        setURL(fetchimgUrl)
    }

    // const handleFetchImgClick = async(e) => {
    //     e.preventDefault()
    //     const fetchimgUrl = `https://${cid}.ipfs.dweb.link/${filename}`
    //     setURL(fetchimgUrl)
    // }

    // if (!{cid}){
    //     handleFetchImgClick()
    // }
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <input type='file' id='filepicker'  name='fileList' onChange={e => 
                        {
                            setFile(e.target.files)
                            setfilename(e.target.files[0].name)
                            
                        }
                        } multiple required />
                <button>Uploadimage</button>
            
                {/* <button onClick={handleFetchImgClick}>Fetch Image</button> */}            
                
            </form>
            <img src={url} alt="txt" />
            <button className='modal-submit link-text'>
                {/* <Link href="/postDetail">Back</Link> */}
            </button>
        </div>
        

    )
}