import axios from 'axios';
import { useState, useEffect, Navegar } from 'react';
import {format} from 'date-fns';
import {useNavigate, useParams} from 'react-router-dom';

const uploads= require.context('../../../uploads/videos', true);

const CompShowIndex = () =>{
    // const URI = 'http://192.168.5.43:8000/files';
    const URI = 'http://localhost:8000/file';
    const navigate = useNavigate();
    const [files, setFile] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        getFile();
    }, [])

    //procedimiento para mostrar todos los videos
   
    const getFile = async() =>{
        const res = await axios.get(URI);
        setFile(res.data);
    }

    const playVideo = () =>{
        const res = axios.get(URI + id);
       
    }

    return(
        <div className='container' >
            <h1 className='mt-3' >Videos</h1>
            <main className='d-flex '>
                <section className='d-flex flex-wrap container' >
                    <form className = 'd-flex'>
                        {files.map ( (file) => (
                            <div className="card cardStyle  mx-1 my-2  shadow mb-5 bg-body rounded-3" key={file.id}>
                                <video controls width="400" data-video muted className='m-0 p-0 rounded-top' controlslist="nodownload" autoPlay>
                                <source src={uploads(`./${file.archivo}`)+'#t=12,25'} type = 'video/mp4'/>
                                </video>
                                <div className='text-start p-2'>
                                    <h5 className='text-capitalize m-0'>{file.nombre}</h5>
                                    <p className='fs-6 m-0'>{file.descripcion}</p> 
                                    <div className='btn-video'>
                                        <input className='rounded-pill border border-success fst-italic btn btn-danger btn-sm mt-2' width="22" value='Ver video' type='submit' id='btn-verVideo' key={file.id} onClick={()=>navigate("/play"+ playVideo)}/>
                                    </div>
                                    
                                    <h5 className='fs-6 px-0 m-0'>{file.updatedAt}</h5>
                                </div>
                            </div>
                        ))} 
                    </form>
                </section>
            </main>
        </div>
    )
}
export default CompShowIndex;