"use strict";
const { Router } = require('express');
const news_controller = require('../news/controller');
const router = Router();
//http request of news content
router.get('/news', news_controller.getNews);
router.post('/news', news_controller.createNews);
router.get('/:news_id', news_controller.getCurrentNews);
router.put('/:news_id', news_controller.refreshNews);
router.delete('/:news_id', news_controller.removeNews);
module.exports = router;
