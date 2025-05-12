import {Opinion} from '../db/models/opinion.model.js'

const responseAPI = {
    msg: "",
    data: [],
    status: 'ok', // o error
    cant: null
}

export const getOpinions = async (req, res, next) =>{
        res.json("getOpinion")
    try{
        const opinions = await Opinion.find()

        responseAPI.msg = "Opiniones encontradas";
        responseAPI.data= opinions;
        responseAPI.status= 'ok';
        responseAPI.cant= opinions.length;

        res.status(200).json(responseAPI)
        //res.json("getOpinion 2")
    }catch(e){
        console.error('error en el try de getOpinions', e)
        next(e)
    }
}

export const createOpinion = async (req, res, next) =>{
    try{
        // no hace falta id porq lo crea mongo
        const {name, opinion} = req.body

        const newOpinion = await Opinion.create({name, opinion})

        responseAPI.msg= 'opinion creada';
        responseAPI.data=newOpinion;
        responseAPI.status= 'ok'

        res.status(201).json(responseAPI)
    } catch(e){
        console.error('error al crear una opinion',e)
        next(e)
    }
}