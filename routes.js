import controller from './controller.js';
import routes from 'express';

const router = routes.Router();

router.get('/items', controller.getItems);
router.post('/items', controller.createItem);
router.put('/items/:id', controller.updateItem);
router.delete('/items/:id', controller.deleteItem);