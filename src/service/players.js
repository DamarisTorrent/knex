const knex = require('../knex.js')

exports.showAllPlayers = async () => {
  const result = await knex('player').select('*')

  return result
}

exports.showPlayersByCountry = async (country) => {
  const result = await knex('player')
    .select('*')
    .where('birthplaceCountry',  country)


  return result
}

exports.showCountryList = async () => {
  let result = await knex('player')
    .distinct('birthplaceCountry')

  result = result.map(country => {
    return country.birthplaceCountry
  })

  console.log(result)
  return result
}