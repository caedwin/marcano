//Importar el Modelo

import  { FilesModel } from "../models/Model.js";


//***  Metodos para el CRUD ****//

// Mostrar todos los registros
export const getAll = async (req, res) =>{
    try {
        const files = await FilesModel.findAll();
        res.json(files);
    } catch (error) {
        res.json({ 
           // message: error.message
           message: 'error al cargar los registros = ' + error.message
        })
    }
}
// Mostrar un registro

export const getFile = async (req, res) =>{
    try {
        const file =  await FilesModel.findAll({
             where:{ id:req.params.id }
         })
         res.json(file[0])
     } catch (error) { 
         message: error.message 
     }
}

// Crear un registro

export const createFile = async (req, res)=>{  
    try {
        await FilesModel.create(req.body)
       res.json({ 
        "message": "¡ Registro creado correctamente !"
       })
    } catch (error) {
        message: error.message 
    }
};

export const updateFile = async(req, res) =>{
    try {
        await FilesModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "¡ Registro actualizado correctamente !"
        })
    } catch (error) {
        message: error.message
    }
}

// Eliminar un Registro

export const deleteFile = async(req, res) =>{
    try {
        await FilesModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "¡ Registro eliminado correctamente !"
        })
    } catch (error) {
        message: error.message
    }
}
