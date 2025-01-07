const daruDB = require('../daruDB/dbconfig')
const queries = require('./queries')
import { v4 as uuidv4 } from 'uuid';

const getNews = async (req: any, res: any) => {
    await daruDB.query(queries.getAllNews, (error: string, results: any): void => {
         if (error) throw error;
         res.status(200).json(results)
       /*  if (error) return res.json(error);
        return res.status(200).json(results) */
    })
}

const getCurrentNews = async (req: any, res: any) => {
    const news_id = req.params.news_id
    await daruDB.query(queries.getNewsById, [news_id], (error: string, results: any): void => {
        if (error) throw error
        res.status(200).json(results)
    })
}

const createNews = async (req: any, res: any) => {
    const { news_id = uuidv4().split('-').join(''), news_title, news_description, news_published = new Date().toISOString().slice(0,19).replace('T', ' ') } = req.body
    await daruDB.query(queries.addNews, [news_id, news_title, news_description, news_published ], (error: string, results: any): void => {
        if (error) throw error
        res.status(201).send("You have created a new news!")
    })
}

const removeNews = async (req: any, res: any) => {
    const news_id = req.params.news_id
    await daruDB.query(queries.getNewsById, [news_id], (error: string, results: any): void => {
        const noNewsFound = !results.length
        if (noNewsFound) {
            res.send("News does not exist in the database!")
        } else {
            daruDB.query(queries.deleteNews, [news_id], (error: string, results: any): void => {
                if (error) throw error
                res.status(200).send("News removed successfully")
            })
        }
    })
}

const refreshNews = async (req: any, res: any) => {
    const news_id = req.params.news_id
    const { news_title, news_description } = req.body
    await daruDB.query(queries.getNewsById, [news_id], (error: string, results: any): void => {
        const noNewsFound = !results.length
        if (noNewsFound) {
            res.send("News does not exist in the database!")
        } else {
            daruDB.query(queries.updateNews, [news_title, news_description, news_id], (error: string, results: any): void => {
                if (error) throw error
                res.status(200).send("News updated successfully")
            })
        }
    })
}

module.exports = {
    getNews,
    getCurrentNews,
    createNews,
    removeNews,
    refreshNews
}