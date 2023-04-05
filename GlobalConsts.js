const {CreateJsonFile} = require('./data/JsonFileHandling')
const ApartmentsList = require('./apartments/Apartmentslist')

const jsonApartment = 'data/Apartments.json'

dict = CreateJsonFile(jsonApartment)
const apartmentsList = new ApartmentsList(dict)

module.exports = {apartmentsList}