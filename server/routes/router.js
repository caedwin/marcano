import express from 'express'
import {createFile, deleteFile, getAll, getFile, updateFile  } from '../controller/Controllers.js'
//import { createUser, deleteUser, getUser, getUserAll, updateUser } from "../controller/UserController.js";

const router = express.Router()
//const routerUser = express.Router()

router.get('/', getAll)
router.get('/:id', getFile)
router.get('/play/:id', getFile)
router.post('/', createFile)
router.put('/:id', updateFile)
router.delete('/:id', deleteFile)

// routerUser.get('/user', getUserAll)
// routerUser.get('/user/:id', getUser)
// routerUser.post('/user', createUser)
// routerUser.put('/user/:id', updateUser)
// routerUser.delete('/user/:id', deleteUser)

export default router