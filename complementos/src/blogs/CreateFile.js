// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



const CompCreateFile = () =>{
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [id_categoria, setCategoria] = useState('');
    const [archivo, setArchivo] = useState();
    
    return(
        <div className="container">
             <h1 className="mt-3">Nuevo Registros</h1>
            <form  action="/file" method="post" encType="multipart/form-data" id="form">
                <div className="mb-3 text-start App-margRL">
                    <label className="mb-2 px-2">Nombre</label>   
                    <input 
                        value={nombre}
                        className="form-control" 
                        onChange={(e) => setNombre(e.target.value)} 
                        type= "text"
                        placeholder="Nombre del archivo"
                        id="nombre"
                        name="nombre"
                    />
                </div>
                <div className="mb-3 text-start App-margRL">
                    <label className="mb-2 px-2">Descripción</label>
                    <textarea 
                        value={descripcion}
                        className="form-control" 
                        onChange={(e) => setDescripcion(e.target.value)} 
                        type= "text"
                        placeholder="Escriba una descripción del archivo aquí."
                        
                    />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text" id="id_categoria">Categoría</label>
                    <select value={id_categoria} className="form-select" id="id_categoria" onChange={(e) => setCategoria(e.target.value)}>
                        <option>-- Seleccione una Categoría --</option>
                        <option value="1">Película</option>
                        <option value="2">Serie</option>
                        <option value="3">Video</option>
                    </select>
                </div>
                <div className="mt-4 App-margRL">
                    <input 
                        files={archivo}
                        className="form-control" 
                        onChange={(e) => setArchivo(e.target.files[0])} 
                        type= "file"
                        accept="video/mp4"
                        name="avatar"       
                    />
                </div>
                <div className="App-marLeftbtn App-margRL d-md-flex justify-content-md-between mt-5">
                    <Link to="/consulta" className='btn btn-primary'>Retornar</Link>
                    <button className="btn btn-primary" type="submit" > Guardar</button> 
                </div>
            </form>
        </div>
    )

}
export default CompCreateFile;