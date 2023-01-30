import { Request, Response } from 'express';
import { Category } from '../../models/Category.model';

export async function listCategories(_req: Request, res: Response) {
  const result = await Category.find();

  res.status(200).json(result);
}

