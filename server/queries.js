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


  let {genre} = request.params

  console.log(genre)

  pool.query(`SELECT farename, imgurl FROM fares WHERE genre = '${genre}'`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const postSignUp = (req, res) => {
    console.log(req.body);
      //let {email, password} = req.body
      const email = req.body.email;
      const password = req.body.password;

    console.log(email);
    pool.query('INSERT INTO userss (email, password) VALUES ($1, $2)', [email, password])
    .then(() =>{
           res.json('SUCCESS')
    })   
}

module.exports = {
  getFares,
  getFaresByGenre,
  postSignUp,
}
