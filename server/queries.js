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

const getDrinks = (request, response) => {
  pool.query('SELECT * FROM drinks', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDrinksByGenre = (request, response) => {

  
  let {genre} = request.params

  console.log(genre)

  pool.query(`SELECT * FROM drinks WHERE genre = '${genre}'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




const getFaresByGenre = (request, response) => {

  
  let {genre} = request.params

  console.log(genre)

  pool.query(`SELECT farename, imgurl FROM fares WHERE genre = '${genre}'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFlix = (request, response) => {
  pool.query('SELECT * FROM flix', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFlixByGenre = (request, response) => {

  
  let {genre} = request.params
  let {mediatype, streaming_source} = request.query

  
  console.log(genre);
  console.log(mediatype);
  console.log(streaming_source);



  pool.query(`SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}' AND streaming_source = '${streaming_source}'`  , (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


 

  


module.exports = {
  getFares,
  getFaresByGenre,
  getDrinks,
  getDrinksByGenre,
  getFlix,
  getFlixByGenre
}
