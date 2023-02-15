import React from "react";
import ver from '../images/ver.png';
import { useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const URI = 'http://192.168.1.10:8000/file/';

const CompRegistrar = ()=>{

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [checkbox1, setCheckbox1] = useState('');
    const [inputSelect, setInputSelect] = useState('');
    const navigate = useNavigate();
    let mensaje = document.getElementById('mensajeHtml');
    
   
    const validarCampos = (props)=>{
       
            window.addEventListener('keydown', async(event)=>{
                event.preventDefault();
                try {

                    if(!nombre == '' && !apellido == '' && !password1 == '' && !email == '' )
                        alert('todos los estan llenos');
                    
                    
                } catch (error) {
                    alert('Tiene campos vacios')
                    console.log(error);
                } 
            }); 
       
    }
        
        

    
    

    return (
        <div className="conatiner" >
            <h1>Registrar</h1>
            

            <div className="d-inline-flex justify-content-center text-start mt-5 px-2">
                <form onsubmit={validarCampos()} id="formUser">
                <strong id='mensajeHtml'></strong>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text" id="userName">Nombre *</span>
                        <input type="text" className="form-control me-2" placeholder="Nombre" aria-label="userName" aria-describedby="basic-addon1" onChange={(e) => setNombre(e.target.value)}/>
                        <span className="input-group-text" id="userLastName">Apellido *</span>
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="userLastName" aria-describedby="basic-addon1" onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="email1">Correo electronico *</span>
                        <input type="email" className="form-control me-2" placeholder="usuario@dominio.com" aria-label="email1" aria-describedby="basic-addon2" onChange={(e) => setEmail(e.target.value)}/>  
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña *</label>
                        <input type="password" className="form-control" id="password1" onChange={(e) => setPassword1(e.target.value)}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="verCheck1" onChange={(e) => setCheckbox1(e.target.value)}/>
                        <img src={ver} width='18rem'/>
                        <label className="ms-2">Visualizar clave</label>
                    </div>
                    <span className="" id="">¿ Como nos has conocido ?</span>
                    <select className="form-select mb-3" aria-label="Default select example" onChange={(e) => setInputSelect(e.target.value)}>
                        <option defaultValue>--- Selecione ---</option>
                        <option value="1">Me recomendo un amigo</option>
                        <option value="2">Facebook</option>
                        <option value="3">Instagram</option>
                        <option value="4">Tiktok</option>
                        <option value="5">Volante - Panfleto</option>
                    </select>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Autorizo el uso de mi correo electrónico para recibir mensajes de publicidad relacionada con temas de interes de esta página.</label>
                    </div>
                    <button className="btn btn-primary">Registrar</button>
                </form>
            </div>
        </div>
        
         
       
        

    )

}
export default CompRegistrar