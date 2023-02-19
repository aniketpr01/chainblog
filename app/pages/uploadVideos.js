import { useCreateAsset } from "@livepeer/react";
import { useState } from "react";

export default function uploadAsset(){

    //create states for inputs to the asset 
    const [name, setName] = useState("");
    const [video, setVideo] =  useState("");

    //using create asset to get the details of the video uploadting on click og create asset
    const {
        mutate : uploadAsset,
        data : asset,
        status,
        progress, error
    } = useCreateAsset(
        video? {
            sources : [{
                name,
                file : video
            }]
        }
        : null
    );

    // const handleUpload = async() => {
    //     console.log(name,video);
    //     uploadAsset();
    // };

    return (
        <div>
            {/* <input type={"text"} placeholder={"Enter video name"} 
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <input
                type={"file"} accept={"video/*"} style={{marginLeft:10,}}
                onChange={(e)=>{
                    const file = e.target.files[0];
                    setVideo(file);
                }}
            />
            <button style={{padding:10,}} onClick={handleUpload}>Upload Video</button> */}
        </div>
      )
}