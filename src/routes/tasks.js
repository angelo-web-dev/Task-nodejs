const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/', TaskController.index);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.post('/delete', TaskController.destroy);
router.get('/edit/:id', TaskController.edit);
router.post('/edit/:id', TaskController.update);

module.exports = router;