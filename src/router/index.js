const root = require('./root')
const players = require('./players')

const router = (app) =>{

  root(app)

  players(app)

  
  
}

module.exports = router