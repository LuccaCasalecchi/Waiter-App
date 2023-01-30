import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

//categories import
import { listCategories } from './services/category/ListCategory';
import { createCategory } from './services/category/createCategory';
import { listProductsByCategory } from './services/category/listProductsByCategory';

import { createOrder, deleteOrder, listOrders, updateOrder } from './services/order/Order.services';
import { createProducts, listProducts, deleteProduct } from './services/product/Product.services';

const router = Router();

const upload = multer({
  storage: multer.diskStorage(
    {
      destination(req, file, callback) {
        //callback(null, path.resolve(__dirname, '..', '..','uploads')); // unix
        callback(null, path.resolve(__dirname, '..', '..', 'uploads').replace('\\src', '')); // windows
      },
      filename(req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
      }
    }),
});

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProducts);
router.delete('/products/:productId', deleteProduct);

router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', updateOrder);
router.delete('/orders/:orderId', deleteOrder);

export default router;