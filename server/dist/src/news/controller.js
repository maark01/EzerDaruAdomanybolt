"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const daruDB = require('../daruDB/dbconfig');
const queries = require('./queries');
const uuid_1 = require("uuid");
const getNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield daruDB.query(queries.getAllNews, (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results);
        /*  if (error) return res.json(error);
         return res.status(200).json(results) */
    });
});
const getCurrentNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const news_id = req.params.news_id;
    yield daruDB.query(queries.getNewsById, [news_id], (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results);
    });
});
const createNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { news_id = (0, uuid_1.v4)().split('-').join(''), news_title, news_description, news_published = new Date().toISOString().slice(0, 19).replace('T', ' ') } = req.body;
    yield daruDB.query(queries.addNews, [news_id, news_title, news_description, news_published], (error, results) => {
        if (error)
            throw error;
        res.status(201).send("You have created a new news!");
    });
});
const removeNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const news_id = req.params.news_id;
    yield daruDB.query(queries.getNewsById, [news_id], (error, results) => {
        const noNewsFound = !results.length;
        if (noNewsFound) {
            res.send("News does not exist in the database!");
        }
        else {
            daruDB.query(queries.deleteNews, [news_id], (error, results) => {
                if (error)
                    throw error;
                res.status(200).send("News removed successfully");
            });
        }
    });
});
const refreshNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const news_id = req.params.news_id;
    const { news_title, news_description } = req.body;
    yield daruDB.query(queries.getNewsById, [news_id], (error, results) => {
        const noNewsFound = !results.length;
        if (noNewsFound) {
            res.send("News does not exist in the database!");
        }
        else {
            daruDB.query(queries.updateNews, [news_title, news_description, news_id], (error, results) => {
                if (error)
                    throw error;
                res.status(200).send("News updated successfully");
            });
        }
    });
});
module.exports = {
    getNews,
    getCurrentNews,
    createNews,
    removeNews,
    refreshNews
};
