const { getAllPlayers } = require('../controller/players')
const { getPlayersByCountry} =  require('../controller/players')

const players = (app) => {

  app.get('/players', getAllPlayers)
  app.get('/players/country/:country', getPlayersByCountry)
}

module.exports = players