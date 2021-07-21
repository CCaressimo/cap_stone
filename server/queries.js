const Pool = require('pg').Pool;
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

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
  pool.query(
    `SELECT * FROM drinks WHERE genre = '${genre}' ORDER BY random() limit 2`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}

const getFaresByGenre = (request, response) => {
  let {genre} = request.params
  console.log(genre)
  pool.query(`SELECT farename, imgurl FROM fares WHERE genre = '${genre}' ORDER BY random() limit 3`, (error, results) => {
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

let getFlixByGenre = (request, response) => {
  let {genre} = request.params
  let {mediatype, streaming_source} = request.query
  pool.query(
    `SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}' AND streaming_source = '${streaming_source}' ORDER BY random() limit 3`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
}

// `SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}' AND streaming_source = '${streaming_source}'`

// `SELECT * genre, mediatype, streaming_source FROM flix (CASE WHEN genre AND mediatype AND streaming_source IS NOT NULL THEN SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}' AND streaming_source = '${streaming_source}' WHEN genre AND mediatype IS NOT NULL AND streaming_source IS NULL THEN SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}' WHEN genre IS NULL AND mediatype AND streaming_source IS NOT NULL THEN SELECT * FROM flix WHERE mediatype = '${mediatype}' AND streaming_source = '${streaming_source}' END)`;

// const getFlixByMedia = (request, response) => {
//   let { genre } = request.params;
//   let { mediatype } = request.query;
//   pool.query(
//     `SELECT * FROM flix WHERE genre = '${genre}' AND mediatype = '${mediatype}'`,
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// };

// const getFlixBySource = (request, response) => {
//   let { mediatype } = request.params;
//   let { streaming_source } = request.query;
//   pool.query(
//     `SELECT * FROM flix WHERE mediatype = '${mediatype}' AND streaming_source = '${streaming_source}'`,
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// };

const postSignUp = async (req, res) => {
  console.log(req.body);
  try {
    const { emailReg } = req.body;
    const { passwordReg } = req.body;
    const { firstName } = req.body;
    const { lastName } = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(passwordReg, salt);
    const newRegister = await pool.query(
      "INSERT INTO userss (email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *",
      [emailReg, bcryptPassword, firstName, lastName]
    );
    res.json(newRegister.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// const postSignUp = (req, res) => {
//   console.log(req.body);
//     //let {email, password} = req.body
//     const { emailReg } = req.body;
//     const { passwordReg } = req.body;
//   console.log({emailReg});
//   pool.query('INSERT INTO userss (email, password) VALUES ($1, $2)', [emailReg, passwordReg])
//   .then(() =>{
//          res.json('SUCCESS')
//   })
// }
 
module.exports = {
  getFares,
  getFaresByGenre,
  getDrinks,
  getDrinksByGenre,
  getFlix,
  getFlixByGenre,
  postSignUp,
};

  // getFlixByMedia,
  // getFlixBySource,
