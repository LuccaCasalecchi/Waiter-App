import {Request,Response} from 'express';
import {Category} from '../../models/Category.model';


export async function createCategory(req:Request,res:Response){
  try{
    const {name,icon} = req.body;

    if(!name||!icon){
      return res.status(400).json({error:'Missing name or icon'});
    }

    const result = await Category.create({name,icon});

    res.status(201).json(result);
  }catch(error){
    res.status(500).json({error});
  }
}

