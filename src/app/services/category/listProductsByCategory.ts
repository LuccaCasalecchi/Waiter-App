import { Request, Response } from 'express';
import { Product } from '../../models/Product.model';

export async function listProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;
  const result = await Product
    .find()
    .where('category')
    .equals(categoryId);

  res.status(200).json(result);
}