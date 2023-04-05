const { UpdateJsonFile } = require("../data/JsonFileHandling")
const Apartment = require("./Apartment")
const gi = require('../generate_id')

const jsonApartment = 'data/Apartment.json'

class ApartmentsList {
    constructor(json)
    {
        if(json != null)
        {
            json.forEach(data => {
                this.apartmentsArray.push(new Apartment(data.id, data.name, data.image_url))});
        }
    }
    apartmentsArray = [];

    AddApartment(name, imageUrl) //הוספת דירה
    {
        const newApartment = new Apartment(gi.create_unique_id(this.apartmentsArray), name, imageUrl)
        this.apartmentsArray.push(newApartment)
        UpdateJsonFile(this.apartmentsArray,jsonApartment)
        return newApartment
    }

    GetApartment(id)
    {
        const index = this.getIndex(id)
        return this.apartmentsArray[index]
    }

    FindApartment(name)
    {
        let index = this.apartmentsArray.findIndex(e => e.name === name)
        let apartment = null

        if (index < 0)
        {
            return null
        }        

        let e = this.apartmentsArray[index]
        return movie
    }

    isExist(id)
    {
        return this.getIndex(id) != -1 ? true:false
    }

    getIndex(id)
    {
        return this.apartmentsArray.findIndex(e => e.id === id)
    }
}

module.exports = ApartmentsList