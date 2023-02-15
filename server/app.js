// ********    Conectamos la base de datos ****************
import express from 'express';
import db from "./database/db.js";
import cors from 'cors';
import fileRouter  from './routes/router.js'
import axios from 'axios';

// importamos dependencia para Subir Archivos
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import path from 'path';


// autenticción a la base de datos//
try {
    await db.authenticate();
    console.log('Conexión de autenticación éxitosa a la BD');
} catch (error) {
    console.log(`!!! Error de autenticación: ${error}` )
}

///*******Metodo para subir un archivo a la carpeta Uploads****************

//Manejo de las constantes
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const URI = 'http://192.168.5.43:8000/file/';
// const URI = 'http://192.168.1.10:8000/file/';
const URI_USER = 'http://localhost:8000/user/';

//extensiones para la Api
app.use(cors());
app.use(express.json())
app.use('/file', fileRouter)
app.use('/user', fileRouter)
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: false}))
app.use(express.static('static'));

const storage = multer.diskStorage({ //  controlamos los datos del archivo para asignar nombre
    // Definimos como se va a guardar la imagen
    destination:(req, res, cb)=>{
        const filePath = path.resolve(__dirname,"../uploads/videos"); // carpeta donde guardamos el archivo
        
        console.log(filePath)
        
        cb(null, filePath);    
    },
    filename: function(req,file, cb){
        // Creamos el nombre del archivo
        const fileName = req.body.nombre.replaceAll(" ","_").toLowerCase();
        const fileExtension = path.extname(file.originalname)
        cb(null,`${fileName}-${Date.now()}${fileExtension}`)  
    }   
});

export const upload = multer({   //valida las extensiones del archivo
    storage,
    filesFilter: (req, file, cd)=>{
        const acceptExtension = ['.mp4', '.webm', '.mkv', '.mov', '.3gp', '.3g2', '.m4p'];
        const fileExtension = path.extname(file.originalname) 
        const isAnAcceptExtension = acceptExtension.includes(fileExtension);

        if(isAnAcceptExtension){
            cd(null, true)
        }else{
            cd(null, false)
            res.send('!!! Error de formato, solo puede cargar formatos: .mp4, .ogv, .webm, .mkv')
        }
    }
})

// validamos la ruta del formulario
const controller ={
    index: (req, res)=>{
        return res.sendFile(__dirname + "/views/index.html"); // controla la ruta del formulario
    },
    storageAvatar: async(req, res)=>{ 
        return res.send('Datos enviados')      
    }
}

app.get('/create',controller.index)  // extrae la información del formulario

//Guardamos la información obtenida


app.post('/file',upload.single('avatar'),async(req, res)=>{ 

    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion.toLowerCase;
    const id_categoria = req.body.id_categoria;
    const archivo = req.file.filename;
    
    // guardar la información en la base de datos
    try {

        const mensajeAlerta=()=>{
            document.getElementById('alert').innerHTML.style.display;
        } 

        const store = async (e) =>{

            await axios.post(URI, {
                nombre,
                descripcion,
                id_categoria,
                archivo
            }) 
                  
            res.send('Archivo guardado correctamente');     
            mensajeAlerta(); 
        }
            store();
           
    } catch (error) {
        if(error){
            return res.status(500).send('Error de conexión con la BD');            
        }else{
            console.log("Error inserting : %s ",err );
        }
        
    }
   
})

// Modulo usuarios







//abrimos un puerto de comunicacion al servidor
app.listen(8000, ()=> console.log("Server Conectado puerto :8000 | http://localhost:8000"));