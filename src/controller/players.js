const { showPlayersByCountry, showCountryList, showAllPlayers } = require('../service/players')

exports.getAllPlayers = async (req, res) => {
  
  try {
    const allPlayers = await showAllPlayers()
    res.json(allPlayers)
  } catch (error) {

    res.status(500).send("Internal Server Error")
  
  }
}

exports.getPlayersByCountry = async (req, res) => {
  
  try {
    const providedCountry = req.params.country
    console.log(providedCountry)
    const countryList = await showCountryList()
    
    if (!countryList.some((country) => country === providedCountry)) {
      return res.status(400).send("Invalid Country")
    }
   
    const allPlayers = await showPlayersByCountry(providedCountry)
    res.json(allPlayers)
    

  } catch (error) {

    console.error
    res.status(500).send("Internal Server Error")
  }
}