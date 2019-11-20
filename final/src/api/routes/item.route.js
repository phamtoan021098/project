const express = require('express');
const sneakerRoutes = express.Router();
const sneakerController=require('../controller/item.controller');
sneakerRoutes.route('/').get(sneakerController.show);
sneakerRoutes.route('/view/:id').get(sneakerController.view);
module.exports=sneakerRoutes;