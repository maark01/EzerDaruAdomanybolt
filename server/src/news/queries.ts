/* const getAllNews = "SELECT * FROM news"
const getNewsById = "SELECT * FROM news WHERE news_id = $1"
const addNews = "INSERT INTO news (news_id, news_title, news_text) VALUES ($1, $2, $3)"
const deleteNews = "DELETE FROM news WHERE news_id = $1"
const updateNews = "UPDATE news SET news_title = $1, news_text = $2 WHERE news_id = $3" */
const getAllNews = "SELECT * FROM daru_news"
const getNewsById = "SELECT * FROM daru_news WHERE news_id = ?"
const addNews = "INSERT INTO daru_news (news_id, news_title, news_description, news_published) VALUES (?, ?, ?, ?)"
const deleteNews = "DELETE FROM daru_news WHERE news_id = ?"
const updateNews = "UPDATE daru_news SET news_title = ?, news_description = ? WHERE news_id = ?"

module.exports = {
    getAllNews,
    getNewsById,
    addNews,
    deleteNews,
    updateNews
}