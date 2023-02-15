import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// const URI = 'http://192.168.5.43:8000/file/';
const URI = 'http://localhost:8000/file/';


const CompShowFile = (props) =>{

    


    const [files, setFile] = useState([])
    useEffect(()=>{
        getFile();
    }, [])

    //procedimiento para mostrar todos los videos
   
    const getFile = async() =>{
        const res = await axios.get(URI);
        setFile(res.data);
    }
    
    // procedimiento para eliminar un video
    const deleteFile = async(id) =>{
       await axios.delete(`${URI}${id}`);
        getFile();
    }

    return(
        <div className='container'>
            <h1 className='mt-3'>Lista de Registro</h1>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2 d-md-flex justify-content-md-left'>
                        <a href='localhost:8000/create' className='btn btn-primary mt-2 mb-2'><i className="fa-sharp fa-solid fa-plus"></i>Nuevo Registro</a>  
                    </div>
                        
                <table className="table">
                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Categoría</th>
                            <th>Archivo</th>
                            <th>Creado</th>
                            <th>Modificado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map ( (file) => (
                            <tr key={file.id}>
                                <td>{file.id}</td>
                                <td>{file.nombre}</td>
                                <td>{file.descripcion}</td>
                                <td>{file.id_categoria}</td>
                                <td>{file.archivo}</td>
                                <td>{file.createdAt}</td>
                                <td>{file.updatedAt}</td>
                                <td>
                                    {<Link to={`/edit/${file.id}`} className='btn btn-info me-2' ><i className="fa-solid fa-pen-to-square"></i> Edit</Link>}
                                    <button onClick={()=>deleteFile(file.id)} className='btn btn-danger ' style={{width: 90}}><i className="fa-solid fa-trash"></i> Delete</button>
                                </td>
                            </tr>
                            )) } 
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )

}
export default CompShowFile;