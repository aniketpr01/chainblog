import { Player } from '@livepeer/react';
import Link from 'next/link';

//using playbackurl or ipfs hash
export default function playAsset(){

    return(
        <div style={{width:"50%"}}>
            <h2>Welcome to the player</h2>
            
            <Player
                playbackId={"3dbczre39cum99xc"}
            />
            <button className='modal-submit link-text'>
                <Link href="/postDetail">Back</Link>
            </button>
        </div>
    )

}