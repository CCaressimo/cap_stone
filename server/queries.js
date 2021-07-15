const Pool = require('pg').Pool;
const bodyParser = require('body-parser')

const pool = new Pool({
  user: 'frasbvsc',
  host: 'batyr.db.elephantsql.com',
  database: 'frasbvsc',
  password: 'aWrjAnvABRS23AynUhv1REWYBoWN8Ixi',
  port: 5432,
})

const getFares = (request, response) => {
  pool.query('SELECT * FROM fares', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFaresByGenre = (request, response) => {
  pool.query("(SELECT farename, imgurl FROM fares WHERE genre = 'Adventure' LIMIT 1) UNION (SELECT drinkname, imgurl FROM drinks WHERE genre = 'Adventure' LIMIT 1)", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getFares,
  getFaresByGenre,
}