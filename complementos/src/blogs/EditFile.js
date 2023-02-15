import axios from "axios";
import { useState, useEffect } from 'react';
import {useNavigate, useParams, Link} from 'react-router-dom';

// const URI = 'http://192.168.5.43:8000/file/';
const URI = 'http://localhost:8000/file/';

const CompEditFile = () =>{

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [id_categoria, setCategoria] = useState('');
    const [archivo, setArchivo] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    
    const getFileId = async ()=>{
       const res = await axios.get(URI+id)
       setNombre(res.data.nombre);
       setDescripcion(res.data.descripcion);
       setCategoria(res.data.id_categoria);
       setArchivo(res.data.archivo);
    }

    useEffect(()=>{
        getFileId();
    }, []);
    
    const update = async(e)=>{
        e.preventDefault()
        await axios.put(URI+id,{
            nombre,
            descripcion, 
            id_categoria,
            archivo
        });
        
        navigate('/consultas');
    }
    
    return(
        <div className="container">
             <h1 className="mt-3">Modificar Registro</h1>
            <form className="mx-5 mt-5" onSubmit={update} action="/file" method="post" encType="multipart/form-data">
                <div className="my-4 input-group">
                    <label className="input-group-text">Nombre</label>   
                    <input 
                        value={nombre}
                        className="form-control" 
                        onChange={(e) => setNombre(e.target.value)} 
                        type= "text"
                        placeholder="Nombre del archivo"
                        id="nombre"
                    />
                </div>
                <div className="my-4 input-group">
                <label className="input-group-text">Descripción</label>
                    <textarea 
                        value={descripcion}
                        className="form-control" 
                        onChange={(e) => setDescripcion(e.target.value)} 
                        type= "text"
                        placeholder="Escriba una descripción del archivo aquí."  
                    />
                </div>
                <div className="my-4 input-group mb-3">
                    <label className="input-group-text" >Categoría</label>
                    <select value={id_categoria} className="form-select" onChange={(e) => setCategoria(e.target.value)} >
                        <option >-- Seleccione una Categoría --</option>
                        <option value="1">Película</option>
                        <option value="2">Serie</option>
                        <option value="3">Video</option>
                    </select>
                </div>
                <div className="my-4 input-group mb-3">
                    <label className="input-group-text">Archivo</label>
                    <input 
                        value={archivo}
                        className="form-control"  
                        type= "text"
                        onChange={(e) => setArchivo(e.target.value)} 
                        accept="video/mp4"
                        name="avatar"
                        typeof="file"
                        disabled
                        
                    />
                </div>
                <div className="App-marLeftbtn App-margRL d-md-flex justify-content-md-between mt-5">
                    <Link to="/consultas" className='btn btn-primary'>Retornar</Link>
                    <button className="btn btn-primary" type="submit" > Guardar</button> 
                </div>
            </form>
        </div>
    )



}

export default CompEditFile;