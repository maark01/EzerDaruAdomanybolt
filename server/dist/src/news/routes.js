"use strict";
const { Router } = require('express');
const controller = require('../news/controller');
const router = Router();
//http request of news content
router.get('/news', controller.getNews);
router.post('/news', controller.createNews);
router.get('/:news_id', controller.getCurrentNews);
router.put('/:news_id', controller.refreshNews);
router.delete('/:news_id', controller.removeNews);
module.exports = router;
