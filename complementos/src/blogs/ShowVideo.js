import axios from 'axios';
import { useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';
const uploads= require.context('../../../uploads/videos', true);



const CompShowVideo = () =>{

    const URI = 'http://localhost:8000/file/';
    const {id} = useParams();
    const [files, setFile] = useState([]);
    
    useEffect(()=>{
        getFile();
    }, [])

    const getFile = async() =>{
        const res = await axios.get(URI)
        setFile(res.data);
    }


    return(

        <main>
            <div>
            {files.map ( (file) => (
                <video controls width="400" data-video muted className='m-0 p-0 rounded-top' controlslist="nodownload" autoPlay>
                <source src={uploads(`./${file.archivo}`)} type = 'video/mp4'/>
                </video>
            ))} 
            </div>
        </main>
        
    );


};
export default CompShowVideo;
